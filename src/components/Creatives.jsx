
import React from 'react';
import './Creatives.css';

const Creatives = () => {
    return (
        <section className="creatives-section">
            <div className="container">
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
                        <p className="card-caption">Booking flow</p>
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
                        <p className="card-caption">Internal dashboard</p>
                    </div>

                    {/* Card 3 */}
                    <div className="creative-card card-3">
                        <div className="card-vis-container">
                            <div className="puzzle-piece p1"></div>
                            <div className="puzzle-piece p2"></div>
                        </div>
                        <p className="card-caption">Automation logic</p>
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
                        <p className="card-caption">Live status</p>
                    </div>
                </div>
            </div>
        </section>
    );
};

export default Creatives;
