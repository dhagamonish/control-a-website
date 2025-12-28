
import React from 'react';
import './Contact.css';

const Contact = () => {
    return (
        <section className="contact-section">
            <div className="container">
                <div className="final-cta-box">
                    <div className="final-cta-content">
                        <h2 className="cta-headline">Let us understand how your business works today.</h2>
                        <p className="cta-subtext">We will walk through your current process and suggest what can be simplified or automated.</p>
                        <button className="btn-final-cta">Book a clarity call</button>
                        <p className="cta-microcopy-white">No pressure. No pitch. Just a clear next step.</p>
                    </div>
                </div>
            </div>
        </section>
    );
};

export default Contact;
