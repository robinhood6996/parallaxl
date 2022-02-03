import { Disclosure, } from '@headlessui/react';
import { MenuIcon, XIcon } from '@heroicons/react/outline'
import React, { Fragment } from 'react';
import { Link, Outlet } from 'react-router-dom';

const StaffBoard = () => {
    return (
        <div>
            <>
                <div className="min-h-full">
                    <Disclosure as="nav" className="bg-gray-800">
                        {({ open }) => (
                            <>
                                <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                                    <div className="flex items-center justify-between h-16">
                                        <div className="flex items-center">
                                            <div className="flex-shrink-0">
                                                <img
                                                    className="h-8 w-8"
                                                    src="https://tailwindui.com/img/logos/workflow-mark-indigo-500.svg"
                                                    alt="Workflow"
                                                />
                                            </div>
                                            <div className="hidden md:block">
                                                <div className="ml-10 flex items-baseline space-x-4">
                                                    <Link to="/staffboard" className='bg-gray-900 text-white px-3 py-2 rounded-md text-sm font-medium'>Staffboard</Link>
                                                    <Link to="/staffboard/users" className='bg-gray-900 text-white px-3 py-2 rounded-md text-sm font-medium'>Users</Link>

                                                    <Link to="/staffboard/posts" className='bg-gray-900 text-white px-3 py-2 rounded-md text-sm font-medium'>Posts</Link>
                                                    <Link to="/staffboard/pendingposts" className='bg-gray-900 text-white px-3 py-2 rounded-md text-sm font-medium'>Pending Posts</Link>
                                                    <Link to="/" className='bg-gray-900 text-white px-3 py-2 rounded-md text-sm font-medium block'>Visit Site</Link>
                                                </div>
                                            </div>
                                        </div>
                                        <div className="hidden md:block">
                                            <div className="ml-4 flex items-center md:ml-6">
                                                <button
                                                    type="button"
                                                    className="bg-gray-800 p-1 rounded-full text-gray-400 hover:text-white focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-offset-gray-800 focus:ring-white"
                                                >
                                                </button>
                                            </div>
                                        </div>
                                        <div className="-mr-2 flex md:hidden">
                                            {/* Mobile menu button */}
                                            <Disclosure.Button className="bg-gray-800 inline-flex items-center justify-center p-2 rounded-md text-gray-400 hover:text-white hover:bg-gray-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-offset-gray-800 focus:ring-white">
                                                <span className="sr-only">Open main menu</span>
                                                {open ? (
                                                    <XIcon className="block h-6 w-6" aria-hidden="true" />
                                                ) : (
                                                    <MenuIcon className="block h-6 w-6" aria-hidden="true" />
                                                )}
                                            </Disclosure.Button>
                                        </div>
                                    </div>
                                </div>

                                <Disclosure.Panel className="md:hidden">
                                    <div className="px-2 pt-2 pb-3 space-y-1 sm:px-3">

                                        <Link to="/staffboard" className='bg-gray-900 text-white px-3 py-2 rounded-md text-sm font-medium'>Staffboard</Link>
                                        <Link to="/staffboard/users" className='bg-gray-900 text-white px-3 py-2 rounded-md text-sm font-medium'>Users</Link>

                                        <Link to="/staffboard/posts" className='bg-gray-900 text-white px-3 py-2 rounded-md text-sm font-medium'>Posts</Link>
                                        <Link to="/staffboard/pendingposts" className='bg-gray-900 text-white px-3 py-2 rounded-md text-sm font-medium'>Pending Posts</Link>
                                        <Link to="/" className='bg-gray-900 text-white px-3 py-2 rounded-md text-sm font-medium block'>Visit Site</Link>

                                    </div>

                                </Disclosure.Panel>
                            </>
                        )}
                    </Disclosure>

                    <header className="bg-white shadow">
                        <div className="max-w-7xl mx-auto py-6 px-4 sm:px-6 lg:px-8">
                            <h1 className="text-3xl font-bold text-gray-900">Staff Board</h1>
                        </div>
                    </header>

                    <main>
                        <div className="max-w-7xl mx-auto py-6 sm:px-6 lg:px-8">
                            {/* Replace with your content */}

                            <Outlet />
                            {/* /End replace */}
                        </div>
                    </main>
                </div>
            </>
        </div>
    );
};

export default StaffBoard;