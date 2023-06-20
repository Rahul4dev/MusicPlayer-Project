import React, { useState } from 'react';

import { makeAuthenticatedGETRequest } from '../../utils/serverHelper';
import { SingleCard, SpotifyWrapper } from '../../Components';

import { Icon } from '@iconify/react';

const SearchComponent = () => {
  const [searchText, setSearchText] = useState('');
  const [isFocused, setIsFocussed] = useState(false);
  const [songData, setSongData] = useState([]);

  const searchSong = async () => {
    // function to call search API
    const response = await makeAuthenticatedGETRequest(
      '/song/get/songname/' + searchText
    );
    setSongData(response.data);
    // setSearchText('');
  };
  return (
    <SpotifyWrapper currActiveScreen={'Search'}>
      <div className="MainContent w-full flex items-center py-6 px-10">
        <div
          className={`w-1/3 p-3 text-sm rounded-full bg-gray-800 px-5 flex space-x-3 items-center ${
            isFocused ? 'border border-white' : ''
          } `}
        >
          <Icon icon="cil:search" width={25} />
          <input
            type="text"
            value={searchText}
            className="w-full bg-gray-800 focus:outline-none"
            onChange={(event) => setSearchText(event.target.value)}
            onFocus={() => {
              setIsFocussed(true);
            }}
            onBlur={() => {
              setIsFocussed(false);
            }}
            onKeyDown={(e) => {
              if (e.key === 'Enter') {
                searchSong();
              }
            }}
            placeholder="What do you want to listen to?"
          />
        </div>
      </div>

      {songData.length > 0 ? (
        <div className="px-4 py-10 space-y-1 ">
          "<span className="font-bold">{searchText}</span>" named songs are:
          {songData.map((item) => (
            <SingleCard
              info={item}
              key={JSON.stringify(item)}
              playSong={() => {}}
            />
          ))}
        </div>
      ) : (
        <div className="px-4 text-gray-500">
          Not found !! . Please check the name of the song
          <span className="font-bold text-white">{searchText}</span>
        </div>
      )}
    </SpotifyWrapper>
  );
};

export default SearchComponent;
