import React, { useState, useEffect } from 'react';
import { Howl } from 'howler';

import { SingleCard, SpotifyWrapper } from '../../Components';

// import SongCard from '../Components';
import { makeAuthenticatedGETRequest } from '../../utils/serverHelper';

const MyMusicComponent = () => {
  const [songData, setSongData] = useState([]);
  const [audioOn, setAudioOn] = useState(null);

  const playSound = (songSrc) => {
    if (audioOn) {
      audioOn.stop();
    }
    let sound = new Howl({
      src: [songSrc],
      html5: true,
    });
    setAudioOn(sound);
    sound.play();
  };

  useEffect(() => {
    const getData = async () => {
      const response = await makeAuthenticatedGETRequest('/song/get/mysongs');
      setSongData(response.data);
    };
    getData();
  }, []);
  return (
    <SpotifyWrapper>
      <div className="MainContent p-8 pt-2 overflow-auto">
        <div className="text-xl font-semibold p-4 pl-2">My Songs</div>
        <div className="space-y-3 overflow-auto">
          {songData.map((song, i) => (
            <SingleCard info={song} key={i} playSong={playSound} />
          ))}
        </div>
      </div>
    </SpotifyWrapper>
  );
};

export default MyMusicComponent;
