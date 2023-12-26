import React, { forwardRef } from 'react';
import { motion } from 'framer-motion';

type Props = {
  style?: React.CSSProperties;
  children?: React.ReactNode;
  className?: string;
  delay?: number;
};

const Card = forwardRef(function Card(
  { style, children, className, delay }: Props,
  ref: React.Ref<HTMLDivElement>
) {
  return (
    <motion.div
      ref={ref}
      exit={{ y: 25, scale: 0.95, opacity: 0 }}
      initial={{ y: 25, scale: 0.95, opacity: 0 }}
      animate={{ y: 0, scale: 1, opacity: 1 }}
      transition={{ delay: delay || 0, duration: 0.3 }}
      layout
      style={style}
      className={`bg-[#1d1c20] backdrop-filter backdrop-blur-xl bg-opacity-70 w-full border border-[#2d2c30] rounded-3xl p-6 text-white h-auto min-h-[375px] mobile:h-[375px] relative flex flex-col ${className} overflow-hidden`}
    >
      {children}
    </motion.div>
  );
});

export default Card;
