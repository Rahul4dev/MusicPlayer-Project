import React from 'react';
import { Icon } from '@iconify/react';

const IconText = ({ iconName, displayText, isActive }) => {
  let linkTo = displayText;
  if (displayText === 'My Music') {
    linkTo = 'My Music';
    displayText = 'myMusic';
  } else if (displayText === 'Create Playlist') {
    linkTo = 'Create Playlist';
    displayText = 'createPlaylist';
  } else if (displayText === 'Liked Songs') {
    linkTo = 'Liked Songs';
    displayText = 'likedSongs';
  }
  return (
    <div className="flex items-center justify-start cursor-pointer">
      <div className="sm:px-2 px-0 py-2">
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
        <a href={`/${displayText}`}>{linkTo}</a>
      </div>
    </div>
  );
};

export default IconText;