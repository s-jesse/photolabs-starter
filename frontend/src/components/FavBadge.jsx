import React from 'react';
import FavIcon from './FavIcon';
import PhotoListItem from './PhotoListItem';
import '../styles/FavBadge.scss';

const FavBadge = ({ isFavPhotoExist, favouriteExists }) => {
  // let displayAlert = false;
  // if (favourites?.length > 0) {
  //   displayAlert = true;
  // }
  // how is it we are able to send selected to different parameter values????
  return ( 
    <div className='fav-badge'>
      <FavIcon displayAlert={favouriteExists} selected={true}/>
    </div>
  ) 
};

export default FavBadge;