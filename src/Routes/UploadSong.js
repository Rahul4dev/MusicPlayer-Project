import React, { useState } from 'react';

import spotify_logo from '../asset/Spotify-White-Logo.wine.png';

import IconText from '../Components/Shared/IconText';
import TextButton from '../Components/Shared/TextButton';
import { Icon } from '@iconify/react';
import TextInput from '../Components/Shared/TextInput';

const UploadSong = () => {
  const [value, setValue] = useState('');
  return (
    <div className="h-full w-full flex">
      <div className="sideBar h-full w-1/5 bg-black text-white flex flex-col justify-between pb-10">
        <div>
          <div className="mt-0 ml-2 sm:w-15 w-25">
            <img src={spotify_logo} alt="logo" width={220} />
          </div>
          <div className="ml-4">
            <IconText
              iconName="material-symbols:home-rounded"
              displayText="Home"
              isActive={true}
            />
            <IconText
              iconName="ic:outline-search"
              displayText="Search"
              isActive={false}
            />
            <IconText
              iconName="solar:music-library-2-outline"
              displayText="Library"
              isActive={false}
            />
            <IconText
              iconName="ph:music-notes-plus-duotone"
              displayText="My Music"
              isActive={false}
            />
            <div className="w-full mt-10"></div>
            <IconText
              iconName="material-symbols:add-box-rounded"
              displayText="Create Playlist"
              isActive={false}
            />
            <IconText
              iconName="bxs:heart-square"
              displayText="Liked Songs"
              isActive={false}
            />
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
      <div className="mainContent h-full w-4/5 bg-app-black overflow-auto text-white">
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
          <div className="rightSide flex w-3/5 items-center h-full">
            <div className="w-2/3 flex justify-around">
              <TextButton link="Premium" />
              <TextButton link="Support" />
              <TextButton link="Download" />
            </div>
            <div className="w-1/3 flex items-center h-full justify-around mr-4">
              <div className="border-white border-l-2 h-1/2 "></div>

              <div className="font-normal cursor-pointer m-4 text-lg text-gray-400 hover:text-white">
                Upload Song
              </div>

              <div className="rounded-full bg-purple-400 h-12 w-12 cursor-pointer text-black font-semibold items-center flex justify-center">
                <p>RS</p>
              </div>
            </div>
          </div>
        </div>
        <div className="MainContent p-8 pt-0 overflow-auto">
          <div className="text-2xl font-semibold mb-5 mt-8">
            Upload your Song
          </div>
          <div className="w-2/3 flex space-x-3">
            <div className="w-1/2">
              <TextInput
                type={'text'}
                label={'Song Name'}
                placeholder={'Song Name'}
                className={''}
                value={value}
                setValue={setValue}
              />
            </div>
            <div className="w-1/2">
              <TextInput
                type={'text'}
                label={'Thumbnail URL'}
                placeholder={'thumbnail'}
                className={''}
                value={value}
                setValue={setValue}
              />
            </div>
          </div>
          <div className="w-2/3">
            <TextInput
              type={'text'}
              label={'Thumbnail URL'}
              placeholder={'thumbnail'}
              className={''}
              value={value}
              setValue={setValue}
            />
          </div>
        </div>
      </div>
    </div>
  );
};

export default UploadSong;
