
import React from 'react';
import './Pricing.css';

const Pricing = ({ onBook }) => {
    return (
        <section className="pricing-section">
            <div className="container">
                <div className="pricing-header-simple">
                    <p style={{ marginBottom: '16px', fontWeight: '500', opacity: 0.7 }}>We focus on what needs to work, not what looks impressive.</p>
                    <h2>Typical engagement ranges</h2>
                    <p className="pricing-subtitle">Every business is different. These ranges reflect how much work is usually involved, not fixed packages.</p>
                </div>

                <div className="pricing-cards-vertical">
                    {/* Start */}
                    <div className="price-col">
                        <span className="p-label">Start</span>
                        <h3 className="p-cost">Basic Setup</h3>
                        <p className="p-desc">For small teams replacing manual tracking and basic follow ups.</p>
                        <p className="p-best-for">Best when operations are simple but time consuming.</p>
                        <button className="btn-p-outline" onClick={onBook}>Book a clarity call</button>
                    </div>

                    {/* Growth */}
                    <div className="price-col featured">
                        <span className="p-label">Growth</span>
                        <h3 className="p-cost">End-to-End</h3>
                        <p className="p-desc">For businesses that handle daily volume and need reliable systems end to end.</p>
                        <p className="p-best-for">Best when consistency and speed matter.</p>
                        <button className="btn-p-fill" onClick={onBook}>Book a clarity call</button>
                    </div>

                    {/* Scale */}
                    <div className="price-col">
                        <span className="p-label">Scale</span>
                        <h3 className="p-cost">Custom</h3>
                        <p className="p-desc">For high volume operations with custom workflows and integrations.</p>
                        <p className="p-best-for">Best when systems must adapt without breaking.</p>
                        <button className="btn-p-outline" onClick={onBook}>Book a clarity call</button>
                    </div>
                </div>

                <div style={{ textAlign: 'center', marginTop: '40px', opacity: 0.7, fontWeight: '500' }}>
                    Final scope is defined only after understanding how your business actually runs.
                </div>
            </div>
        </section>
    );
};

export default Pricing;
