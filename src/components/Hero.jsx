
import React from 'react';
import './Hero.css';

const Hero = ({ onBook }) => {
    return (
        <section className="hero-section">
            <div className="hero-card">
                <div className="hero-grid-lines">
                    <div className="grid-v v1"></div>
                    <div className="grid-v v2"></div>
                    <div className="grid-h h1"></div>
                    <div className="grid-h h2"></div>
                </div>

                <div className="hero-content">
                    {/* Main Text */}
                    <h1 className="hero-headline">
                        Designed for businesses that want control,<br />not complexity.
                    </h1>

                    <p className="hero-subtext">
                        We design and set up simple systems that handle bookings, calls, updates, and internal tasks so your day runs smoothly even when you are not watching everything.
                    </p>

                    <div className="hero-ctas-container">
                        <div className="hero-ctas">
                            <button className="btn-primary-green" onClick={onBook}>
                                Book a clarity call
                            </button>
                        </div>
                        <p className="cta-microcopy">A short conversation to understand how your business runs today and where things get stuck.</p>
                    </div>
                </div>

                <div className="floating-elements">
                    {/* Visual 1: Calendar/Schedule */}
                    <div className="float-icon icon-tl" style={{ '--r': '-15deg' }}>
                        <div className="icon-3d-wrapper">
                            <svg viewBox="0 0 24 24" width="60%" height="60%" fill="none" stroke="#000" strokeWidth="2"><rect x="3" y="4" width="18" height="18" rx="2" ry="2"></rect><line x1="16" y1="2" x2="16" y2="6"></line><line x1="8" y1="2" x2="8" y2="6"></line><line x1="3" y1="10" x2="21" y2="10"></line></svg>
                        </div>
                    </div>
                    {/* Visual 2: Flow/Nodes */}
                    <div className="float-icon icon-bl" style={{ '--r': '10deg' }}>
                        <div className="icon-3d-wrapper" style={{ background: '#000' }}>
                            <svg viewBox="0 0 24 24" width="60%" height="60%" fill="none" stroke="#fff" strokeWidth="2"><circle cx="18" cy="5" r="3"></circle><circle cx="6" cy="12" r="3"></circle><circle cx="18" cy="19" r="3"></circle><line x1="8.59" y1="13.51" x2="15.42" y2="17.49"></line><line x1="15.41" y1="6.51" x2="8.59" y2="10.49"></line></svg>
                        </div>
                    </div>
                    {/* Visual 3: Dashboard/Check */}
                    <div className="float-icon icon-tr" style={{ '--r': '15deg' }}>
                        <div className="icon-3d-wrapper" style={{ background: '#fff' }}>
                            <svg viewBox="0 0 24 24" width="60%" height="60%" fill="none" stroke="#000" strokeWidth="2"><polyline points="20 6 9 17 4 12"></polyline></svg>
                        </div>
                    </div>
                    {/* Visual 4: Stack/Queue */}
                    <div className="float-icon icon-br" style={{ '--r': '-10deg' }}>
                        <div className="icon-3d-wrapper" style={{ background: '#fff' }}>
                            <svg viewBox="0 0 24 24" width="60%" height="60%" fill="none" stroke="#000" strokeWidth="2"><path d="M12 2L2 7l10 5 10-5-10-5z"></path><path d="M2 17l10 5 10-5"></path><path d="M2 12l10 5 10-5"></path></svg>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
};

export default Hero;
