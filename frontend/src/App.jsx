import React, { useState } from 'react';
import FavIcon from 'components/FavIcon';
import PhotoList from './components/PhotoList';
import TopicList from 'components/TopicList';
import './App.scss';
import TopNavigation from 'components/TopNavigationBar';
import HomeRoute from 'routes/HomeRoute';
import PhotoDetailsModal from 'routes/PhotoDetailsModal';
import useApplicationData from 'hooks/useApplicationData';
// import FavBadge from 'components/FavBadge';

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
  // const [showModal, setShowModal] = useState(false);
  // const [selectedPhoto, setSelectedPhoto] = useState({});

  // const handleClick = (photo) => {
  //   setSelectedPhoto(photo);
  //   setShowModal(prev => !prev);


  // };

  // const [favourites, setFavourites] = useState([]);
  // const toggleFav = (photoid) => { // function for using state that is add to an array of favourites
  //   if (favourites.includes(photoid)) { // taking state and seeing if it includes photo - id
  //     const favIndex = favourites.findIndex((favourite) => favourite === photoid); // putting index of index of favourite array to var
  //     setFavourites((prev) => [...prev.splice(favIndex, 1)]); // using prev data into spread array and removie index
  //     return; // return to stop chain otherwise set code outside for favourties array to include photo
  //   }
  //   setFavourites((prev) => [...prev, photoid]); // setState to take prev data into spread array and add in props.id into array instead of pushing
  // };
  const {
    showModal,
    setShowModal,
    selectedPhoto,
    setSelectedPhoto,
    handleClick,
    toggleFav,
    favourites,
    setFavourites
  } = useApplicationData();

  // const photoList = [sampleDataForPhotoListItem, sampleDataForPhotoListItem2, sampleDataForPhotoListItem3];
  return (
    <div className="App">
      {/* <TopNavigation/>
      <PhotoList/> */}
      <HomeRoute handleClick={handleClick} favourites={favourites} toggleFav={toggleFav} />
      {showModal && <PhotoDetailsModal handleClick={handleClick} selectedPhoto={selectedPhoto} toggleFav={toggleFav} favourites={favourites} />}

    </div>
  );
};

export default App;
