
import React, { useState, useEffect } from 'react';
import './BookingPage.css';

const BookingPage = ({ onClose }) => {
    // Fade in animation matching homepage feel
    const [isVisible, setIsVisible] = useState(false);
    useEffect(() => {
        setIsVisible(true);
        window.scrollTo(0, 0);
    }, []);

    return (
        <div className={`booking-container ${isVisible ? 'visible' : ''}`}>
            <button className="close-btn" onClick={onClose} aria-label="Go back">
                <svg viewBox="0 0 24 24" width="28" height="28" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round">
                    <line x1="19" y1="12" x2="5" y2="12"></line>
                    <polyline points="12 19 5 12 12 5"></polyline>
                </svg>
            </button>

            <div className="booking-content-wrapper">
                {/* SECTION 1: CONTEXT SETTING */}
                <section className="booking-section-green">
                    <div className="hero-grid-lines"></div>
                    <div className="booking-hero-content">
                        <h1 className="hero-headline">A calm, practical conversation.</h1>
                        <p className="hero-subtext">
                            This isn’t a sales call. We’ll understand how your business works today, where friction exists, and whether a simple system could help.
                        </p>
                    </div>

                    <div className="floating-elements">
                        {/* ICON 1: COMMAND/SELECTION */}
                        <div className="float-icon icon-tl" style={{ '--r': '-15deg' }}>
                            <svg viewBox="0 0 24 24" width="80" height="80" fill="none" stroke="#000" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round">
                                <path d="M5 3l14 9-14 9V3z"></path>
                                <path d="M12 12l9 9"></path>
                            </svg>
                        </div>
                        {/* ICON 2: WORKFLOW NODES */}
                        <div className="float-icon icon-tr" style={{ '--r': '15deg' }}>
                            <svg viewBox="0 0 24 24" width="80" height="80" fill="none" stroke="#000" strokeWidth="1.5">
                                <circle cx="12" cy="12" r="3"></circle>
                                <circle cx="19" cy="5" r="2"></circle>
                                <circle cx="5" cy="19" r="2"></circle>
                                <line x1="14.5" y1="10.5" x2="17.5" y2="6.5"></line>
                                <line x1="9.5" y1="13.5" x2="6.5" y2="17.5"></line>
                            </svg>
                        </div>
                        {/* ICON 3: AUTOMATION (Bolt) */}
                        <div className="float-icon icon-bl" style={{ '--r': '10deg' }}>
                            <svg viewBox="0 0 24 24" width="70" height="70" fill="none" stroke="#000" strokeWidth="1.5">
                                <polyline points="13 2 3 14 12 14 11 22 21 10 12 10 13 2"></polyline>
                            </svg>
                        </div>
                        {/* ICON 4: TIME/SYNC (Clock) */}
                        <div className="float-icon icon-br" style={{ '--r': '-10deg' }}>
                            <svg viewBox="0 0 24 24" width="70" height="70" fill="none" stroke="#000" strokeWidth="1.5">
                                <circle cx="12" cy="12" r="10"></circle>
                                <polyline points="12 6 12 12 16 14"></polyline>
                            </svg>
                        </div>
                    </div>
                </section>

                {/* SECTION 2: WHAT THIS CALL IS FOR */}
                <section className="booking-section">
                    <span className="p-label">What this call is for</span>
                    <ul className="bullet-points">
                        <li>Understanding your current workflow</li>
                        <li>Identifying what feels manual or chaotic</li>
                        <li>Deciding together if it’s worth fixing</li>
                    </ul>
                    <p className="reassurance-line">No pressure. No obligation. Just clarity.</p>
                </section>

                {/* SECTION 3: GREEN CARD QUESTIONS, FORM & SCHEDULING */}
                <section className="booking-section-green questions-card">
                    <div className="hero-grid-lines"></div>
                    <div className="booking-card-content">
                        <div className="question-grid">

                            {/* THE FORM FROM THE IMAGE */}
                            <div className="contact-form-container">
                                <div className="form-grid">
                                    <div className="form-group">
                                        <label>Name</label>
                                        <input type="text" placeholder="Your full name" required />
                                    </div>
                                    <div className="form-group">
                                        <label>Email</label>
                                        <input type="email" placeholder="email@company.com" required />
                                    </div>
                                    <div className="form-group">
                                        <label>Phone number</label>
                                        <input type="tel" placeholder="+1 (555) 000-0000" required />
                                    </div>
                                    <div className="form-group">
                                        <label>Company Name / Website</label>
                                        <input type="text" placeholder="company.com" required />
                                    </div>
                                    <div className="form-group full-width">
                                        <label>Message / Notes / Query</label>
                                        <textarea placeholder="Tell us a bit about your current setup..." required></textarea>
                                    </div>
                                </div>
                            </div>

                            {/* SCHEDULING MOVED INSIDE */}
                            <div className="scheduling-internal-wrapper">
                                <span className="p-label" style={{ color: '#000', opacity: 0.6, marginTop: '40px' }}>Choose a time that works</span>
                                <div className="scheduling-mockup">
                                    <div className="calendar-header">
                                        <span>January 2026</span>
                                    </div>
                                    <div className="slots-grid">
                                        {['9:00 AM', '10:30 AM', '1:00 PM', '2:30 PM', '4:00 PM'].map(slot => (
                                            <button key={slot} className="slot-btn">{slot}</button>
                                        ))}
                                    </div>
                                </div>
                                <p className="helper-text" style={{ color: '#000', opacity: 0.4 }}>30 minutes. No preparation needed.</p>

                                <div className="final-cta-block">
                                    <button className="btn-final-cta">
                                        Choose a time
                                    </button>
                                    <p className="trust-microcopy" style={{ color: '#000', opacity: 0.5 }}>
                                        You’ll receive a calendar invite with the details. If it’s not a fit, we’ll say so honestly.
                                    </p>
                                </div>
                            </div>
                        </div>
                    </div>
                </section>
            </div>
        </div>
    );
};

export default BookingPage;
