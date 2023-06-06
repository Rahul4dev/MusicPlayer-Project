import React from 'react';

import { SpotifyWrapper } from '../../Components';

const LibraryComponent = () => {
  return (
    <SpotifyWrapper currActiveScreen={'Library'}>
      <div className="MainContent p-8 pt-2 overflow-auto">Library</div>
    </SpotifyWrapper>
  );
};

export default LibraryComponent;
