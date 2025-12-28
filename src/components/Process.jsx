
import React from 'react';
import './Process.css';

const Process = () => {
    return (
        <section className="process-section section-spacing">
            <div className="container">
                <div className="process-header">
                    <h3 className="process-headline">How we improve day to day operations</h3>
                </div>

                <div className="process-grid">
                    <div className="process-item">
                        <span className="proc-num">01.</span>
                        <h4>Remove manual follow ups</h4>
                        <p>When tasks rely on memory or people chasing each other, things slip. We replace that with systems that move work forward on their own.</p>
                    </div>
                    <div className="process-item">
                        <span className="proc-num">02.</span>
                        <h4>Make routine work predictable</h4>
                        <p>Bookings, reminders, confirmations, and updates should behave the same way every time. We set that up once and let it run.</p>
                    </div>
                    <div className="process-item">
                        <span className="proc-num">03.</span>
                        <h4>Keep information in one place</h4>
                        <p>When data is spread across tools and messages, decisions slow down. We bring everything together so you always know what is happening.</p>
                    </div>
                    <div className="process-item">
                        <span className="proc-num">04.</span>
                        <h4>Support growth without extra effort</h4>
                        <p>As volume increases, the system handles it. You do not need to add more people just to keep things moving.</p>
                    </div>
                </div>
            </div>
        </section>
    );
};

export default Process;
