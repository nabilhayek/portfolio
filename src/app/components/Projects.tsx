import React from 'react';
import { Swiper, SwiperSlide } from 'swiper/react';
import { EffectCards } from 'swiper/modules';
import 'swiper/css';
import 'swiper/css/effect-cards';
import ProjectCard from './ProjectCard';
import { ProjectSlide } from '../types';
import { AnimationDefinition, motion } from 'framer-motion';

type Props = {
  slides: ProjectSlide[];
  expand: React.Dispatch<React.SetStateAction<null | ProjectSlide>>;
  delay?: number;
  animationComplete?: (definition: AnimationDefinition) => void | undefined;
};

const Projects = ({ slides, expand, delay, animationComplete }: Props) => {
  return (
    <motion.div
      exit={{ y: 25, scale: 0.95, opacity: 0 }}
      initial={{ y: 25, scale: 0.95, opacity: 0 }}
      animate={{ y: 0, scale: 1, opacity: 1 }}
      transition={{ delay: delay || 0 }}
      onAnimationComplete={animationComplete}
      layout
      className='card-small px-6 mobile:pr-6'
    >
      <Swiper
        className='w-full h-full relative flex flex-col-z-[100]'
        effect={'cards'}
        grabCursor={true}
        modules={[EffectCards]}
        centeredSlides={true}
        initialSlide={2}
        loop={true}
      >
        {slides.map((slide, i) => (
          <SwiperSlide key={i}>
            <ProjectCard
              expand={expand}
              title={slide.title}
              technologies={slide.technologies}
              imageUrl={slide.imageUrl}
              description={slide.description}
              link={slide.link}
              role={slide.role}
              period={slide.period}
            />
          </SwiperSlide>
        ))}
      </Swiper>
    </motion.div>
  );
};

export default Projects;
