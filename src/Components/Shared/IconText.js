import React from 'react';
import { Icon } from '@iconify/react';
import { Link } from 'react-router-dom';

const IconText = ({ iconName, displayText, isActive, targetLink, onClick }) => {
  return (
    <Link to={targetLink} className="block">
      <div
        className="flex items-center justify-start cursor-pointer"
        onClick={onClick}
      >
        <div className="sm:px-2 px-0 py-2">
          <Icon
            icon={iconName}
            color={isActive ? 'white' : 'gray'}
            fontSize={35}
          />
        </div>
        <div
          className={`${
            isActive ? 'text-white' : 'text-gray-500'
          } text-sm font-semibold hover:text-white`}
        >
          {displayText}
        </div>
      </div>
    </Link>
  );
};

export default IconText;
