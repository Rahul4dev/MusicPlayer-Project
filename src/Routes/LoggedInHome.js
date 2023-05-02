import React from 'react';

import spotify_logo from '../asset/Spotify-White-Logo.wine.png';
import SongCard from '../Components/Songs/SongCard';

import IconText from '../Components/Shared/IconText';
import TextButton from '../Components/Shared/TextButton';
import { Icon } from '@iconify/react';

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
  );
};

const PlaylistView = ({ titleText, cardsData }) => {
  return (
    <div className="text-white mt-8">
      <h1 className="text-2xl font-semibold mb-5">{titleText}</h1>
      <div className="w-full flex justify-between space-x-4">
        {
          // Map the card data
          cardsData.map((card, key) => {
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
