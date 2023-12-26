'use client';
import React, { useState, useRef } from 'react';
import { FaLinkedin, FaEnvelope, FaLink } from 'react-icons/fa';
import { IoIosClose } from 'react-icons/io';

import Image from 'next/image';
import Card from './components/Card';
import Projects from './components/Projects';
import Skills from './components/Skills';
import { useOnClickOutside } from 'usehooks-ts';
import { motion } from 'framer-motion';
import { ProjectSlide } from './types';

const projects = [
  {
    title: 'Rättspodden',
    technologies: ['React Native', 'Next.js', 'TypeScript', 'Tailwind CSS'],
    imageUrl: '/rattspodden.png',
    role: 'Lead Developer & Project Manager',
    period: '2020 - 2021',
    description:
      'At Rättspodden I was responsible for building the mobile application using React Native as a Lead Developer & Project Manager. My work included building the application from scratch, implementing the design, and integrating the backend API & infrastructure. During my time at Rättspodden, I faced a series of challenges that ultimately contributed to my personal and professional growth.\n\n One of the pivotal lessons I learned during this period was the significance of effective time management. My attention to detail, while a valuable trait, occasionally posed challenges in meeting deadlines. Recognizing this, I took proactive measures to refine my time management skills. I adopted a systematic approach by creating prioritized task lists, enabling me to navigate through projects efficiently and ensuring optimal workflow.',
  },

  {
    title: 'Lakritsroten',
    technologies: ['React Native', 'Next.js', 'TypeScript', 'Tailwind CSS'],
    imageUrl: '/lakrits.png',
  },
  {
    title: 'Padelappen',
    technologies: ['React Native', 'Next.js', 'TypeScript', 'Tailwind CSS'],
    imageUrl: '/padelappen.png',
  },
  {
    title: 'Versasec',
    technologies: ['React Native', 'Next.js', 'TypeScript', 'Tailwind CSS'],
    imageUrl: '/versasec.png',
  },
  {
    title: 'Safety Direct',
    technologies: ['React Native', 'Next.js', 'TypeScript', 'Tailwind CSS'],
    imageUrl: '/safetydirect.png',
  },

  {
    title: 'Enigio',
    technologies: ['React Native', 'Next.js', 'TypeScript', 'Tailwind CSS'],
    imageUrl: '/enigio.png',
  },
  {
    title: 'Leojuliane',
    technologies: ['React Native', 'Next.js', 'TypeScript', 'Tailwind CSS'],
    imageUrl: '/juliane.png',
  },
  {
    title: 'Techover',
    technologies: ['React Native', 'Next.js', 'TypeScript', 'Tailwind CSS'],
    imageUrl: '/techover.png',
  },
  {
    title: 'Shotluckan',
    technologies: ['React Native', 'Next.js', 'TypeScript', 'Tailwind CSS'],
    imageUrl: '/shotluckan.png',
  },
];

type Props = {};

