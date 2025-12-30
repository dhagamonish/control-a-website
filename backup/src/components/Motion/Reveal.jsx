
import React from 'react';
import { motion } from 'framer-motion';

const Reveal = ({ children, delay = 0, distance = 20 }) => {
    return (
        <motion.div
            initial={{ opacity: 0, y: distance }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-100px" }}
            transition={{
                duration: 0.8,
                delay: delay,
                ease: [0.16, 1, 0.3, 1] // Custom cubic-bezier for "engineered" feel
            }}
        >
            {children}
        </motion.div>
    );
};

export default Reveal;
