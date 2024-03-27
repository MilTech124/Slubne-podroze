"use client"
import React, { useState } from 'react';

const Header = () => {
    const [isMobileNavOpen, setIsMobileNavOpen] = useState(false);

    const toggleMobileNav = () => {
        setIsMobileNavOpen(!isMobileNavOpen);
    };

    return (
        <header className=' absolute w-full  top-0 left-0 z-10'>
            <nav className="relative flex items-center text-white p-4 mx-auto container">
                {/* Desktop Navigation */}
                <div className='pr-10 hover:scale-105 transition-transform '>
                    <a href="#"><img src="/logo.webp" width={150} /></a>
                </div>
                <ul className="hidden md:flex gap-5 space-x-4">
                    <li><a href="#">O nas</a></li>
                    <li><a href="#">Aktualnosci</a></li>
                    <li><a href="#">Odcinki</a></li>
                    <li><a href="#">Kontakt</a></li>
                </ul>

                {/* Mobile Navigation */}
                <button className="md:hidden absolute top-5 right-5" onClick={toggleMobileNav}>
                    <svg className="w-6 h-6" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                        <path d="M3 12h18M3 6h18M3 18h18"></path>
                    </svg>
                </button>
                {isMobileNavOpen && (
                    <ul className="md:hidden space-x-4">
                    <li><a href="#">O nas</a></li>
                    <li><a href="#">Aktualnosci</a></li>
                    <li><a href="#">Odcinki</a></li>
                    <li><a href="#">Kontakt</a></li>
                    </ul>
                )}
            </nav>
        </header>
    );
};

export default Header;