import React, { useState } from 'react';
import { BrowserRouter, Routes, Route, Navigate } from 'react-router-dom';
import { useCookies } from 'react-cookie';

// import SongContextProvider from './Context/songContext';
import songContext from './Context/songContext';

import { HomeComponent, LoginComponent, SignupComponent } from './Routes';
import {
  LoggedInHomeComponent,
  MyMusicComponent,
  UploadSongComponent,
  SearchComponent,
  LibraryComponent,
} from './Routes';

function App() {
  const [currentSong, setCurrentSong] = useState(null);
  const [playing, setPlaying] = useState(null);
  const [audioOn, setAudioOn] = useState(null);
  const [username, setUsername] = useState('');

  const [cookie, setCookie] = useCookies(['token']);

  return (
    <div className="w-screen h-screen font-poppins">
      <BrowserRouter>
        {cookie.token ? (
          // Logged In Routes
          <songContext.Provider
            value={{
              currentSong,
              setCurrentSong,
              playing,
              setPlaying,
              audioOn,
              setAudioOn,
            }}
          >
            <Routes>
              <Route path="/" element={<HelloComponent />} />
              <Route path="/home" element={<LoggedInHomeComponent />} />
              <Route path="/uploadSong" element={<UploadSongComponent />} />
              <Route path="/myMusic" element={<MyMusicComponent />} />
              <Route path="/search" element={<SearchComponent />} />
              <Route path="/library" element={<LibraryComponent />} />

              <Route path="*" element={<Navigate to="/home" />} />
            </Routes>
          </songContext.Provider>
        ) : (
          // Logged Out Routes
          <Routes>
            <Route path="/home" element={<HomeComponent />} />
            <Route
              path="/login"
              element={
                <LoginComponent username={setUsername} cookie={setCookie} />
              }
            />
            <Route
              path="/signup"
              element={<SignupComponent username={setUsername} />}
            />
            <Route path="*" element={<Navigate to="/login" />} />
          </Routes>
        )}
      </BrowserRouter>
    </div>
  );
}

const HelloComponent = () => {
  return <div>This is hello from component</div>;
};
export default App;
