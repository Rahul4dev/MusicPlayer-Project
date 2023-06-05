import React, { useContext } from 'react';

import { Icon } from '@iconify/react';

import spotify_logo from '../../asset/Spotify-White-Logo.wine.png';

import { IconText, TextButton } from '../index';
import { SongPlayer } from '../index';

import songContext from '../../Context/songContext';
import { Link } from 'react-router-dom';

const SpotifyWrapper = ({ children, currActiveScreen }) => {
  const { currentSong } = useContext(songContext);
  return (
    <div className="h-full w-full  bg-app-black overflow-x-hidden">
      <div className={`${currentSong ? 'h-9/10' : 'h-full'} w-full flex`}>
        <div className="sideBar h-full w-1/5  bg-black text-white flex flex-col justify-between pb-10">
          <div>
            <Link to={'/home'}>
              <div className="mt-0 ml-2 sm:w-15 w-25">
                <img src={spotify_logo} alt="logo" width={220} />
              </div>
            </Link>
            <div className="ml-4">
              <IconText
                iconName="material-symbols:home-rounded"
                displayText="Home"
                isActive={currActiveScreen === 'home'}
              />
              <IconText
                iconName="ic:outline-search"
                displayText="Search"
                isActive={currActiveScreen === 'Search'}
              />
              <IconText
                iconName="solar:music-library-2-outline"
                displayText="Library"
                isActive={currActiveScreen === 'Library'}
              />
              <IconText
                iconName="game-icons:love-song"
                displayText="My Music"
                isActive={currActiveScreen === 'myMusic'}
              />
              <div className="w-full mt-10"></div>
              <IconText
                iconName="material-symbols:add-box-rounded"
                displayText="Create Playlist"
              />
              <IconText iconName="bxs:heart-square" displayText="Liked Songs" />
            </div>
          </div>
          <div className="px-5  cursor-pointer ">
            <div className="border border-gray-400 hover:border-white flex items-center justify-start sm:w-24 w-2/5 py-1 px-2 rounded-full">
              <Icon icon="ph:globe" />
              <div className="ml-2 text-gray-400 hover:text-white text-sm font-semibold">
                English
              </div>
            </div>
          </div>
        </div>
        <div className="mainContent h-full w-4/5  bg-app-black overflow-y-auto  text-white">
          <div className="navbar w-full h-1/10 bg-black bg-opacity-30 flex justify-between items-center">
            <div className="leftSide flex cursor-pointer ml-4">
              <Icon
                icon="ic:baseline-keyboard-arrow-left"
                width={35}
                className="hover:text-white text-gray-400 bg-black rounded-full m-2"
              />
              <Icon
                icon="ic:baseline-keyboard-arrow-right"
                width={35}
                className="hover:text-white text-gray-400  bg-black rounded-full m-2 "
              />
            </div>
            <div className="rightSide flex w-4/5 items-center h-full">
              <div className="w-1/2 flex justify-around">
                <TextButton link="Premium" />
                <TextButton link="Support" />
                <TextButton link="Download" />
              </div>
              <div className="w-1/2 flex items-center h-full justify-around mr-4">
                <div className="border-white border-l-2 h-1/2 "></div>

                <TextButton link="Upload Song" />
                <TextButton link="My Music" />

                <div className="rounded-full bg-purple-400 h-12 w-12 cursor-pointer text-black font-semibold items-center flex justify-center">
                  <p>RS</p>
                </div>
              </div>
            </div>
          </div>
          {children}
        </div>
      </div>
      <SongPlayer />
    </div>
  );
};

export default SpotifyWrapper;
