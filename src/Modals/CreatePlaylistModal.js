import React, { useState } from 'react';
import { makeAuthenticatedPOSTRequest } from '../utils/serverHelper';

import { TextInput } from '../Components';

const CreatePlaylistModal = ({ closeModal }) => {
  const [playlistName, setPlaylistName] = useState('');
  const [playlistThumbnail, setPlaylistThumbnail] = useState('');

  const createPlaylist = async () => {
    const response = await makeAuthenticatedPOSTRequest('/playlist/create', {
      name: playlistName,
      thumbnail: playlistThumbnail,
      songs: [],
    });
    if (response.id) {
      closeModal();
    }
  };
  console.log('overlay working');
  return (
    <div
      className="absolute bg-black w-screen h-screen bg-opacity-50 flex justify-center items-center "
      onClick={closeModal}
    >
      <div
        className="w-1/3 bg-gray-700 p-4 rounded-md text-black"
        onClick={(e) => {
          e.stopPropagation();
        }}
      >
        <div className="text-white mb-5 font-semibold text-lg">
          Create Playlist
        </div>
        <div className="space-y-4 flex flex-col justify-center items-center">
          <TextInput
            type={'text'}
            label={'Name'}
            placeholder={'Describe your Song'}
            value={playlistName}
            setValue={setPlaylistName}
          />
          <TextInput
            type={'text'}
            label={'Thumbnail'}
            placeholder={'Thumbnail'}
            value={playlistThumbnail}
            setValue={setPlaylistThumbnail}
          />
          <div
            className="bg-white w-1/3 cursor-pointer rounded flex font-semibold justify-center items-center py-3 mt-4"
            onClick={createPlaylist}
          >
            Create
          </div>
        </div>
      </div>
    </div>
  );
};

export default CreatePlaylistModal;
