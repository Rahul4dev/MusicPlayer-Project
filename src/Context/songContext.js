import React, { createContext } from 'react';

const songContext = createContext({
  currentSong: null,
  setCurrentSong: (currentSong) => {},
});

const SongContextProvider = (props) => {
  return <songContext.Provider>{props.children}</songContext.Provider>;
};

export default SongContextProvider;
