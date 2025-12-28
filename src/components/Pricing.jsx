
import React from 'react';
import './Pricing.css';

const Pricing = () => {
    return (
        <section className="pricing-section">
            <div className="container">
                <div className="pricing-header-simple">
                    <h2>Starting points, not fixed packages.</h2>
                    <p className="pricing-subtitle">Every system is customized after understanding your workflow.</p>
                </div>

                <div className="pricing-cards-vertical">
                    {/* Start */}
                    <div className="price-col">
                        <span className="p-label">Start</span>
                        <h3 className="p-cost">$500</h3>
                        <p className="p-desc">Perfect for small teams replacing manual tracking.</p>
                        <p className="p-best-for">Best for: Organization</p>
                        <button className="btn-p-outline">Book a clarity call</button>
                    </div>

                    {/* Growth */}
                    <div className="price-col featured">
                        <span className="p-label">Growth</span>
                        <h3 className="p-cost">$1200</h3>
                        <p className="p-desc">Full automation for daily business workflows.</p>
                        <p className="p-best-for">Best for: Efficiency</p>
                        <button className="btn-p-fill">Book a clarity call</button>
                    </div>

                    {/* Scale */}
                    <div className="price-col">
                        <span className="p-label">Scale</span>
                        <h3 className="p-cost">$2500</h3>
                        <p className="p-desc">Custom systems for high-volume operations.</p>
                        <p className="p-best-for">Best for: Expansion</p>
                        <button className="btn-p-outline">Book a clarity call</button>
                    </div>
                </div>
            </div>
        </section>
    );
};

export default Pricing;
