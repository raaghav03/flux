"use client";
import React from 'react'
import Logo from "../../public/assets/Logo.svg"
import { Menu } from 'lucide-react';

const Navbar = () => {
    return (
        <div className='p-4 flex justify-between'>
            <Logo className="inline" />
            <Menu className='md:hidden' />
        </div>
    )
}

export default Navbar
