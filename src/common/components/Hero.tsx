import React from 'react';
import { IHero } from '../lib/interfaces';

import { motion } from 'framer-motion';
import { fadeIn } from '../utils/data/animations';

function Hero({ children }: IHero) {
  return (
    <div className={'flex flex-col bg-hero-100 py-16 md:py-24'}>
      <motion.div
        className="w-full"
        initial="initial"
        animate="enter"
        variants={fadeIn}
      >
        {children}
      </motion.div>
    </div>
  );
}

export default Hero;
