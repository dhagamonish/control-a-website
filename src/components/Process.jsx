
import React from 'react';
import './Process.css';

const Process = () => {
    return (
        <section className="process-section section-spacing">
            <div className="container">
                <div className="process-header">
                    <h3 className="process-headline">WHY CALM<br />WORKS BEST</h3>
                </div>

                <div className="process-grid">
                    <div className="process-item">
                        <span className="proc-num">01.</span>
                        <h4>Eliminate Noise</h4>
                        <p>Remove unnecessary manual steps.</p>
                    </div>
                    <div className="process-item">
                        <span className="proc-num">02.</span>
                        <h4>Automate Core</h4>
                        <p>Let bookings, reminders, and follow-ups run automatically.</p>
                    </div>
                    <div className="process-item">
                        <span className="proc-num">03.</span>
                        <h4>Sync Systems</h4>
                        <p>Keep information in one place.</p>
                    </div>
                    <div className="process-item">
                        <span className="proc-num">04.</span>
                        <h4>Scale Quietly</h4>
                        <p>Grow without adding admin overhead.</p>
                    </div>
                </div>
            </div>
        </section>
    );
};

export default Process;
