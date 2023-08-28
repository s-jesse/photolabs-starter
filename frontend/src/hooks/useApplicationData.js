import React, { useState } from "react";
const useApplicationData = () => {
  const [showModal, setShowModal] = useState(false);
  const [selectedPhoto, setSelectedPhoto] = useState({});

  const handleClick = (photo) => {
    setSelectedPhoto(photo);
    setShowModal(prev => !prev);


  };

  const [favourites, setFavourites] = useState([]);
  const toggleFav = (photoid) => { // function for using state that is add to an array of favourites
    if (favourites.includes(photoid)) { // taking state and seeing if it includes photo - id
      const favIndex = favourites.findIndex((favourite) => favourite === photoid); // putting index of index of favourite array to var
      setFavourites((prev) => [...prev.splice(favIndex, 1)]); // using prev data into spread array and removie index
      return; // return to stop chain otherwise set code outside for favourties array to include photo
    }
    setFavourites((prev) => [...prev, photoid]); // setState to take prev data into spread array and add in props.id into array instead of pushing

  };
  return {
    showModal,
    setShowModal,
    selectedPhoto,
    setSelectedPhoto,
    handleClick,
    toggleFav,
    favourites,
    setFavourites
  };
};

export default useApplicationData;