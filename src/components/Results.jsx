
import React from 'react';
import './Results.css';

const Results = () => {
    return (
        <section className="results-section">
            <div className="container">
                <div className="results-card-large">
                    <div className="results-header">
                        <h2>What changes after the system is in place</h2>
                    </div>

                    <div className="result-showcase">
                        {/* Visual */}
                        <div className="showcase-visual">
                            <div className="abstract-system-box">
                                <div className="system-layer l1"></div>
                                <div className="system-layer l2"></div>
                                <div className="system-layer l3">
                                    <div className="scan-line"></div>
                                </div>
                            </div>
                        </div>

                        {/* Copy */}
                        <div className="showcase-metrics">
                            <div className="case-comparison">
                                <div className="case-state">
                                    <span className="state-label">BEFORE</span>
                                    <p>Manual tracking, missed calls, unclear handoffs, daily stress.</p>
                                </div>
                                <div className="case-divider">→</div>
                                <div className="case-state">
                                    <span className="state-label">AFTER</span>
                                    <p>Bookings run automatically. Tasks move forward without reminders. Fewer interruptions. Clear visibility.</p>
                                </div>
                            </div>

                            <div className="metric-tags" style={{ marginTop: '24px', fontStyle: 'italic', opacity: 0.8 }}>
                                Most clients notice the difference within the first week.
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
};

export default Results;
