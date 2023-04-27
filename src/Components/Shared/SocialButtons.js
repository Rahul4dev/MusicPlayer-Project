import React from 'react';
import { Icon } from '@iconify/react';

const SocialButtons = ({
  name,
  link,
  icon,
  bgColor,
  color,
  textColor,
  className,
}) => {
  return (
    <>
      <a
        href={link}
        className={`mb-2 decoration-0 border border-gray-500 border-solid w-full flex flex-row items-center ${className} justify-center uppercase font-sans font-semibold tracking-wide  text-center p-2 rounded-full ${bgColor}`}
      >
        <Icon icon={icon} color={color} width="40" height="25" />
        <p className={`ml-2 text-[16px] ${textColor}`}>{name}</p>
      </a>
    </>
  );
};

export default SocialButtons;
