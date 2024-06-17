"use client";

import { motion } from "framer-motion";
import Image from "next/image";

const logos = [
  '/assets/cat.webp',
  '/assets/cat2.jpg',
  '/assets/cat.webp',
  '/assets/cat2.jpg',
  '/assets/cat.webp',
  '/assets/cat2.jpg',
  '/assets/cat.webp',
  '/assets/cat2.jpg',
  '/assets/cat.webp',
  '/assets/cat2.jpg'
]

const LogoSroll = () => {
  return (
    <div className="logo-banner">
      <motion.div
        className="logo-banner-track"
        animate={{ x: ['0%', '-100%'] }}
        transition={{
          repeat: Infinity,
          duration: 2, // Adjust the duration to control the speed
          ease: 'linear',
        }}
      >
        {logos.map((logo, index) => (
          <motion.img
            key={index}
            src={logo}
            alt={`Logo ${index + 1}`}
            className="logo"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 2 }}
          />
        ))}
        {/* Repeat the logos to create the seamless infinite effect */}
        {logos.map((logo, index) => (
          <motion.img
            key={`${index}-repeat`}
            src={logo}
            alt={`Logo ${index + 1}`}
            className="logo"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 2 }}
          />
        ))}
      </motion.div>
    </div>
  );
};

export default LogoSroll;
