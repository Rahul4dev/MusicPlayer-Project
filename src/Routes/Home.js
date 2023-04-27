import React from 'react';

import spotify_logo from '../asset/Spotify-White-Logo.wine.png';

import IconText from '../Components/Shared/IconText';
import TextButton from '../Components/Shared/TextButton';
import { Icon } from '@iconify/react';

const HomeComponent = () => {
  return (
    <div className="h-full w-full flex">
      <div className="sideBar h-full w-1/5 bg-black text-white flex flex-col justify-between pb-10">
        <div>
          <div className="mt-0 ml-2 sm:w-15 w-25">
            <img src={spotify_logo} alt="logo" width={220} />
          </div>
          <div className="ml-2">
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
      <div className="mainContent h-full w-4/5 bg-app-black  text-white">
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
          <div className="rightSide flex w-1/2 items-center h-full">
            <div className="w-3/5 flex justify-around">
              <TextButton text="Premium" />
              <TextButton text="Support" />
              <TextButton text="Download" />
            </div>
            <div className="w-2/5 flex items-center h-full justify-around mr-4">
              <div className="border-white border-l-2 h-1/2 "></div>

              <TextButton text="Sign up" />
              <div className="bg-white rounded-full h-3/5 px-8 text-black font-semibold items-center flex justify-center">
                Log in
              </div>
            </div>
          </div>
        </div>
        <div className="p-8">
          <PlaylistView />
        </div>
      </div>
    </div>
  );
};

const PlaylistView = () => {
  return (
    <div className="text-white">
      <h1 className="text-2xl font-semibold mb-5">Focus</h1>
      <div className="w-full flex justify-between">
        <Card
          title={'More Wiggly'}
          description={
            'Title is very wired Title is very wired Title is very wired'
          }
          img={'https://deeplyrics.in/images/boom-diggy-diggy-35236.jpg'}
        />
        <Card title={'More Wiggly'} description={'Title is very wired'} />
        <Card title={'More Wiggly'} description={'Title is very wired'} />
        <Card title={'More Wiggly'} description={'Title is very wired'} />
        <Card title={'More Wiggly'} description={'Title is very wired'} />
        <Card title={'More Wiggly'} description={'Title is very wired'} />
      </div>
    </div>
  );
};

const Card = ({ title, description, img }) => {
  return (
    <div className="bg-black bg-opacity-60 w-1/6 p-4 rounded-md m-2 relative">
      <div className="py-4 relative">
        <div className="rounded-full absolute left-2 top-4 bg-black">
          <Icon icon="ri:spotify-fill" />
        </div>
        <img className="w-full rounded-md" src={img} alt="img" />
      </div>
      <div className="absolute right-4 bottom-15 cursor-pointer">
        <Icon
          icon="material-symbols:play-circle-rounded"
          color="#52fe34"
          width={40}
        />
      </div>
      <div className="text-white text-sm font-semibold">{title}</div>
      <div className="text-gray-500 text-sm">{description}</div>
    </div>
  );
};

export default HomeComponent;
