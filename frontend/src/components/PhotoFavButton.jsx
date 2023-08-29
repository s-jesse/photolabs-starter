import React, { useCallback, useState } from 'react';

import FavIcon from './FavIcon';
import '../styles/PhotoFavButton.scss';
import PhotoDetailsModal from 'routes/PhotoDetailsModal';
import PhotoListItem from './PhotoListItem';

function PhotoFavButton(props) {
  const selected = props.favourites.includes(props.id); // storing props of favourits - state / id from photolistitem to check if selected 
  // if (Number(props.id) === 2) {
  //   console.log("select", selected);
  //   console.log("props.id", props.id);
  // }
  console.log("props", props);
  console.log("select", selected);
  console.log("props.id", props.id);
  console.log("favourites", props.favourites);

  const handleClick = function() {
    props.toggleFav(props.id); //is this / onclick button where everything meets to pass this value to homeroute???? 
  };
  return (
    <div className="photo-list__fav-icon" onClick={handleClick}> {/* add onclick to parent div and give it "prop value" of toggleFav function instead of call back */}
      <div className="photo-list__fav-icon-svg">
        <FavIcon selected={selected} /> {/* giving props of selected var to send for parameter("prop") to give desired effect*/}
      </div>
    </div>
  );
}

export default PhotoFavButton;