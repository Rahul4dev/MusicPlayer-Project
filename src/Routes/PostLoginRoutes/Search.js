import React from 'react';

import { SpotifyWrapper } from '../../Components';
import { Icon } from '@iconify/react';

const SearchComponent = () => {
  return (
    <SpotifyWrapper currActiveScreen={'Search'}>
      <div className="MainContent w-full flex items-center relative py-6 px-10">
        <Icon
          icon="cil:search"
          width={25}
          className="absolute top-[2.3rem] left-[3.5rem]"
        />
        <input
          type="text"
          placeholder="What do you want to listen to?"
          className="w-1/2 p-3 text-m rounded-full bg-gray-800 px-12 outline-none focus:border-white"
        />
      </div>
    </SpotifyWrapper>
  );
};

export default SearchComponent;
