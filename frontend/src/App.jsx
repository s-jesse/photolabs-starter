import React, { useState } from 'react';
import './App.scss';
import HomeRoute from 'routes/HomeRoute';
import PhotoDetailsModal from 'routes/PhotoDetailsModal';
import useApplicationData from 'hooks/useApplicationData';

const sampleDataForPhotoListItem = {
  id: "1",
  location: {
    city: "Montreal",
    country: "Canada",
  },
  imageSource: `${process.env.PUBLIC_URL}/Image-1-Regular.jpeg`,
  username: "Joe Example",
  profile: `${process.env.PUBLIC_URL}/profile-1.jpg`,

};
const sampleDataForPhotoListItem2 = {
  id: "2",
  location: {
    city: "Montreal",
    country: "Canada",
  },
  imageSource: `${process.env.PUBLIC_URL}/Image-1-Regular.jpeg`,
  username: "Joe Example",
  profile: `${process.env.PUBLIC_URL}/profile-1.jpg`,
};
const sampleDataForPhotoListItem3 = {
  id: "3",
  location: {
    city: "Montreal",
    country: "Canada",
  },
  imageSource: `${process.env.PUBLIC_URL}/Image-1-Regular.jpeg`,
  username: "Joe Example",
  profile: `${process.env.PUBLIC_URL}/profile-1.jpg`,
};

// Note: Rendering a single component to build components in isolation
const App = () => {

  const {
    showModal,
    selectedPhoto,
    handleClick,
    toggleFav,
    favourites,
    photos,
    topics,
    fetchByTopic
  } = useApplicationData();

  return (
    <div className="App">
      <HomeRoute fetchByTopic={fetchByTopic} topics={topics} photos={photos} handleClick={handleClick} favourites={favourites} toggleFav={toggleFav} />
      {showModal && <PhotoDetailsModal handleClick={handleClick} selectedPhoto={selectedPhoto} toggleFav={toggleFav} favourites={favourites} />}

    </div>
  );
};

export default App;
