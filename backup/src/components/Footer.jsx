
import React from 'react';
import './Footer.css';

const Footer = () => {
    return (
        <footer className="global-footer section-container">
            <div className="footer-inner">
                <div className="footer-brand">
                    <img src="/logo.png" alt="control + a" className="footer-logo-small" />
                    <p className="meta-text" style={{ textTransform: 'none', marginTop: 'var(--space-8)' }}>
                        Control without complexity.
                    </p>
                </div>

                <div className="footer-nav">
                    <div className="footer-links">
                        <a href="#" className="meta-text">Process</a>
                        <a href="#" className="meta-text">Pricing</a>
                        <a href="#" className="meta-text">Login</a>
                    </div>
                </div>

                <div className="footer-bottom">
                    <p className="meta-text" style={{ textTransform: 'none' }}>© 2026 Control + A Intelligence Layer.</p>
                </div>
            </div>
        </footer>
    );
};

export default Footer;
