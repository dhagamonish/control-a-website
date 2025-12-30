
import React from 'react';
import './Contact.css';

const Contact = ({ onBook }) => {
    return (
        <section className="contact-section section-container major-break">
            <div className="final-cta-box ui-card">
                <div className="final-cta-content">
                    <span className="meta-text" style={{ color: 'var(--primary-green)' }}>Next Step</span>
                    <h2 className="section-heading" style={{ color: 'var(--text-light)', marginTop: 'var(--space-16)' }}>Let us understand how your business works today.</h2>
                    <p className="body-text" style={{ color: 'rgba(255,255,255,0.7)', margin: 'var(--space-24) auto var(--space-32)' }}>
                        We will walk through your current process and suggest what can be simplified or automated.
                    </p>
                    <button className="btn-primary" onClick={onBook} style={{ background: 'var(--primary-green)', color: 'var(--text-main)' }}>
                        Book a clarity call
                    </button>
                    <p className="meta-text" style={{ color: 'rgba(255,255,255,0.5)', marginTop: 'var(--space-24)', textTransform: 'none' }}>
                        No pressure. No pitch. Just a clear next step.
                    </p>
                </div>
            </div>
        </section>
    );
};

export default Contact;
