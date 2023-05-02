import React, { useState } from 'react';
import { useCookies } from 'react-cookie';
import { Icon } from '@iconify/react';
import { Link, useNavigate } from 'react-router-dom';

import SocialButtons from '../Components/Shared/SocialButtons';
import TextInput from '../Components/Shared/TextInput';
import { makeAuthenticatedPOSTRequest } from '../utils/serverHelper';

const SignupComponent = () => {
  const [email, setEmail] = useState('');
  const [confirmEmail, setConfirmEmail] = useState('');

  const [userName, setUserName] = useState('');
  const [password, setPassword] = useState('');
  const [firstName, setFirstName] = useState('');
  const [lastName, setLastName] = useState('');

  const [cookie, setCookie] = useCookies(['token']);
  const navigate = useNavigate();

  const signUp = async () => {
    if (email !== confirmEmail) {
      alert('Email and confirm email must be the same, Check again.');
      return;
    }

    const data = {
      email,
      password,
      firstName,
      lastName,
      userName,
    };

    const response = await makeAuthenticatedPOSTRequest('/auth/register', data);

    if (response && !response.err) {
      const token = response.token;
      const date = new Date();
      date.setDate(date.getDate() + 30);
      setCookie('token', token, { path: '/', expires: date });

      alert('Signup Success');
      navigate('/home');
    } else {
      alert('Signup Failure');
    }
  };

  return (
    <div className="w-full h-full flex flex-col items-center overflow-x-auto ">
      <div className="logo mt-4 w-full flex justify-center">
        <Icon icon="logos:spotify" width="120" height="60" />
      </div>
      {/* Here we place Social Buttons */}
      <div className="socialBtn w-2/5 sm:w-1/3 py-5 flex items-center justify-center flex-col">
        <h4 className="font-bold mb-3 text-2xl ">
          Sign up for free to start listening.
        </h4>
        <SocialButtons
          bgColor="bg-[#1877F2]"
          textColor="text-white"
          className="capitalize mb-4"
          color="#ffff"
          icon="bi:facebook"
          name="Continue with Facebook"
          link="https://www.google.com"
        />

        <SocialButtons
          textColor="text-gray-500"
          className="capitalize"
          icon="logos:google-icon"
          name="Continue with Google"
          link="https://www.google.com"
        />
      </div>
      <div className="flex flex-row justify-center items-center w-2/5 sm:w-1/3">
        <div className="border-solid border border-gray-300 w-1/3" />
        <p className="m-2 font-medium text-gray-500">Or</p>
        <div className="border-solid border border-gray-300 w-1/3" />
      </div>
      <div className="inputRegion w-2/5 sm:w-1/3 py-5">
        {/* Inputs of email and password and sign-in button */}

        <TextInput
          type="email"
          label="What's you email?"
          placeholder="Enter your email."
          className="mt-6 font-semibold"
          value={email}
          setValue={setEmail}
        />
        <p className="text-[14px] mt-0 p-0 underline text-green-700">
          Use phone number instead.
        </p>
        <TextInput
          type="email"
          label="Confirm your email?"
          placeholder="Confirm your email."
          className="mt-6 font-semibold"
          value={confirmEmail}
          setValue={setConfirmEmail}
        />

        <TextInput
          type="password"
          label="Create a password"
          placeholder="Create a password."
          className="mt-6 font-semibold"
          value={password}
          setValue={setPassword}
        />
        <TextInput
          type="text"
          label="What's you username"
          placeholder="Enter your username."
          className="mt-6 font-semibold"
          value={userName}
          setValue={setUserName}
        />
        <p className="text-[14px] mt-0 p-0">
          *This will appear on your profile.
        </p>
        <div className="flex w-full md:flex-row flex-col justify-between items-center space-x-8">
          <TextInput
            type="text"
            label="First Name"
            placeholder="Enter your first name."
            className="md:mt-6 mt-0  font-semibold"
            value={firstName}
            setValue={setFirstName}
          />
          <TextInput
            type="text"
            label="Last Name"
            placeholder="Enter your last name."
            className="md:mt-6 mt-0  font-semibold"
            value={lastName}
            setValue={setLastName}
          />
        </div>
      </div>

      <div className="w-1/3 sm:w-1/4 flex item-center justify-center m-8">
        <button
          className="bg-green-500 font-semibold p-3 px-10 rounded-full"
          onClick={(e) => {
            e.preventDefault();
            signUp();
          }}
        >
          Sign up
        </button>
      </div>
      <div className="border-solid border border-gray-300 w-1/3 " />
      <p className="mb-20 font-medium ">
        Have an account?
        <Link to="/login" className="underline text-green-600 mx-2 ">
          Log in.
        </Link>
      </p>
    </div>
  );
};

export default SignupComponent;
