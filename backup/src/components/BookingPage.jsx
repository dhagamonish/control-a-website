
import React, { useState, useEffect } from 'react';
import './BookingPage.css';

const BookingPage = ({ onClose }) => {
    const [isVisible, setIsVisible] = useState(false);
    useEffect(() => {
        setIsVisible(true);
        window.scrollTo(0, 0);
    }, []);

    return (
        <div className={`booking-container ${isVisible ? 'visible' : ''} section-container`}>
            {/* Standardized Back Button */}
            <button className="back-btn-global" onClick={onClose} aria-label="Go back">
                <svg viewBox="0 0 24 24" width="24" height="24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round">
                    <line x1="19" y1="12" x2="5" y2="12"></line>
                    <polyline points="12 19 5 12 12 5"></polyline>
                </svg>
            </button>

            <div className="booking-content-wrapper">
                {/* SECTION 1: HERO */}
                <div className="ui-card hero-booking-card">
                    <div className="booking-hero-content">
                        <span className="meta-text">Step 01</span>
                        <h1 className="hero-headline">A calm, practical conversation.</h1>
                        <p className="body-text highlight-text">
                            This isn’t a sales call. We’ll understand how your business works today, where friction exists, and whether a simple system could help.
                        </p>
                    </div>

                    <div className="booking-bullets">
                        <span className="meta-text">What this call is for</span>
                        <ul className="bullet-points">
                            <li className="body-text">Understanding your current workflow</li>
                            <li className="body-text">Identifying what feels manual or chaotic</li>
                            <li className="body-text">Deciding together if it’s worth fixing</li>
                        </ul>
                    </div>
                </div>

                {/* SECTION 2: FORM & SCHEDULING */}
                <div className="booking-grid-layout">
                    <div className="ui-card contact-form-card">
                        <span className="meta-text">Details</span>
                        <div className="form-grid">
                            <div className="form-group">
                                <label className="meta-text">Name</label>
                                <input type="text" placeholder="Your full name" required />
                            </div>
                            <div className="form-group">
                                <label className="meta-text">Email</label>
                                <input type="email" placeholder="email@company.com" required />
                            </div>
                            <div className="form-group">
                                <label className="meta-text">Phone</label>
                                <input type="tel" placeholder="+1 (555) 000-0000" required />
                            </div>
                            <div className="form-group">
                                <label className="meta-text">Website</label>
                                <input type="text" placeholder="company.com" required />
                            </div>
                            <div className="form-group full-width">
                                <label className="meta-text">Message / Notes</label>
                                <textarea placeholder="Tell us a bit about your current setup..." required></textarea>
                            </div>
                        </div>
                    </div>

                    <div className="ui-card scheduling-card">
                        <span className="meta-text">Availability</span>
                        <div className="scheduling-mockup">
                            <div className="calendar-header">
                                <span className="body-text header-label">January 2026</span>
                            </div>
                            <div className="slots-grid">
                                {['9:00 AM', '10:30 AM', '1:00 PM', '2:30 PM', '4:00 PM'].map(slot => (
                                    <button key={slot} className="slot-btn meta-text">{slot}</button>
                                ))}
                            </div>
                        </div>
                        <p className="meta-text helper-text">30 minutes. No preparation needed.</p>

                        <div className="booking-actions">
                            <button className="btn-primary full-width">Confirm Selection</button>
                            <p className="meta-text footer-text">
                                You’ll receive a calendar invite with the details.
                            </p>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default BookingPage;
