import React from 'react';

const TextButton = ({ text }) => {
  return (
    <div className="cursor-pointer m-4">
      <div className="font-normal text-lg text-gray-400 hover:text-white">
        {text}
      </div>
    </div>
  );
};

export default TextButton;
