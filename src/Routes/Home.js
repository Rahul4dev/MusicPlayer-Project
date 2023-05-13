import React from 'react';

import spotify_logo from '../asset/Spotify-White-Logo.wine.png';
import SongCard from '../Components/Songs/SongCard';

import IconText from '../Components/Shared/IconText';
import TextButton from '../Components/Shared/TextButton';
import { Icon } from '@iconify/react';

const HomeComponent = () => {
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

  const spotifyPlaylistsCardData = [
    {
      title: 'This is one',
      description: 'Relax and indulge with beautiful piano pieces',
      imgUrl:
        'https://images.unsplash.com/photo-1456513080510-7bf3a84b82f8?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1546&q=80',
    },
    {
      title: 'Deep Focus',
      description: 'Keep calm and focus with this music',
      imgUrl:
        'https://images.unsplash.com/photo-1558021212-51b6ecfa0db9?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1766&q=80',
    },
    {
      title: 'Instrumental Study',
      description: 'Focus with soft study music in the background.',
      imgUrl:
        'https://images.unsplash.com/photo-1612225330812-01a9c6b355ec?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=2940&q=80',
    },
    {
      title: 'Focus Flow',
      description: 'Up tempo instrumental hip hop beats',
      imgUrl:
        'https://images.unsplash.com/photo-1519389950473-47ba0277781c?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1740&q=80',
    },
    {
      title: 'Beats to think to',
      description: 'Focus with deep techno and tech house',
      imgUrl:
        'https://images.unsplash.com/photo-1511379938547-c1f69419868d?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1740&q=80',
    },
  ];

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
          <div className="rightSide flex w-1/2 items-center h-full">
            <div className="w-3/5 flex justify-around">
              <TextButton link="Premium" />
              <TextButton link="Support" />
              <TextButton link="Download" />
            </div>
            <div className="w-2/5 flex items-center h-full justify-around mr-4">
              <div className="border-white border-l-2 h-1/2 "></div>

              <TextButton link="Sign up" />
              <div className="bg-white rounded-full h-3/5 px-8 text-black font-semibold items-center flex justify-center">
                <a href="/login">Log in</a>
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
            cardsData={spotifyPlaylistsCardData}
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

export default HomeComponent;

/* <Card
          title={'Boom diggy diggy'}
          description={
            ' The video was directed by Luke Biggins, Roger Russell and Knight himself. The music video starred Knight and Jasmine Walia'
          }
          img={
            'https://i.scdn.co/image/ab67616d0000b27382f0b09ca518a1563175ed85'
          }
        />
        <Card
          title={'Manike'}
          description={
            'the Sri Lankan Sinhala-language song Manike Mage Hithe that took the world by storm last year, Sung by Yohani'
          }
          img={
            'https://c.saavncdn.com/933/Manike-From-Thank-God-Hindi-2022-20220920201002-500x500.jpg'
          }
        />
        <Card
          title={'Soch Liya'}
          description={
            'Song of film Radhe shyam, lyrics by Manoj and sung by Arijit'
          }
          img={
            'https://i.scdn.co/image/ab67616d0000b27359dac52af549bd78c1cfeb9b'
          }
        />
        <Card
          title={'Kyun Dhunde'}
          description={
            'Kyun Dhunde Lyrics by Vilen is new released Hindi song in his voice, Vilen has made its tune.'
          }
          img={
            'https://c.saavncdn.com/237/Kyun-Dhunde-1-Min-Music-Hindi-2022-20220715100147-500x500.jpg'
          }
        />
        <Card
          title={'Baarish Ki Jaaye '}
          description={
            'Baarish Ki Jaaye is a Hindi language song and is sung by B Praak. '
          }
          img={
            'https://m.media-amazon.com/images/M/MV5BZmUxOWM3MzctNmMyYy00Y2QyLTgwZmEtZmEzY2QzZjQyZTE5XkEyXkFqcGdeQXVyMTMxMDEzODUw._V1_.jpg'
          }
        />
        <Card
          title={'Adhoore Hum'}
          description={
            'Adhoore Lyrics by Prasoon Joshi from Many Moods Of Vishal-Shekhar'
          }
          img={
            'https://c.saavncdn.com/522/Adhoore-Hum-Hindi-2023-20230321150901-500x500.jpg'
          }
        /> */
