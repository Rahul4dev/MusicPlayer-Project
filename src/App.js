import { BrowserRouter, Routes, Route, Navigate } from 'react-router-dom';
import { useCookies } from 'react-cookie';

import HomeComponent from './Routes/Home';
import LoggedInHomeComponent from './Routes/LoggedInHome';
import UploadSongComponent from './Routes/UploadSong';
import LoginComponent from './Routes/Login';
import SignupComponent from './Routes/Signup';

function App() {
  const [cookie, setCookie] = useCookies(['token']);

  return (
    <div className="w-screen h-screen font-poppins">
      <BrowserRouter>
        {cookie.token ? (
          // Logged In Routes
          <Routes>
            <Route path="/" element={<HelloComponent />} />
            <Route path="/home" element={<LoggedInHomeComponent />} />
            <Route path="/uploadSong" element={<UploadSongComponent />} />

            <Route path="*" element={<Navigate to="/home" />} />
          </Routes>
        ) : (
          // Logged Out Routes
          <Routes>
            <Route path="/home" element={<HomeComponent />} />
            <Route
              path="/login"
              element={<LoginComponent cookie={setCookie} />}
            />
            <Route path="/signup" element={<SignupComponent />} />
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
