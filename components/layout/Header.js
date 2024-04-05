"use client"
import React, { useState } from 'react';
import Link from 'next/link';

const Header = () => {
    const [isMobileNavOpen, setIsMobileNavOpen] = useState(false);

    const toggleMobileNav = () => {
        setIsMobileNavOpen(!isMobileNavOpen);
    };

    return (
        <header className=' absolute w-full  top-0 left-0 z-10' style={isMobileNavOpen ? {background:"#1D2327",height:600} :null} >
            <nav className="relative flex items-center text-white p-4 mx-auto container">
                {/* Desktop Navigation */}
                <div className='pr-10 hover:scale-105 transition-transform'>
                    <Link href="/"><img src="/logo.webp" width={150} /></Link>
                </div>
                <ul className="hidden md:flex gap-5 space-x-4">
                    
                    <li><Link href="/#aktualnosci">Aktualnosci</Link></li>
                    <li><Link href="/#odcinki">Odcinki</Link></li>
                    <li><Link href="/kontakt">Kontakt</Link></li>
                </ul>

                {/* Mobile Navigation */}
                <button className="md:hidden absolute top-5 right-5" onClick={toggleMobileNav}>
                    <svg className="w-6 h-6" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                        <path d="M3 12h18M3 6h18M3 18h18"></path>
                    </svg>
                </button>
                {isMobileNavOpen && (
                    <ul className="md:hidden absolute text-center top-[200px] left-1/2 -translate-x-1/2">
                    
                    <li className='text-xl pb-2'><Link href="/#aktualnosci">Aktualnosci</Link></li>
                    <li className='text-xl pb-2'><Link href="/#odcinki">Odcinki</Link></li>
                    <li className='text-xl pb-2'><Link href="/kontakt">Kontakt</Link></li>
                    </ul>
                )}
            </nav>
        </header>
    );
};

export default Header;