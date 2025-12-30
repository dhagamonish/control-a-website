
import React, { useState, useEffect } from 'react';
import './Navbar.css';

const Navbar = () => {
    const [scrollProgress, setScrollProgress] = useState(0);

    useEffect(() => {
        const handleScroll = () => {
            const scrollTotal = window.innerHeight * 1.5; // Longer distance for slower transition
            let progress = window.scrollY / scrollTotal;

            if (progress < 0) progress = 0;
            if (progress > 1) progress = 1;

            setScrollProgress(progress);
        };

        window.addEventListener('scroll', handleScroll);
        handleScroll();

        return () => window.removeEventListener('scroll', handleScroll);
    }, []);

    return (
        <div
            className={`global-navbar ${scrollProgress > 0.05 ? 'scrolled' : ''}`}
            style={{
                '--scroll-progress': scrollProgress
            }}
        >
            <img src="/logo.png" alt="control + a" className="brand-logo-img" />
        </div>
    );
};

export default Navbar;
