
import React from 'react';
import './Pricing.css';

const Pricing = ({ onBook }) => {
    return (
        <section className="pricing-section section-container section-spacing">
            <div className="section-header-centered">
                <span className="meta-text">Engagement</span>
                <h2 className="section-heading">Typical engagement ranges</h2>
                <p className="body-text">Every business is different. These ranges reflect how much work is usually involved, not fixed packages.</p>
            </div>

            <div className="pricing-grid">
                <div className="ui-card pricing-col">
                    <span className="meta-text">Start</span>
                    <h3 className="card-title">Basic Setup</h3>
                    <p className="body-text">For small teams replacing manual tracking and basic follow ups.</p>
                    <p className="meta-text" style={{ marginTop: 'auto', textTransform: 'none' }}>Best when operations are simple but time consuming.</p>
                    <button className="btn-primary" onClick={onBook}>Book a clarity call</button>
                </div>

                <div className="ui-card pricing-col featured">
                    <span className="meta-text">Growth</span>
                    <h3 className="card-title">End-to-End</h3>
                    <p className="body-text">For businesses that handle daily volume and need reliable systems end to end.</p>
                    <p className="meta-text" style={{ marginTop: 'auto', textTransform: 'none' }}>Best when consistency and speed matter.</p>
                    <button className="btn-primary" onClick={onBook}>Book a clarity call</button>
                </div>

                <div className="ui-card pricing-col">
                    <span className="meta-text">Scale</span>
                    <h3 className="card-title">Custom</h3>
                    <p className="body-text">For high volume operations with custom workflows and integrations.</p>
                    <p className="meta-text" style={{ marginTop: 'auto', textTransform: 'none' }}>Best when systems must adapt without breaking.</p>
                    <button className="btn-primary" onClick={onBook}>Book a clarity call</button>
                </div>
            </div>

            <p className="meta-text text-center" style={{ marginTop: 'var(--space-64)', textTransform: 'none' }}>
                Final scope is defined only after understanding how your business actually runs.
            </p>
        </section>
    );
};

export default Pricing;
