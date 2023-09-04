
import React, { useReducer, useEffect } from "react";


export const ACTIONS = {
  FAV_PHOTO_ADDED: 'FAV_PHOTO_ADDED',
  FAV_PHOTO_REMOVED: 'FAV_PHOTO_REMOVED',
  SET_PHOTO_DATA: 'SET_PHOTO_DATA',
  SET_TOPIC_DATA: 'SET_TOPIC_DATA',
  SELECT_PHOTO: 'SELECT_PHOTO',
  DISPLAY_PHOTO_DETAILS: 'DISPLAY_PHOTO_DETAILS',
  GET_PHOTOS_BY_TOPICS: 'GET_PHOTOS_BY_TOPICS'
};
const intialState = {
  displayModal: false,
  favourites: [],
  selectPhoto: {},
  photoData: [],
  topicData: []
};


const reducer = (state, action) => {
  switch (action.type) {
    case ACTIONS.FAV_PHOTO_ADDED:
      const currentState = { ...state };
      const currentFavourite = [...state.favourites];
      const currentValue = action.payload;
      const newState = { ...state, favourites: [...state.favourites, action.payload] };
      return newState;
      console.log("reducer FAVOURITES", favourites);
    case ACTIONS.FAV_PHOTO_REMOVED:
      const newFavourites = state.favourites.filter(favourite => favourite !== action.payload);

      return { ...state, favourites: newFavourites };

    case ACTIONS.DISPLAY_PHOTO_DETAILS:

      const displayModalValue = !action.payload;
      return { ...state, displayModal: displayModalValue };

    case ACTIONS.SELECT_PHOTO:

      return { ...state, selectPhoto: action.payload };

    case ACTIONS.SET_PHOTO_DATA:
      return { ...state, photoData: action.payload };

    case ACTIONS.SET_TOPIC_DATA:
      return { ...state, topicData: action.payload };

    case ACTIONS.GET_PHOTOS_BY_TOPICS:
      return { ...state, photoData: action.payload };

    default:
      throw new Error(
        `Tried to reduce with unsupported action type: ${action.type}`
      );
  }
};


const useApplicationData = () => {

  useEffect(() => {
    fetch('http://localhost:8001/api/photos')
      .then((response) => response.json())
      .then((data) => dispatch({ type: ACTIONS.SET_PHOTO_DATA, payload: data }));
    fetch('http://localhost:8001/api/topics')
      .then((response) => response.json())
      .then((data) => dispatch({ type: ACTIONS.SET_TOPIC_DATA, payload: data }));
  }, []);



  const handleClick = (photo) => {
    dispatch({ type: ACTIONS.SELECT_PHOTO, payload: photo });
    dispatch({ type: ACTIONS.DISPLAY_PHOTO_DETAILS, payload: state.displayModal });


  };

  const fetchByTopic = (topic_id) => {
    fetch(`http://localhost:8001/api/topics/photos/${topic_id}`)
      .then((response) => response.json())
      .then((data) => dispatch({ type: ACTIONS.GET_PHOTOS_BY_TOPICS, payload: data }));
  };

  const [state, dispatch] = useReducer(reducer, intialState);
  console.log("useReducer state", state);

  const toggleFav = (photoid) => {
    if (state.favourites.includes(photoid)) {
      return dispatch({ type: ACTIONS.FAV_PHOTO_REMOVED, payload: photoid });
    }
    dispatch({ type: ACTIONS.FAV_PHOTO_ADDED, payload: photoid });
  };

  return {
    showModal: state.displayModal,
    selectedPhoto: state.selectPhoto,
    handleClick,
    toggleFav,
    favourites: state.favourites,
    photos: state.photoData,
    topics: state.topicData,
    fetchByTopic
  };
};

export default useApplicationData;