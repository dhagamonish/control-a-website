
import React from 'react';
import './Results.css';

const Results = () => {
    return (
        <section className="results-section">
            <div className="container">
                <div className="results-card-large">
                    <div className="results-header">
                        <h2>WE TAKE PRIDE IN<br />OUR CLIENTS' PEACE.</h2>
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
                            <span className="case-industry">Industry: Local Service Business</span>

                            <div className="case-comparison">
                                <div className="case-state">
                                    <span className="state-label">BEFORE</span>
                                    <p>Lost leads, manual tracking, and chaotic admin overhead.</p>
                                </div>
                                <div className="case-divider">→</div>
                                <div className="case-state">
                                    <span className="state-label">AFTER</span>
                                    <p>Automated bookings, zero data entry, and a calm, scalable operation.</p>
                                </div>
                            </div>

                            <div className="metric-tags">
                                <span className="tag">Reduced manual work by 70%</span>
                                <span className="tag">Clearer daily operations</span>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
};

export default Results;
