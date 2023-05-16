import React from 'react';
import { Icon } from '@iconify/react';

const SingleCard = ({ info, playSong }) => {
  return (
    <div
      className="flex hover:bg-gray-400 hover:bg-opacity-20 p-2 pl-4 rounded-md"
      onClick={() => {
        playSong(info.track);
      }}
    >
      <div
        className="w-20 h-20 bg-cover bg-center hover:bg-opacity-20 flex items-center justify-center"
        style={{
          backgroundImage: `url('${info.thumbnail}')`,
        }}
      >
        <div className="">
          <Icon
            icon="material-symbols:play-arrow-rounded"
            width={50}
            className="hover:text-gray-400 "
          />
        </div>
      </div>
      <div className="flex w-full">
        <div className="text-white flex flex-col justify-between w-4/6 items-left pl-4">
          <div className="p-2 text-lg cursor-pointer hover:underline">
            {info.name}
          </div>
          <div className="text-sm text-gray-400 p-2 cursor-pointer hover:underline pb-3">
            {info.artist.firstName + ' ' + info.artist.lastName}
          </div>
        </div>
        <div className="w-1/6 flex items-center justify-center">
          <Icon
            icon="mdi:cards-heart-outline"
            width={40}
            className="text-gray-300 cursor-pointer hover:text-pink-800 "
          />
        </div>
        <div className="w-1/6 flex items-center justify-center text-sm relative text-gray-400">
          <div className="hover:text-gray-50 ">3:23</div>
          <div className="flex items-center justify-center cursor-pointer text-3xl hover:scale-150 hover:bottom-6 absolute top-0 bottom-4 right-0">
            ...
          </div>
        </div>
      </div>
    </div>
  );
};

export default SingleCard;
