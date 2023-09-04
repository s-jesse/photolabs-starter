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
    showModal, // state being handled by reducer for photoModal
    selectedPhoto, // state being handled by reducer for selectPhoto object and photo parameter of handleClick
    handleClick, // onClick function dealing with selectPhoto dispatch and showModal dispatch
    toggleFav, // function used for toggling favIcon / badge and using favourites state and photoId parameter to handle dispatch action
    favourites, // state being handled by reducer thats an array that adds or removes photo id.
    photos, // photos being fetched from api 
    topics, // topics being fetched from api
    fetchByTopic // function that dynamically fetches photos based on topic id thats passed in as parameter and displays photos categorically 
  } = useApplicationData();

  return (
    <div className="App">
      <HomeRoute fetchByTopic={fetchByTopic} topics={topics} photos={photos} handleClick={handleClick} favourites={favourites} toggleFav={toggleFav} />
      {showModal && <PhotoDetailsModal handleClick={handleClick} selectedPhoto={selectedPhoto} toggleFav={toggleFav} favourites={favourites} />}

    </div>
  );
};

export default App;
