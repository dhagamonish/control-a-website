
import React from 'react';
import './Footer.css';

const Footer = () => {
    return (
        <footer className="footer-simple">
            <div className="footer-brand">
                <img src="/logo.png" alt="control + a" className="footer-logo-img" />
            </div>
            <div className="container">
                <div className="footer-content">
                    <div className="footer-links">
                        <a href="#">Process</a>
                        <a href="#">Pricing</a>
                        <a href="#">Login</a>
                    </div>
                </div>
            </div>
        </footer>
    );
};

export default Footer;
