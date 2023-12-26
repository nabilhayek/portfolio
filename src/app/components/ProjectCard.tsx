import React from 'react';
import Card from './Card';
import Image from 'next/image';
import { ProjectSlide } from '../types';

type Props = {
  expand: React.Dispatch<React.SetStateAction<null | ProjectSlide>>;
} & ProjectSlide;

const ProjectCard = ({
  technologies,
  imageUrl,
  title,
  expand,
  description,
  link,
  role,
  period,
}: Props) => {
  return (
    <div
      className={`bg-[#1d1c20] backdrop-filter backdrop-blur-xl bg-opacity-70 w-full border border-[#2d2c30] rounded-3xl p-6 text-white h-[375px] relative flex-col overflow-hidden bg-cover bg-top flex justify-end`}
      style={{ backgroundImage: `url(${imageUrl})` }}
    >
      <div className='bg-gradient-to-b from-transparent from-30% to-[rgba(0,0,0,0.75)] -m-6 h-full absolute w-full' />
      <div
        className='w-10 h-10 rounded-full absolute top-5 right-5 bg-[#2d2c30] flex items-center justify-center cursor-pointer shadow-lg'
        onClick={() =>
          expand({
            technologies,
            imageUrl,
            title,
            description,
            link,
            role,
            period,
          })
        }
      >
        <Image alt='expand' src='/expand.svg' width={20} height={20} />
      </div>

      <div className='relative z-[1] w-full flex items-center flex-col gap-2'>
        <h2 className='text-white font-medium text-[20px]'>{title}</h2>
        <div className='flex gap-2 flex-wrap items-center justify-center'>
          {technologies.map((technology, i) => (
            <div
              key={i}
              className='bg-[#2d2c30] text-xs shadow-lg rounded-full px-3 py-1.5 text-white font-regular font-[400] backdrop-filter backdrop-blur-md bg-opacity-50'
            >
              {technology}
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default ProjectCard;
