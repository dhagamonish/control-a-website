
import React from 'react';
import './Creatives.css';

const Creatives = () => {
    return (
        <section className="creatives-section section-container section-spacing">
            <div className="section-header-centered">
                <span className="meta-text">Capabilities</span>
                <h2 className="section-heading">What we usually build</h2>
            </div>

            <div className="creatives-grid">
                <div className="ui-card">
                    <div className="card-vis-container">
                        <div className="abstract-visual booking-viz">
                            <div className="clock-face">
                                <div className="hand h-hour"></div>
                                <div className="hand h-min"></div>
                            </div>
                        </div>
                    </div>
                    <div className="card-text">
                        <h3 className="card-title">Booking flow</h3>
                        <p className="body-text">Customers book, reschedule, or cancel without back and forth. You get confirmed appointments without manual coordination.</p>
                    </div>
                </div>

                <div className="ui-card">
                    <div className="card-vis-container">
                        <div className="abstract-visual dashboard-viz">
                            <div className="ui-mockup">
                                <div className="ui-row"></div>
                                <div className="ui-row"></div>
                                <div className="ui-btn"></div>
                            </div>
                        </div>
                    </div>
                    <div className="card-text">
                        <h3 className="card-title">Internal dashboard</h3>
                        <p className="body-text">A simple view of what is happening today, what needs attention, and what is already handled.</p>
                    </div>
                </div>

                <div className="ui-card">
                    <div className="card-vis-container">
                        <div className="abstract-visual logic-viz">
                            <div className="puzzle-piece p1"></div>
                            <div className="puzzle-piece p2"></div>
                        </div>
                    </div>
                    <div className="card-text">
                        <h3 className="card-title">Automation logic</h3>
                        <p className="body-text">Clear rules that decide what happens next so work does not pause waiting for instructions.</p>
                    </div>
                </div>

                <div className="ui-card">
                    <div className="card-vis-container">
                        <div className="abstract-visual status-viz">
                            <div className="dark-dash">
                                <div className="dash-sidebar"></div>
                                <div className="dash-main">
                                    <div className="dash-stat"></div>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div className="card-text">
                        <h3 className="card-title">Live status</h3>
                        <p className="body-text">You can check progress at any time without calling or messaging your team.</p>
                    </div>
                </div>
            </div>
        </section>
    );
};

export default Creatives;
