import { BrowserRouter, Routes, Route } from 'react-router-dom';
import HomeComponent from './Routes/Home';
import LoginComponent from './Routes/Login';
import SignupComponent from './Routes/Signup';

function App() {
  return (
    <div className="w-screen h-screen font-poppins">
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<div>Hello</div>} />
          <Route path="/home" element={<HomeComponent />} />
          <Route path="/login" element={<LoginComponent />} />
          <Route path="/signup" element={<SignupComponent />} />
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
