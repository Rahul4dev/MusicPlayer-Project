import React from 'react';
import { Icon } from '@iconify/react';

const IconText = ({ iconName, displayText, isActive }) => {
  return (
    <div className="flex items-center justify-start cursor-pointer">
      <div className="sm:px-0 px-4 py-2">
        <Icon
          icon={iconName}
          color={isActive ? 'white' : 'gray'}
          fontSize={35}
        />
      </div>
      <div
        className={`text-lg font-semibold px-2 mr-0 ${
          isActive ? 'text-white' : 'text-gray-400'
        } hover:text-white`}
      >
        {displayText}
      </div>
    </div>
  );
};

export default IconText;
