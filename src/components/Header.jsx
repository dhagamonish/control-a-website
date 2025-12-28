
import React from 'react';
import './Header.css';

const Header = () => {
    return (
        <header className="header">
            <div className="header-left">
                <span className="phone-number">+1 (555) 000-0000</span>
            </div>

            <div className="header-center">
                <div className="logo">
                    {/* Text Logo as per brand name, usually SVG but text for now */}
                    <span className="logo-text">Control + A</span>
                </div>
            </div>

            <div className="header-right">
                <div className="social-icons">
                    <span className="icon">IG</span>
                    <span className="icon">FB</span>
                    <span className="icon">LI</span>
                </div>
            </div>
        </header>
    );
};

export default Header;
