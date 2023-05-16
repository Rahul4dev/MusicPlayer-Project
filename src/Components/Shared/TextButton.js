import React from 'react';

const TextButton = ({ link }) => {
  let linkTo = link;
  if (link === 'Upload Song') {
    linkTo = 'Upload Song';
    link = 'uploadSong';
  } else if (link === 'Sign up') {
    linkTo = 'Sign Up';
    link = 'signup';
  } else if (link === 'My Music') {
    linkTo = 'My Music';
    link = 'myMusic';
  }

  return (
    <div className="font-normal cursor-pointer m-4 text-lg text-gray-400 hover:text-white">
      <a href={`/${link}`}>{linkTo}</a>
    </div>
  );
};

export default TextButton;
