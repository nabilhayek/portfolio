import React from 'react';
import { Autoplay } from 'swiper/modules';
import { Swiper, SwiperSlide } from 'swiper/react';
import SkillsCard from './SkillsCard';
import { motion } from 'framer-motion';

type Props = {
  style?: React.CSSProperties;
  skills: string[];
};

const Skills = ({ style, skills }: Props) => {
  return (
    <motion.div
      exit={{ y: 25, scale: 0.95, opacity: 0 }}
      initial={{ y: 25, scale: 0.95, opacity: 0 }}
      animate={{ y: 0, scale: 1, opacity: 1 }}
      transition={{ delay: 0.9, duration: 1.1 }}
      className='w-full h-12 relative'
      style={{
        ...style,
        maskImage:
          'linear-gradient(to right, transparent, #000 20%, #000 80%, transparent)',
        WebkitMaskImage:
          'linear-gradient(to right, transparent, #000 20%, #000 80%, transparent)',
      }}
    >
      <Swiper
        className='w-full h-12'
        loop={true}
        spaceBetween={10}
        slidesPerView={10}
        breakpoints={{
          0: {
            slidesPerView: 4,
          },
          768: {
            slidesPerView: 5,
          },
          1024: {
            slidesPerView: 6,
          },
          1280: {
            slidesPerView: 8,
          },
          1536: {
            slidesPerView: 10,
          },
        }}
        speed={1000}
        modules={[Autoplay]}
        autoplay={{
          delay: 1000,
          disableOnInteraction: false,
        }}
      >
        {skills.map((skill, i) => (
          <SwiperSlide key={i}>
            <SkillsCard title={skill} />
          </SwiperSlide>
        ))}
      </Swiper>
    </motion.div>
  );
};

export default Skills;
