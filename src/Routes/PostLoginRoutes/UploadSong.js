import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';

import {
  SpotifyWrapper,
  CloudinaryUploadButton,
  TextInput,
  Button,
} from '../../Components';

import { makeAuthenticatedPOSTRequest } from '../../utils/serverHelper';

const UploadSong = () => {
  const [name, setName] = useState('');
  const [thumbnail, setThumbnail] = useState('');
  const [playlistUrl, setPlaylistUrl] = useState('');
  const [uploadedSongName, setUploadedSongName] = useState();
  const navigate = useNavigate();

  const submitSongHandler = async () => {
    const data = { name, thumbnail, track: playlistUrl };
    const response = await makeAuthenticatedPOSTRequest('/song/create', data);
    if (response.err) {
      alert('Error creating song');
      return;
    }
    alert('Song Successfully created');
    navigate('/home');
  };

  return (
    <SpotifyWrapper>
      <div className="MainContent p-8 pt-0 overflow-auto">
        <div className="text-2xl font-semibold mb-5 mt-8">Upload your Song</div>
        <div className="w-2/3 flex space-x-3">
          <div className="w-1/2">
            <TextInput
              type={'text'}
              label={'Song Name'}
              placeholder={'Song Name'}
              className={''}
              value={name}
              setValue={setName}
            />
          </div>
          <div className="w-1/2">
            <TextInput
              type={'text'}
              label={'Thumbnail URL'}
              placeholder={'Thumbnail'}
              className={''}
              value={thumbnail}
              setValue={setThumbnail}
            />
          </div>
        </div>
        <div className="w-2/3 mt-4">
          {playlistUrl && (
            <TextInput
              type={'text'}
              label={'Song Description'}
              placeholder={'Describe your Song'}
              className={''}
              value={playlistUrl}
              setValue={setPlaylistUrl}
            />
          )}
        </div>
      </div>
      <div className="ml-8">
        {uploadedSongName ? (
          <div className="bg-white text-black rounded-full p-3">
            {uploadedSongName.substring(0, 30)}...
          </div>
        ) : (
          <CloudinaryUploadButton
            setName={setUploadedSongName}
            setUrl={setPlaylistUrl}
          />
        )}
      </div>
      <div className="p-4">
        {uploadedSongName && (
          <Button
            buttonName={'Submit Song'}
            className={'ml-4 w-40 bg-slate-600'}
            onClick={submitSongHandler}
          />
        )}
      </div>
    </SpotifyWrapper>
  );
};

export default UploadSong;
