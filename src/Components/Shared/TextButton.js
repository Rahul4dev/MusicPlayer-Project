import React from 'react';

const TextButton = ({ link }) => {
  return (
    <div className="font-normal cursor-pointer m-4 text-lg text-gray-400 hover:text-white">
      <a href={`/${link}`}>{link}</a>
    </div>
  );
};

export default TextButton;
