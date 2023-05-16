import React, { useState } from 'react';
import { Icon } from '@iconify/react';

import styles from './LoggedInHome.module.css';

import spotify_logo from '../asset/Spotify-White-Logo.wine.png';
import SongCard from '../Components/Songs/SongCard';

import IconText from '../Components/Shared/IconText';
import TextButton from '../Components/Shared/TextButton';

const LoggedInHomeComponent = () => {
  const focusCardData = [
    {
      title: 'Boom diggy diggy',
      description:
        ' The video was directed by Luke Biggins, Roger Russell and Knight himself. The music video starred Knight and Jasmine Walia',

      imgUrl:
        'https://i.scdn.co/image/ab67616d0000b27382f0b09ca518a1563175ed85',
    },
    {
      title: 'Manike',
      description:
        'the Sri Lankan Sinhala-language song Manike Mage Hithe that took the world by storm last year, Sung by Yohani',

      imgUrl:
        'https://c.saavncdn.com/933/Manike-From-Thank-God-Hindi-2022-20220920201002-500x500.jpg',
    },
    {
      title: 'Soch Liya',
      description:
        'Song of film Radhe shyam, lyrics by Manoj and sung by Arijit',
      imgUrl:
        'https://i.scdn.co/image/ab67616d0000b27359dac52af549bd78c1cfeb9b',
    },
    {
      title: 'Kyun Dhunde',
      description:
        'Kyun Dhunde Lyrics by Vilen is new released Hindi song in his voice, Vilen has made its tune.',
      imgUrl:
        'https://c.saavncdn.com/237/Kyun-Dhunde-1-Min-Music-Hindi-2022-20220715100147-500x500.jpg',
    },
    {
      title: 'Baarish Ki Jaaye ',
      description:
        'Baarish Ki Jaaye is a Hindi language song and is sung by B Praak. ',
      imgUrl:
        'https://m.media-amazon.com/images/M/MV5BZmUxOWM3MzctNmMyYy00Y2QyLTgwZmEtZmEzY2QzZjQyZTE5XkEyXkFqcGdeQXVyMTMxMDEzODUw._V1_.jpg',
    },
    {
      title: 'Adhoore Hum',
      description:
        'Adhoore Lyrics by Prasoon Joshi from Many Moods Of Vishal-Shekhar',
      imgUrl:
        'https://c.saavncdn.com/522/Adhoore-Hum-Hindi-2023-20230321150901-500x500.jpg',
    },
  ];

  const [showSoundbar, setShowSoundbar] = useState('hidden');
  const [soundMute, setSoundMute] = useState('ic:twotone-volume-up');

  const soundEnterHandler = () => {
    setShowSoundbar('block');
  };

  const soundLeaveHandler = () => {
    setShowSoundbar('hidden');
  };

  const soundActionHandler = () => {
    if (soundMute === 'ic:twotone-volume-up') {
      setSoundMute('ic:baseline-volume-off');
    } else {
      setSoundMute('ic:twotone-volume-up');
    }
  };

  return (
    <div className="h-full w-full  bg-app-black">
      <div className="h-9/10 w-full flex">
        <div className="sideBar h-full w-1/5 bg-black text-white flex flex-col justify-between pb-10">
          <div>
            <div className="mt-0 ml-2 sm:w-15 w-25">
              <img src={spotify_logo} alt="logo" width={220} />
            </div>
            <div className="ml-4">
              <IconText
                iconName="material-sym"
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
                iconName="game-icons:love-song"
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
          <div className="Playlists p-8 overflow-auto pt-0">
            <PlaylistView titleText={'Focus'} cardsData={focusCardData} />
            <PlaylistView
              titleText={'Spotify Playlist'}
              cardsData={focusCardData}
            />
            <PlaylistView
              titleText={'Sounds of India'}
              cardsData={focusCardData}
            />
          </div>
        </div>
      </div>
      <div className="songPlayer w-full h-1/10 bg-black bg-opacity-30 text-white flex items-center px-4">
        <div className="leftSide flex items-center  w-1/4">
          <img
            src="https://c.saavncdn.com/933/Manike-From-Thank-God-Hindi-2022-20220920201002-500x500.jpg"
            className="w-20 h-20 rounded-[12px]"
            alt="music"
          />
          <div className="pl-4">
            <div className="hover:underline cursor-pointer mb-2 text-base ">
              Music Name
            </div>
            <div className="hover:underline cursor-pointer text-sm text-gray-500 hover:text-white">
              Singer Name
            </div>
          </div>
          <div className="flex ml-8">
            <Icon
              icon="mdi:cards-heart-outline"
              width={25}
              className="text-white m-4 hover:scale-125"
            />
            <Icon
              icon="ph:picture-in-picture-thin"
              width={25}
              className="text-white m-4 hover:scale-125"
            />
          </div>
        </div>
        <div className="playbackController w-1/2 h-full flex flex-col justify-center items-center">
          <div className="flex items-center">
            <Icon
              icon="ph:shuffle-fill"
              width={25}
              className="text-white m-2 hover:scale-125  cursor-pointer"
            />
            <Icon
              icon="gg:play-track-next"
              width={25}
              className="text-white m-2 hover:scale-125  cursor-pointer"
            />
            <Icon
              icon="material-symbols:play-circle-rounded"
              width={50}
              className="text-white m-2 hover:scale-125  cursor-pointer"
            />
            <Icon
              icon="gg:play-track-prev"
              width={25}
              className="text-white m-2 hover:scale-125  cursor-pointer"
            />

            <Icon
              icon="iconoir:repeat-once"
              width={25}
              className="text-white m-2 hover:scale-125  cursor-pointer"
            />
          </div>
          <div
            className={`${styles['range-slider']} w-full flex items-center justify-center rounded-full`}
          >
            <input type="range" id="range" min="0" max="100" defaultValue={0} />
            <div className="ml-3">3.44 </div>
          </div>
        </div>
        <div className="rightSide w-1/4 flex justify-end items-center">
          <div className="flex justify-evenly w-1/2">
            <Icon
              icon="lucide:mic-2"
              width={25}
              className="text-white m-2 hover:scale-125  cursor-pointer"
            />
            <Icon
              icon="heroicons:queue-list"
              width={25}
              className="text-white m-2 hover:scale-125  cursor-pointer"
            />
            <Icon
              icon="tabler:devices-2"
              width={25}
              className="text-white m-2 hover:scale-125  cursor-pointer"
            />
          </div>
          <div className="flex justify-between w-1/2">
            <Icon
              icon={soundMute}
              width={25}
              className="text-white  hover:scale-125  cursor-pointer"
              onMouseEnter={soundEnterHandler}
              onMouseLeave={soundLeaveHandler}
              onClick={soundActionHandler}
            />
            <div
              className={`border ${showSoundbar} border-t-4 cursor-pointer w-full h-1 rounded mt-3 ml-2 border-gray-100`}
            ></div>
          </div>
        </div>
      </div>
    </div>
  );
};

const PlaylistView = ({ titleText, cardsData }) => {
  return (
    <div className="text-white mt-8">
      <h1 className="text-2xl font-semibold mb-5">{titleText}</h1>
      <div className="w-full flex justify-between space-x-4">
        {
          // Map the card data
          cardsData.map((card) => {
            return (
              <SongCard
                title={card.title}
                description={card.description}
                imgUrl={card.imgUrl}
                key={Math.random()}
              />
            );
          })
        }
      </div>
    </div>
  );
};

export default LoggedInHomeComponent;
