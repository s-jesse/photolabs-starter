import React, { useState, useReducer } from "react";
const useApplicationData = () => {
  const [showModal, setShowModal] = useState(false);
  const [selectedPhoto, setSelectedPhoto] = useState({});

  const handleClick = (photo) => {
    setSelectedPhoto(photo);
    setShowModal(prev => !prev);


  };

  const intialState = {
    displayedModal: false,
    favorites: []
  };
  // commit original code before changes
  // focus on initial state
  // eg setting / updating favourites till works

  export const ACTIONS = {
    FAV_PHOTO_ADDED: 'FAV_PHOTO_ADDED',
    FAV_PHOTO_REMOVED: 'FAV_PHOTO_REMOVED',
    SET_PHOTO_DATA: 'SET_PHOTO_DATA',
    SET_TOPIC_DATA: 'SET_TOPIC_DATA',
    SELECT_PHOTO: 'SELECT_PHOTO',
    DISPLAY_PHOTO_DETAILS: 'DISPLAY_PHOTO_DETAILS'
  };

  const reducer = (state, action) => {
    switch (action.type) {
      case FAV_PHOTO_ADDED:
        return { ...state, favourites: [...state.favourites, action.payload] };
        { /* insert all relevant actions as case statements*/ }
    }
      default:
throw new Error(
  `Tried to reduce with unsupported action type: ${action.type}`
);
    }
  }
const useApplicationData = () => {
  const [state, dispatch] = useReducer(reducer, initialState);
  const [favourites, setFavourites] = useState([]);
  const toggleFav = (photoid) => { // function for using state that is add to an array of favourites
    if (favourites.includes(photoid)) { // taking state and seeing if it includes photo - id
      const favIndex = favourites.findIndex((favourite) => favourite === photoid); // putting index of index of favourite array to var
      setFavourites((prev) => [...prev.splice(favIndex, 1)]); // using prev data into spread array and removie index
      return; // return to stop chain otherwise set code outside for favourties array to include photo
    }
    setFavourites((prev) => [...prev, photoid]); // setState to take prev data into spread array and add in props.id into array instead of pushing
    // dispatch({type: ACTION.FAV_PHOTO_ADDED, payload: photoid})
  };
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