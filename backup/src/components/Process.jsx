
import React from 'react';
import './Process.css';

const Process = ({ onBook }) => {
    return (
        <section className="process-section section-container section-spacing">
            <div className="process-header">
                <div className="header-text-group">
                    <span className="meta-text">Our Approach</span>
                    <h2 className="section-heading">How we improve day to day operations</h2>
                </div>
                <button className="btn-primary" onClick={onBook}>Book a clarity call</button>
            </div>

            <div className="process-grid">
                <div className="ui-card">
                    <span className="proc-num meta-text">01.</span>
                    <h3 className="card-title">Remove manual follow ups</h3>
                    <p className="body-text">When tasks rely on memory or people chasing each other, things slip. We replace that with systems that move work forward on their own.</p>
                </div>
                <div className="ui-card">
                    <span className="proc-num meta-text">02.</span>
                    <h3 className="card-title">Make routine work predictable</h3>
                    <p className="body-text">Bookings, reminders, confirmations, and updates should behave the same way every time. We set that up once and let it run.</p>
                </div>
                <div className="ui-card">
                    <span className="proc-num meta-text">03.</span>
                    <h3 className="card-title">Keep information in one place</h3>
                    <p className="body-text">When data is spread across tools and messages, decisions slow down. We bring everything together so you always know what is happening.</p>
                </div>
                <div className="ui-card">
                    <span className="proc-num meta-text">04.</span>
                    <h3 className="card-title">Support growth without extra effort</h3>
                    <p className="body-text">As volume increases, the system handles it. You do not need to add more people just to keep things moving.</p>
                </div>
            </div>
        </section>
    );
};

export default Process;
