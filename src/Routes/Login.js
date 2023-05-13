import React, { useState } from 'react';
import { Icon } from '@iconify/react';
import { Link, useNavigate } from 'react-router-dom';
import { useCookies } from 'react-cookie';

import { makeAuthenticatedPOSTRequest } from '../utils/serverHelper';
import SocialButtons from '../Components/Shared/SocialButtons';
import TextInput from '../Components/Shared/TextInput';

const LoginComponent = () => {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');

  const [cookie, setCookie] = useCookies(['token']);

  const navigate = useNavigate();

  const login = async () => {
    const data = { email, password };

    const response = await makeAuthenticatedPOSTRequest('/auth/login', data);

    if (response && !response.err) {
      const token = response.token;
      const date = new Date();
      date.setDate(date.getDate() + 30);
      setCookie('token', token, { path: '/', expires: date });

      alert('Log in Success');
      navigate('/home');
    } else {
      alert('Log in Failure');
    }
  };

  return (
    <div className="w-full h-full flex flex-col items-center ">
      <div className="logo  border-b border-solid border-gray-300 w-full flex justify-center">
        <Icon icon="logos:spotify" width="150" height="80" />
      </div>
      {/* Here we place Social Buttons */}
      <div className="socialBtn sm:w-1/2 w-1/3 py-5 flex items-center justify-center flex-col">
        <h4 className="font-bold mb-3">To continue, log in to spotify</h4>
        <SocialButtons
          bgColor="bg-[#1877F2]"
          textColor="text-white"
          color="#ffff"
          icon="bi:facebook"
          name="Continue with Facebook"
          link="https://www.google.com"
        />
        <SocialButtons
          textColor="text-white"
          bgColor="bg-[#000]"
          color="#ffff"
          icon="mdi:apple"
          name="Continue with Apple"
          link="https://www.google.com"
        />
        <SocialButtons
          textColor="text-gray-500"
          icon="logos:google-icon"
          name="Continue with Google"
          link="https://www.google.com"
        />
        <SocialButtons
          textColor="text-gray-500"
          name="Continue with Phone Number"
          link="https://www.google.com"
        />
      </div>
      <div className="flex flex-row justify-center items-center w-1/2">
        <div className="border-solid border border-gray-300 w-1/2" />
        <p className="m-2 font-medium">OR</p>
        <div className="border-solid border border-gray-300 w-1/2" />
      </div>
      <div className="inputRegion sm:w-1/2 w-1/3 py-5">
        {/* Inputs of email and password and sign-in button */}
        <TextInput
          type="text"
          label="Email address or Username"
          placeholder="Email address or Username"
          className="my-6"
          value={email}
          setValue={setEmail}
        />

        <TextInput
          type="password"
          label="password"
          placeholder="Password"
          value={password}
          setValue={setPassword}
        />
      </div>

      <p className="font-semibold underline text-left w-1/2">
        Forgot your password?
      </p>

      <div className="w-1/2 flex item-center justify-between m-8">
        <div className="flex-1 flex-col item-center justify-center">
          <input
            type="checkbox"
            name="remember"
            className="accent-green-500/25 w-4 h-4"
          />
          <label htmlFor="remember" className="font-semibold ml-2">
            Remember me
          </label>
        </div>

        <button
          className="bg-green-500 font-semibold p-3 px-10 rounded-full"
          onClick={(e) => {
            e.preventDefault();
            login();
          }}
        >
          Log in
        </button>
      </div>
      <div className="border-solid border border-gray-300 w-1/2" />
      <p className="my-3 font-semibold text-lg">Don't have an account?</p>
      <div className="sm:w-1/2 w-max py-5 flex items-center justify-center flex-col">
        <Link
          to="/signup"
          className="mb-2 decoration-0 border border-gray-500 border-solid w-full flex flex-row hover:bg-green-500 items-center justify-center uppercase font-sans font-semibold tracking-wide  text-center p-2 rounded-full"
        >
          Sign Up for Spotify
        </Link>
      </div>
    </div>
  );
};

export default LoginComponent;
