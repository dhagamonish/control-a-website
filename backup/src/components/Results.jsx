
import React from 'react';
import './Results.css';

const Results = () => {
    return (
        <section className="results-section section-container section-spacing">
            <div className="section-header-centered">
                <span className="meta-text">Impact</span>
                <h2 className="section-heading">What changes after the system is in place</h2>
            </div>

            <div className="ui-card results-main-card">
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
                                <span className="meta-text" style={{ fontSize: '10px', marginBottom: '8px' }}>BEFORE</span>
                                <p className="body-text" style={{ color: 'var(--text-main)', fontWeight: '500' }}>Manual tracking, missed calls, unclear handoffs, daily stress.</p>
                            </div>
                            <div className="case-divider">→</div>
                            <div className="case-state">
                                <span className="meta-text" style={{ fontSize: '10px', marginBottom: '8px' }}>AFTER</span>
                                <p className="body-text" style={{ color: 'var(--text-main)', fontWeight: '600' }}>Bookings run automatically. Tasks move forward without reminders. Fewer interruptions. Clear visibility.</p>
                            </div>
                        </div>

                        <p className="meta-text" style={{ marginTop: 'var(--space-24)', fontStyle: 'italic', textTransform: 'none' }}>
                            Most clients notice the difference within the first week.
                        </p>
                    </div>
                </div>
            </div>
        </section >
    );
};

export default Results;
