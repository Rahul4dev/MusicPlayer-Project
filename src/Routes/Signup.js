import React from 'react';
import { Icon } from '@iconify/react';
import { Link } from 'react-router-dom';

import SocialButtons from '../Components/Shared/SocialButtons';
import TextInput from '../Components/Shared/TextInput';

const SignupComponent = () => {
  return (
    <div className="w-full h-full flex flex-col items-center overflow-x-auto ">
      <div className="logo mt-4 w-full flex justify-center">
        <Icon icon="logos:spotify" width="120" height="60" />
      </div>
      {/* Here we place Social Buttons */}
      <div className="socialBtn sm:w-1/2 w-1/3 py-5 flex items-center justify-center flex-col">
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
      <div className="flex flex-row justify-center items-center w-1/2">
        <div className="border-solid border border-gray-300 w-1/2" />
        <p className="m-2 font-medium text-gray-500">Or</p>
        <div className="border-solid border border-gray-300 w-1/2" />
      </div>
      <div className="inputRegion sm:w-1/2 w-1/3 py-5">
        {/* Inputs of email and password and sign-in button */}
        <TextInput
          type="email"
          label="What's you email?"
          placeholder="Enter your email."
          className="mt-6 font-semibold"
        />
        <p className="text-[14px] mt-0 p-0 underline text-green-700">
          Use phone number instead.
        </p>

        <TextInput
          type="password"
          label="create a password"
          placeholder="Create a password."
          className="mt-6 font-semibold"
        />
        <TextInput
          type="text"
          label="What should we call you?"
          placeholder="Enter a profile name."
          className="mt-6 font-semibold"
        />
        <p className="text-[14px] mt-0 p-0">This appears on your profile.</p>
      </div>

      <div className="w-1/2 flex item-center justify-center m-8">
        <button className="bg-green-500 font-semibold p-3 px-10 rounded-full">
          Sign up
        </button>
      </div>
      <div className="border-solid border border-gray-300 w-1/2 " />
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
