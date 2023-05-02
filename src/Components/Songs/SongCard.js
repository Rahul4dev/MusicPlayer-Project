import React from 'react';
import { Icon } from '@iconify/react';

const SongCard = ({ title, description, imgUrl }) => {
  return (
    <div className="bg-black bg-opacity-40 w-1/6 px-4 py-2 rounded-md m-2 relative">
      <div className="py-4 relative">
        <div className="rounded-full absolute left-2 top-4 bg-black">
          <Icon icon="ri:spotify-fill" />
        </div>
        <img className="w-full rounded-md h-50" src={imgUrl} alt="img" />
      </div>
      <div className="absolute  right-4 bottom-15 cursor-pointer">
        <Icon
          icon="material-symbols:play-circle-rounded"
          color="#52fe34"
          width={40}
        />
      </div>
      <div className="text-white  font-semibold py-3">{title}</div>
      <div className="text-gray-500 text-sm ">{description}</div>
    </div>
  );
};

export default SongCard;
