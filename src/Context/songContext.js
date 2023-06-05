import { createContext } from 'react';

const songContext = createContext({
  currentSong: null,
  setCurrentSong: (currentSong) => {},
  playing: null,
  setPlaying: () => {},
  audioOn: null,
  setAudioOn: () => {},
});

export default songContext;

// const SongContextProvider = (props) => {
//   return (
//     <songContext.Provider value={props.value}>
//       {props.children}
//     </songContext.Provider>
//   );
// };

// export default SongContextProvider;
