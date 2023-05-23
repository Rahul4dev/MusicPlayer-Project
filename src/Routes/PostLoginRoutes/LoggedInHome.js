import React from 'react';
import { SpotifyWrapper, PlaylistView } from '../../Components';

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
    <SpotifyWrapper>
      <div className="Playlists p-8 overflow-auto pt-0">
        <PlaylistView titleText={'Focus'} cardsData={focusCardData} />
        <PlaylistView
          titleText={'Spotify Playlist'}
          cardsData={focusCardData}
        />
        <PlaylistView titleText={'Sounds of India'} cardsData={focusCardData} />
      </div>
    </SpotifyWrapper>
  );
};

export default LoggedInHomeComponent;
