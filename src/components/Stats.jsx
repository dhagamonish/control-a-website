
import React from 'react';
import './Stats.css';

const Stats = () => {
    return (
        <section className="stats-section">
            <div className="container">
                <div className="stats-grid">
                    <div className="stat-item">
                        <h2 className="stat-number">+10</h2>
                        <p className="stat-label">Time saved<br />each week</p>
                    </div>
                    <div className="stat-item">
                        <h2 className="stat-number">70%</h2>
                        <p className="stat-label">Reduced manual<br />follow-ups</p>
                    </div>
                    <div className="stat-item">
                        <h2 className="stat-number">100%</h2>
                        <p className="stat-label">Clearer daily<br />operations</p>
                    </div>
                </div>
                <div className="stats-helper-line">
                    Based on real client workflows.
                </div>
            </div>
        </section>
    );
};

export default Stats;
