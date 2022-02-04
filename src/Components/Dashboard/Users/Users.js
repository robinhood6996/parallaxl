import axios from 'axios';
import React, { useEffect, useState } from 'react';

const Users = () => {
    const [users, setUsers] = useState([]);
    const [status, setStatus] = useState();
    const [statusValue, setStatusValue] = useState(2);
    useEffect(() => {
        axios.get('https://secret-crag-61568.herokuapp.com/users')
            .then(res => {
                setUsers(res.data);
            })
    }, [status]);
    const inactiveUsers = users.filter(user => user.status === 0);
    const activeUsers = users.filter(user => user.status === 1);

    //Change Status 
    const handleStatus = (email, status) => {
        const confirm = window.confirm(`Are you sure to make this user ${status === 1 ? 'Active' : 'Inactive'} ?`);
        if (confirm) {
            axios.put(`https://secret-crag-61568.herokuapp.com/users/status/${email}`, { status: status })
                .then(res => {
                    if (res.data.matchedCount) {
                        alert('Status Changed');
                        setStatus(status);
                    }
                })
        }
    }

    const handleSearch = event => {
        const searchText = event.target.value;
        const matchedProducts = users.filter(user => user.email.toLowerCase().includes(searchText.toLowerCase()));
        setUsers(matchedProducts);

    }
    console.log(statusValue)
    return (
        <div className="flex flex-col">
            <div className="-my-2 overflow-x-auto sm:-mx-6 lg:-mx-8">
                <div className="py-2 align-middle inline-block min-w-full sm:px-6 lg:px-8">
                    <div className="shadow overflow-hidden border-b border-gray-200 sm:rounded-lg">
                        <h2 className='text-center font-bold text-2xl'>Users</h2>
                        <div className='grid grid-cols-2 border p-4'>
                            <div className="filter">
                                <label htmlFor="status" className='mx-2 font-bold'>Filter Users</label>
                                <select name="status" id="" className='bg-violet-200' onChange={e => setStatusValue(parseInt(e.target.value))}>
                                    <option selected>Select Status</option>
                                    <option value="1">Active</option>
                                    <option value="0">Inactive</option>
                                </select>
                            </div>

                            <div className="search">
                                <label htmlFor="search" className='font-bold'>Search Users</label>
                                <input onChange={handleSearch} type="text" placeholder='Enter User Email' className='border p-2 mx-2' />
                            </div>
                        </div>
                        <table className="min-w-full divide-y divide-gray-200">
                            <thead className="bg-gray-50">
                                <tr>
                                    <th
                                        scope="col"
                                        className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider"
                                    >
                                        Username
                                    </th>
                                    <th
                                        scope="col"
                                        className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider"
                                    >
                                        Email
                                    </th>
                                    <th
                                        scope="col"
                                        className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider"
                                    >
                                        Activity
                                    </th>

                                    <th
                                        scope="col"
                                        className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider"
                                    >
                                        Role
                                    </th>
                                    <th
                                        scope="col"
                                        className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider"
                                    >
                                        Action
                                    </th>
                                </tr>
                            </thead>
                            <tbody className="bg-white divide-y divide-gray-200">
                                {statusValue === 2 && users.map((user) => (
                                    <tr key={user._id}>
                                        <td className="px-6 py-4 whitespace-nowrap">
                                            <div className="flex items-center">

                                                <div className="ml-4">
                                                    <div className="text-sm font-medium text-gray-900">{user.displayName}</div>

                                                </div>
                                            </div>
                                        </td>
                                        <td className="px-6 py-4 whitespace-nowrap">
                                            <div className="text-sm text-gray-900">{user.email}</div>
                                            {/* <div className="text-sm text-gray-500">{person.department}</div> */}
                                        </td>
                                        <td className="px-6 py-4 whitespace-nowrap">
                                            {
                                                user?.status === 1 ? <button onClick={() => handleStatus(user.email, 0)} className="px-2 inline-flex text-xs leading-5 font-semibold rounded-full bg-green-100 text-green-800" title='Click to mark this user as Inactive'>
                                                    Active
                                                </button> :

                                                    <button onClick={() => handleStatus(user.email, 1)} className="px-2 inline-flex text-xs leading-5 font-semibold rounded-full bg-yellow-300 text-black" title='Click to mark this user as Active'>
                                                        Inactive
                                                    </button>
                                            }

                                        </td>
                                        <td className="px-6 py-4 whitespace-nowrap">
                                            <div className="text-sm text-gray-900">{user.role}</div>
                                            {/* <div className="text-sm text-gray-500">{person.department}</div> */}
                                        </td>
                                        <td className="px-6 py-4 whitespace-nowrap text-right text-sm font-medium">
                                            <button className="text-red-600 hover:text-red-900 bg-violet-300 p-2 rounded font-bold" >
                                                Delete
                                            </button>

                                        </td>
                                    </tr>
                                ))}
                                {statusValue === 1 && activeUsers.map((user) => (
                                    <tr key={user._id}>
                                        <td className="px-6 py-4 whitespace-nowrap">
                                            <div className="flex items-center">

                                                <div className="ml-4">
                                                    <div className="text-sm font-medium text-gray-900">{user.displayName}</div>

                                                </div>
                                            </div>
                                        </td>
                                        <td className="px-6 py-4 whitespace-nowrap">
                                            <div className="text-sm text-gray-900">{user.email}</div>
                                            {/* <div className="text-sm text-gray-500">{person.department}</div> */}
                                        </td>
                                        <td className="px-6 py-4 whitespace-nowrap">
                                            {
                                                user?.status === 1 ? <button onClick={() => handleStatus(user.email, 0)} className="px-2 inline-flex text-xs leading-5 font-semibold rounded-full bg-green-100 text-green-800" title='Click to mark this user as Inactive'>
                                                    Active
                                                </button> :

                                                    <button onClick={() => handleStatus(user.email, 1)} className="px-2 inline-flex text-xs leading-5 font-semibold rounded-full bg-yellow-300 text-black" title='Click to mark this user as Active'>
                                                        Inactive
                                                    </button>
                                            }

                                        </td>
                                        <td className="px-6 py-4 whitespace-nowrap">
                                            <div className="text-sm text-gray-900">{user.role}</div>
                                            {/* <div className="text-sm text-gray-500">{person.department}</div> */}
                                        </td>
                                        <td className="px-6 py-4 whitespace-nowrap text-right text-sm font-medium">
                                            <button className="text-red-600 hover:text-red-900 bg-violet-300 p-2 rounded font-bold" >
                                                Delete
                                            </button>

                                        </td>
                                    </tr>
                                ))}

                                {statusValue === 0 && inactiveUsers.map((user) => (
                                    <tr key={user._id}>
                                        <td className="px-6 py-4 whitespace-nowrap">
                                            <div className="flex items-center">

                                                <div className="ml-4">
                                                    <div className="text-sm font-medium text-gray-900">{user.displayName}</div>

                                                </div>
                                            </div>
                                        </td>
                                        <td className="px-6 py-4 whitespace-nowrap">
                                            <div className="text-sm text-gray-900">{user.email}</div>
                                            {/* <div className="text-sm text-gray-500">{person.department}</div> */}
                                        </td>
                                        <td className="px-6 py-4 whitespace-nowrap">
                                            {
                                                user?.status === 1 ? <button onClick={() => handleStatus(user.email, 0)} className="px-2 inline-flex text-xs leading-5 font-semibold rounded-full bg-green-100 text-green-800" title='Click to mark this user as Inactive'>
                                                    Active
                                                </button> :

                                                    <button onClick={() => handleStatus(user.email, 1)} className="px-2 inline-flex text-xs leading-5 font-semibold rounded-full bg-yellow-300 text-black" title='Click to mark this user as Active'>
                                                        Inactive
                                                    </button>
                                            }

                                        </td>
                                        <td className="px-6 py-4 whitespace-nowrap">
                                            <div className="text-sm text-gray-900">{user.role}</div>
                                            {/* <div className="text-sm text-gray-500">{person.department}</div> */}
                                        </td>
                                        <td className="px-6 py-4 whitespace-nowrap text-right text-sm font-medium">
                                            <button className="text-red-600 hover:text-red-900 bg-violet-300 p-2 rounded font-bold" >
                                                Delete
                                            </button>

                                        </td>
                                    </tr>
                                ))}
                            </tbody>
                        </table>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Users;