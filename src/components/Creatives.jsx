
import React from 'react';
import './Creatives.css';

const Creatives = () => {
    return (
        <section className="creatives-section">
            <div className="container">
                {/* New Section Title */}
                <div style={{ textAlign: 'center', marginBottom: '60px' }}>
                    <h2 style={{ fontSize: '42px', fontWeight: '700', letterSpacing: '-0.02em' }}>What we usually build</h2>
                </div>

                <div className="creatives-grid">
                    {/* Card 1 */}
                    <div className="creative-card card-1">
                        <div className="card-vis-container">
                            <div className="abstract-clock">
                                <div className="clock-face">
                                    <div className="hand h-hour"></div>
                                    <div className="hand h-min"></div>
                                </div>
                            </div>
                        </div>
                        <div className="card-text">
                            <h4 className="card-caption">Booking flow</h4>
                            <p className="card-desc">Customers book, reschedule, or cancel without back and forth. You get confirmed appointments without manual coordination.</p>
                        </div>
                    </div>

                    {/* Card 2 */}
                    <div className="creative-card card-2">
                        <div className="card-vis-container">
                            <div className="mobile-ui-mockup">
                                <div className="ui-header"></div>
                                <div className="ui-body">
                                    <div className="ui-row"></div>
                                    <div className="ui-row"></div>
                                    <div className="ui-btn"></div>
                                </div>
                            </div>
                        </div>
                        <div className="card-text">
                            <h4 className="card-caption">Internal dashboard</h4>
                            <p className="card-desc">A simple view of what is happening today, what needs attention, and what is already handled.</p>
                        </div>
                    </div>

                    {/* Card 3 */}
                    <div className="creative-card card-3">
                        <div className="card-vis-container">
                            <div className="puzzle-piece p1"></div>
                            <div className="puzzle-piece p2"></div>
                        </div>
                        <div className="card-text">
                            <h4 className="card-caption">Automation logic</h4>
                            <p className="card-desc">Clear rules that decide what happens next so work does not pause waiting for instructions.</p>
                        </div>
                    </div>

                    {/* Card 4 */}
                    <div className="creative-card card-4">
                        <div className="card-vis-container">
                            <div className="dark-dashboard">
                                <div className="dash-sidebar"></div>
                                <div className="dash-main">
                                    <div className="dash-stat"></div>
                                    <div className="dash-graph"></div>
                                </div>
                            </div>
                        </div>
                        <div className="card-text">
                            <h4 className="card-caption">Live status</h4>
                            <p className="card-desc">You can check progress at any time without calling or messaging your team.</p>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
};

export default Creatives;
