import React, { useState } from 'react';
import { Icon } from '@iconify/react';
import { Howl } from 'howler';

const SongPlayer = () => {
  const [showSoundbar, setShowSoundbar] = useState('hidden');
  const [soundMute, setSoundMute] = useState('ic:twotone-volume-up');
  const [playing, setPlaying] = useState(false);

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

  const pauseSound = () => {
    audioOn.pause();
  };

  const soundEnterHandler = () => {
    setShowSoundbar('block');
  };

  const soundLeaveHandler = () => {
    setShowSoundbar('hidden');
  };

  const playButtonHandler = () => {
    if (playing === true) {
      pauseSound();
      setPlaying(false);
    } else {
      setPlaying(true);
      playSound(
        'https://res.cloudinary.com/dcwb2b0fl/video/upload/v1683959147/kpaobhp46scx2oyajtzi.mp3'
      );
    }
  };

  const soundActionHandler = () => {
    if (soundMute === 'ic:twotone-volume-up') {
      setSoundMute('ic:baseline-volume-off');
    } else {
      setSoundMute('ic:twotone-volume-up');
    }
  };
  return (
    <div className="songPlayer w-full h-1/10 bg-black bg-opacity-30 text-white flex items-center px-4">
      <div className="leftSide flex items-center  w-1/4">
        <img
          src="https://c.saavncdn.com/933/Manike-From-Thank-God-Hindi-2022-20220920201002-500x500.jpg"
          className="w-14 h-14 rounded-[12px]"
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
            className="text-white m-4 hover:scale-125 active:scale-110"
          />
          <Icon
            icon="ph:picture-in-picture-thin"
            width={25}
            className="text-white m-4 hover:scale-125 active:scale-110"
          />
        </div>
      </div>
      <div className="playbackController w-1/2 h-full flex flex-col justify-center items-center ">
        <div className="flex items-center">
          <Icon
            icon="ph:shuffle-fill"
            width={25}
            className="text-gray-500 hover:text-white m-2  hover:scale-125 active:scale-110  cursor-pointer"
          />
          <Icon
            icon="gg:play-track-next"
            width={25}
            className="text-gray-500 hover:text-white m-2  hover:scale-125 active:scale-110 cursor-pointer"
          />
          <Icon
            icon={
              playing
                ? 'material-symbols:pause-circle-rounded'
                : 'material-symbols:play-circle-rounded'
            }
            width={40}
            onClick={playButtonHandler}
            className="text-gray-500 hover:text-white m-2  hover:scale-125 active:scale-110 cursor-pointer"
          />
          <Icon
            icon="gg:play-track-prev"
            width={25}
            className="text-gray-500 hover:text-white m-2  hover:scale-125 active:scale-110 cursor-pointer"
          />

          <Icon
            icon="iconoir:repeat-once"
            width={25}
            className="text-gray-500 hover:text-white m-2  hover:scale-125 active:scale-110 cursor-pointer"
          />
        </div>
        <div>ProgressBar</div>
      </div>
      <div className="rightSide w-1/4 flex justify-end items-center">
        <div className="flex justify-evenly w-1/2">
          <Icon
            icon="lucide:mic-2"
            width={25}
            className="text-gray-500 hover:text-white m-2  hover:scale-125 active:scale-110 cursor-pointer"
          />
          <Icon
            icon="heroicons:queue-list"
            width={25}
            className="text-gray-500 hover:text-white m-2  hover:scale-125 active:scale-110 cursor-pointer"
          />
          <Icon
            icon="tabler:devices-2"
            width={25}
            className="text-gray-500 hover:text-white m-2  hover:scale-125 active:scale-110 cursor-pointer"
          />
        </div>
        <div className="flex justify-between w-1/2">
          <Icon
            icon={soundMute}
            width={25}
            className="text-gray-500 hover:text-white   hover:scale-125 active:scale-110 cursor-pointer"
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
  );
};

export default SongPlayer;
