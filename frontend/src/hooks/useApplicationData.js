
import React, { useReducer } from "react";


export const ACTIONS = {
  FAV_PHOTO_ADDED: 'FAV_PHOTO_ADDED',
  FAV_PHOTO_REMOVED: 'FAV_PHOTO_REMOVED',
  SET_PHOTO_DATA: 'SET_PHOTO_DATA',
  SET_TOPIC_DATA: 'SET_TOPIC_DATA',
  SELECT_PHOTO: 'SELECT_PHOTO',
  DISPLAY_PHOTO_DETAILS: 'DISPLAY_PHOTO_DETAILS'
};
const intialState = {
  displayModal: false,
  favourites: [],
  selectPhoto: {}
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


    default:
      throw new Error(
        `Tried to reduce with unsupported action type: ${action.type}`
      );
  }
};

// commit original code before changes
// focus on initial state
// eg setting / updating favourites till works

const useApplicationData = () => {
  // const [showModal, setShowModal] = useState(false);
  // const [selectedPhoto, setSelectedPhoto] = useState({});

  const handleClick = (photo) => {
    //setSelectedPhoto(photo);
    dispatch({ type: ACTIONS.SELECT_PHOTO, payload: photo });
    //setShowModal(prev => !prev);
    dispatch({ type: ACTIONS.DISPLAY_PHOTO_DETAILS, payload: state.displayModal });


  };


  const [state, dispatch] = useReducer(reducer, intialState);
  console.log("useReducer state", state);
  //const [favourites, setFavourites] = useState([]);
  const toggleFav = (photoid) => { // function for using state that is add to an array of favourites
    if (state.favourites.includes(photoid)) { // taking state and seeing if it includes photo - id
      //const favIndex = favourites.findIndex((favourite) => favourite === photoid); // putting index of index of favourite array to var
      // setFavourites((prev) => [...prev.splice(favIndex, 1)]); // using prev data into spread array and removie index
      return dispatch({ type: ACTIONS.FAV_PHOTO_REMOVED, payload: photoid });
      console.log("toggleFav remove favourite state", state);
      return; // return to stop chain otherwise set code outside for favourties array to include photo
    }
    // setFavourites((prev) => [...prev, photoid]); // setState to take prev data into spread array and add in props.id into array instead of pushing
    dispatch({ type: ACTIONS.FAV_PHOTO_ADDED, payload: photoid });
    //setFavourites("FAV_PHOTO_ADDED");
    //console.log("toggleFav state", state);

  };

  return {
    showModal: state.displayModal,
    selectedPhoto: state.selectPhoto,
    handleClick,
    toggleFav,
    favourites: state.favourites
  };
};

export default useApplicationData;