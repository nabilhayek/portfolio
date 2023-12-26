import React from 'react';

type Props = {
  title: string;
};

const SkillsCard = ({ title }: Props) => {
  return (
    <div className='bg-[#2d2c30]  border border-[#2d2c30] backdrop-filter backdrop-blur-xl bg-opacity-30 shadow-lg rounded-full text-white h-full desktop:text-sm text-xs flex items-center justify-center font-[400]'>
      {title}
    </div>
  );
};

export default SkillsCard;
