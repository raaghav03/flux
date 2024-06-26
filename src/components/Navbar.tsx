"use client"
import React, { useState } from 'react';
import Logo from "../../public/assets/Logo.svg";
import { Menu } from 'lucide-react';
import PrimaryButton from './PrimaryButton';

const Navbar = () => {
    const [isMenuOpen, setMenuOpen] = useState(false);

    const toggleMenu = () => {
        setMenuOpen(prevState => !prevState);
    };

    return (
        <>
            <div className='p-4 flex justify-between w-full'>
                <Menu className={`md:hidden ${isMenuOpen ? 'block' : 'hidden'}`} />
                <div>
                    <nav className="bg-white dark:bg-gray-900 fixed w-full z-20 top-0 start-0 border-b border-gray-200 dark:border-gray-600">
                        <div className="max-w-screen-xl flex flex-wrap items-center justify-between mx-auto p-4">
                            <a href="https://fluxui.vercel.app/" className="flex items-center space-x-3 rtl:space-x-reverse">
                                <Logo className="inline lg:scale-150" />
                            </a>
                            <div className="flex md:order-2 space-x-3 md:space-x-0 rtl:space-x-reverse">
                                <PrimaryButton />
                                <button
                                    onClick={toggleMenu}
                                    type="button"
                                    className={`inline-flex items-center p-2 w-10 h-10 justify-center text-sm text-gray-500 rounded-lg md:hidden hover:bg-gray-100 focus:outline-none focus:ring-2 focus:ring-gray-200 dark:text-gray-400 dark:hover:bg-gray-700 dark:focus:ring-gray-600 ${isMenuOpen ? 'bg-gray-200' : ''}`}
                                    aria-controls="navbar-sticky"
                                    aria-expanded={isMenuOpen ? "true" : "false"}
                                >
                                    <span className="sr-only">Open main menu</span>
                                    <svg className="w-5 h-5" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 17 14">
                                        <path stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M1 1h15M1 7h15M1 13h15" />
                                    </svg>
                                </button>
                            </div>
                            <div className={`items-center justify-between w-full md:flex md:w-auto md:order-1 ${isMenuOpen ? 'block' : 'hidden'}`} id="navbar-sticky">
                                <ul className="flex flex-col p-4 md:p-0 mt-4 font-medium border border-gray-100 rounded-lg bg-gray-50 md:space-x-8 rtl:space-x-reverse md:flex-row md:mt-0 md:border-0 md:bg-white dark:bg-gray-800 md:dark:bg-gray-900 dark:border-gray-700">
                                    <li>
                                        <a href="#" className="block py-2 px-3 text-white bg-blue-700 rounded md:bg-transparent md:text-blue-700 md:p-0 md:dark:text-blue-500 hover:bg-blue-800 dark:hover:bg-blue-700 md:hover:bg-blue-800 md:hover:text-white dark:hover:text-white md:dark:hover:bg-blue-800 dark:border-gray-700">Home</a>
                                    </li>
                                    <li>
                                        <a href="#" className="block py-2 px-3 text-gray-900 rounded hover:bg-gray-100 md:hover:bg-transparent md:hover:text-blue-700 md:p-0 md:dark:hover:text-blue-500 dark:text-white dark:hover:bg-gray-700 dark:hover:text-white md:dark:hover:bg-transparent dark:border-gray-700">About</a>
                                    </li>
                                    <li>
                                        <a href="#" className="block py-2 px-3 text-gray-900 rounded hover:bg-gray-100 md:hover:bg-transparent md:hover:text-blue-700 md:p-0 md:dark:hover:text-blue-500 dark:text-white dark:hover:bg-gray-700 dark:hover:text-white md:dark:hover:bg-transparent dark:border-gray-700">Services</a>
                                    </li>
                                    <li>
                                        <a href="#" className="block py-2 px-3 text-gray-900 rounded hover:bg-gray-100 md:hover:bg-transparent md:hover:text-blue-700 md:p-0 md:dark:hover:text-blue-500 dark:text-white dark:hover:bg-gray-700 dark:hover:text-white md:dark:hover:bg-transparent dark:border-gray-700">Contact</a>
                                    </li>
                                </ul>
                            </div>
                        </div>
                    </nav>
                </div>
            </div>
        </>
    );
};

export default Navbar;
