import React, {useState} from 'react';
import App from 'App';
import '../styles/HomeRoute.scss';
import TopNavigation from 'components/TopNavigationBar';
import PhotoList from 'components/PhotoList';
import PhotoListItem from 'components/PhotoListItem';
import photos from 'mocks/photos';
import topics from 'mocks/topics';
import PhotoDetailsModal from './PhotoDetailsModal';

// bring in toggleFav function from photolistitem into homeroute and state to set globally 
// change previous props.id to photoid given the same as paremeter to recieve info from child / component?

// how is photoId getting its parameter value through this pass down through the components??? explain photoId in setFavourties
// what is favourites value/state through the journey through the components? what is it when being passed ot photolist here
// how is toggleFav logic causing the toggle in different components
// is it props.photos in photolist because were sending multiple props?

const HomeRoute = (props) => {
  // const [favourites, setFavourites] = useState([])
  // const [favourites, setFavourites] = useState([])
  // const toggleFav = (photoid) => { // function for using state that is add to an array of favourites
  //     if (favourites.includes(photoid)) { // taking state and seeing if it includes photo - id
  //     const favIndex = favourites.findIndex((favourite)=> favourite === photoid) // putting index of index of favourite array to var
  //       setFavourites((prev)=> [...prev.splice(favIndex, 1)]) // using prev data into spread array and removie index
  //       return // return to stop chain otherwise set code outside for favourties array to include photo
  //     } 
  //     setFavourites((prev)=> [...prev, photoid]) // setState to take prev data into spread array and add in props.id into array instead of pushing
  // } 
  return (
    <div className="home-route">
    <TopNavigation topics={topics} favouriteExists={props.favourites.length > 0}/> {/* pass value from favourites state set to if/length to topNav as prop */}
    <PhotoList photos={photos} toggleFav={props.toggleFav} favourites={props.favourites} handleClick={props.handleClick}/> {/* pass toggleFav function and favourite state as prop/value */}
    </div>
  );
};

export default HomeRoute;
