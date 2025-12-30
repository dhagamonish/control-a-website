import React from 'react';
import { motion, useScroll, useTransform } from 'framer-motion';
import './Hero.css';
import Reveal from './Motion/Reveal';

const Hero = ({ onBook }) => {
    const { scrollY } = useScroll();

    // Parallax values for icons - very slow movement
    const y1 = useTransform(scrollY, [0, 500], [0, -40]);
    const y2 = useTransform(scrollY, [0, 500], [0, 30]);
    const y3 = useTransform(scrollY, [0, 500], [0, -20]);
    const y4 = useTransform(scrollY, [0, 500], [0, 50]);
    return (
        <section className="hero-section">
            <div className="hero-card">
                <div className="hero-content">
                    <Reveal>
                        {/* Step label for system feel */}
                        <span className="meta-text" style={{ color: 'var(--text-main)', marginBottom: 'var(--space-16)', display: 'block' }}>Operational Intelligence Layer</span>

                        <h1 className="hero-headline">
                            Control without complexity.
                        </h1>

                        <p className="hero-subtext">
                            We design and set up simple systems that handle bookings, calls, updates, and internal tasks so your day runs smoothly even when you are not watching everything.
                        </p>

                        <div className="hero-ctas">
                            <button className="btn-hero" onClick={onBook}>
                                Book a clarity call
                            </button>
                            <p className="cta-microcopy">A short conversation to understand how your business runs today and where things get stuck.</p>
                        </div>
                    </Reveal>
                </div>

                {/* Highly simplified floating elements */}
                <div className="floating-elements">
                    <motion.div style={{ y: y1 }} className="float-icon icon-tl">
                        <svg viewBox="0 0 24 24" width="32" height="32" fill="none" stroke="currentColor" strokeWidth="2"><rect x="3" y="4" width="18" height="18" rx="2" ry="2"></rect></svg>
                    </motion.div>
                    <motion.div style={{ y: y2 }} className="float-icon icon-tr">
                        <svg viewBox="0 0 24 24" width="32" height="32" fill="none" stroke="currentColor" strokeWidth="2"><polyline points="20 6 9 17 4 12"></polyline></svg>
                    </motion.div>
                    <motion.div style={{ y: y3 }} className="float-icon icon-bl">
                        <svg viewBox="0 0 24 24" width="32" height="32" fill="none" stroke="currentColor" strokeWidth="2"><circle cx="12" cy="12" r="10"></circle><polyline points="12 6 12 12 16 14"></polyline></svg>
                    </motion.div>
                    <motion.div style={{ y: y4 }} className="float-icon icon-br">
                        <svg viewBox="0 0 24 24" width="32" height="32" fill="none" stroke="currentColor" strokeWidth="2"><path d="M12 2L2 7l10 5 10-5-10-5z"></path></svg>
                    </motion.div>
                </div>
            </div>
        </section>
    );
};

export default Hero;
