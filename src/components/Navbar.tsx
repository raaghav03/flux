"use client";
import React from 'react'
import Logo from "../../public/Logo.svg"
import { Menu } from 'lucide-react';

const Navbar = () => {
    return (
        <div className='p-4 flex justify-between'>
            <Logo className="inline" />
            <Menu />
        </div>
    )
}

export default Navbar