const Page = (props: Props) => {
  const [projectExpanded, setProjectExpanded] = useState<null | ProjectSlide>(
    null
  );
  const [animationsComplete, setAnimationsComplete] = useState(false);
  const ref = useRef(null);
  useOnClickOutside(ref, () => setProjectExpanded(null));
  return (
    <div className='w-[90%] py-20'>
      <motion.h1
        exit={{ y: -25, scale: 0.95, opacity: 0 }}
        initial={{ y: -25, scale: 0.95, opacity: 0 }}
        animate={{ y: 0, scale: 1, opacity: 1 }}
        transition={{ delay: 0, duration: 0.5 }}
        className='text-center tracking-[-0.2px] bg-[linear-gradient(145deg,#fff_65%,rgba(255,255,255,0.43))] bg-clip-text mt-0 mb-6 text-4xl mobile:text-6xl font-bold'
        style={{
          textShadow: '0 0 1px rgba(255,255,255,0.5)',
          WebkitTextFillColor: 'transparent',
        }}
      >
        Hi, I&apos;m Nabil.
      </motion.h1>
      <motion.p
        exit={{ y: -25, scale: 0.95, opacity: 0 }}
        initial={{ y: -25, scale: 0.95, opacity: 0 }}
        animate={{ y: 0, scale: 1, opacity: 1 }}
        transition={{ delay: animationsComplete ? 0 : 0.5, duration: 0.5 }}
        className='text-[#bdbdc0] font-medium text-md mobile:text-lg text-center'
      >
        A full-stack developer with a passion for building beautiful &
        functional websites and applications.
      </motion.p>
      <div className='z-[2] gap-x-16 desktop:gap-x-10 gap-y-10 grid relative pt-14 grid-rows-[auto_auto_auto] grid-cols-4 auto-cols-fr'>
        {!projectExpanded ? (
          <React.Fragment>
            <Card
              delay={animationsComplete ? 0 : 0.8}
              className='z-50 card-big'
            >
              <h2 className='text-white font-medium text-[20px] mb-2'>
                About me
              </h2>
              <p className='text-[#bdbdc0] font-medium z-20'>
                🚀 Hi there! I&apos;m [Your Name], a digital dreamweaver with a
                passion for turning ideas into captivating online experiences.
                Picture me as a blend of creativity and code, weaving pixels
                into web magic that leaves a lasting impression.
                <br />
                <br />
                💡 Armed with a toolbox of HTML, CSS, and JavaScript, I
                specialize in creating websites that not only work seamlessly
                but also look darn good doing it. Whether it&apos;s building
                user-friendly interfaces or adding a sprinkle of animation,
                I&apos;m all about making the digital world a little more
                delightful.
              </p>
              <Image
                alt='expand'
                src='/wave.png'
                width={150}
                height={150}
                className='hidden mobile:block absolute bottom-0 right-0 x-10'
              />
              <div className='mobile:absolute bottom-6 left-6 x-10 flex gap-4 opacity-75 self-end'>
                <a
                  target='_blank'
                  href='https://www.linkedin.com/in/nabil-el-hayek-850849214/'
                >
                  <FaLinkedin size={24} />
                </a>
                <a target='_blank' href='mailto:hayeknabil214@gmail.com'>
                  <FaEnvelope size={24} />
                </a>
              </div>
            </Card>
            <Card
              delay={animationsComplete ? 0 : 0.9}
              className='bg-[url("/location.png")] bg-cover bg-top items-center justify-end card-small'
            >
              <div className='bg-[#2d2c30] shadow-lg rounded-3xl p-4 text-white backdrop-filter backdrop-blur-md bg-opacity-50'>
                I&apos;m based in Malmö, Sweden
              </div>
            </Card>
            <Projects
              animationComplete={() => setAnimationsComplete(true)}
              delay={animationsComplete ? 0 : 1}
              expand={setProjectExpanded}
              slides={projects}
            />
          </React.Fragment>
        ) : (
          <Card
            style={{ gridArea: 'span 1/span 4/span 1/span 4' }}
            ref={ref}
            className='z-50'
          >
            <h2 className='text-white font-medium text-[20px] mb-2 z-90'>
              {projectExpanded.title}
            </h2>
            <p className='text-[#bdbdc0] font-medium mb-4 z-20 whitespace-pre-line'>
              {projectExpanded.description}
            </p>
            <h3 className='text-white font-medium text-[18px] z-90'>Role</h3>
            <p className='text-[#bdbdc0] font-medium mb-4 z-20'>
              {projectExpanded.role}
            </p>
            <h3 className='text-white font-medium text-[18px] z-90'>Period</h3>
            <p className='text-[#bdbdc0] font-medium z-20'>
              {projectExpanded.period}
            </p>
            {projectExpanded.link && (
              <div className='absolute bottom-6 left-6 x-10 flex gap-4 opacity-75'>
                <a target='_blank' href={projectExpanded.link}>
                  <FaLink size={24} />
                </a>
              </div>
            )}

            <div className='absolute top-6 right-6 x-10 flex gap-4 opacity-75'>
              <IoIosClose size={24} onClick={() => setProjectExpanded(null)} />
            </div>
          </Card>
        )}
        <Skills
          style={{ gridArea: 'span 1/span 4/span 1/span 4' }}
          skills={[
            'HTML',
            'CSS',
            'JavaScript',
            'TypeScript',
            'Git',
            'React',
            'Next.js',
            'PHP',
            'React Native',
            'Node.js',
            'Tailwind CSS',
            'MySQL',
            'MongoDB',
            'GraphQL',
            'Svelte',
            'Jest',
            'Cypress',
            'Docker',
            'Express',
            'GCP',
            'AI / ML',
            'Nest.js',
            'PostgreSQL',
            'Prisma',
            'tRPC',
          ]}
        />
      </div>
    </div>
  );
};

export default Page;
