import { Fragment } from 'react'
import { Disclosure, Menu, Transition } from '@headlessui/react'
import { MenuIcon, XIcon } from '@heroicons/react/outline'
import { Link } from 'react-router-dom';
import useAuth from '../../Hooks/useAuth';
// import userIcon from '../../../Images/user.png';

const Navigation = () => {
    const { user, logOut, userRole } = useAuth();
    const handleLogout = () => {
        logOut();
    }
    return (
        <Disclosure as="nav" className="bg-gray-800">
            {({ open }) => (
                <>
                    <div className="max-w-7xl mx-auto px-2 sm:px-6 lg:px-8">
                        <div className="relative flex items-center justify-between h-16">
                            <div className="absolute inset-y-0 left-0 flex items-center sm:hidden">
                                {/* Mobile menu button*/}
                                <Disclosure.Button className="inline-flex items-center justify-center p-2 rounded-md text-gray-400 hover:text-white hover:bg-gray-700 focus:outline-none focus:ring-2 focus:ring-inset focus:ring-white">
                                    <span className="sr-only">Open main menu</span>
                                    {open ? (
                                        <XIcon className="block h-6 w-6" aria-hidden="true" />
                                    ) : (
                                        <MenuIcon className="block h-6 w-6" aria-hidden="true" />
                                    )}
                                </Disclosure.Button>
                            </div>
                            <div className="flex-1 flex items-center justify-center sm:items-stretch sm:justify-start">
                                <div className="flex-shrink-0 flex items-center">

                                    <h3 className="block lg:hidden h-8 w-fit text-violet-300 font-bold text-2xl">Parallaxl</h3>
                                    {/* <img
                                        className="hidden lg:block h-8 w-fit"
                                        src={logo}
                                        alt="Workflow"
                                    /> */}
                                    <h3 className="hidden lg:block h-8 w-fit text-violet-300 font-bold text-2xl">Parallaxl</h3>
                                </div>
                                <div className="hidden sm:block sm:ml-6">
                                    <div className="flex space-x-4">

                                        <Link to="/" className='bg-gray-900 text-white px-3 py-2 rounded-md text-sm font-medium'>Home</Link>
                                        {/* {
                                            user.email ? ' ' : <Link to="/login" className='bg-gray-900 text-white px-3 py-2 rounded-md text-sm font-medium'>Login</Link>
                                        } */}
                                        <Link to="/createpost" className='bg-gray-900 text-white px-3 py-2 rounded-md text-sm font-medium'>Create Post</Link>
                                        {
                                            !user?.email ? <Link to="/login" className='bg-gray-900 text-white px-3 py-2 rounded-md text-sm font-medium'>Login</Link>
                                                :
                                                <button className='bg-red-900 text-white px-3 py-2 rounded-md text-sm font-medium' onClick={handleLogout}>Logout</button>
                                        }
                                        {
                                            userRole === 'admin' && <Link to="/dashboard" className='bg-gray-900 text-white px-3 py-2 rounded-md text-sm font-medium'>Dashboard</Link>
                                        }
                                        {
                                            userRole === 'staff' && <Link to="/staffboard" className='bg-gray-900 text-white px-3 py-2 rounded-md text-sm font-medium'>Manage Site</Link>
                                        }

                                    </div>
                                </div>
                            </div>
                            <div className="absolute inset-y-0 right-0 flex items-center pr-2 sm:static sm:inset-auto sm:ml-6 sm:pr-0">



                            </div>
                        </div>
                    </div>

                    <Disclosure.Panel className="sm:hidden">
                        <div className="px-2 pt-2 pb-3 space-y-1 space-x-1">
                            <Link to="/" className='block bg-gray-900 text-white px-3 py-2 rounded-md text-sm font-medium'>Home</Link>
                            {/* {
                                            user.email ? ' ' : <Link to="/login" className='bg-gray-900 text-white px-3 py-2 rounded-md text-sm font-medium'>Login</Link>
                                        } */}
                            <Link to="/createpost" className='block bg-gray-900 text-white px-3 py-2 rounded-md text-sm font-medium'>Create Post</Link>
                            <Link to="/login" className='block bg-gray-900 text-white px-3 py-2 rounded-md text-sm font-medium'>Login</Link>
                            <Link to="/dashboard" className=' block bg-gray-900 text-white px-3 py-2 rounded-md text-sm font-medium'>Dashboard</Link>
                            <button className='block bg-red-900 text-white px-3 py-2 rounded-md text-sm font-medium'>Logout</button>
                        </div>
                    </Disclosure.Panel>
                </>
            )}
        </Disclosure>
    );
};

export default Navigation;