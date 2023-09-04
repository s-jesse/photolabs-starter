import React, { useCallback, useState } from 'react';

import FavIcon from './FavIcon';
import '../styles/PhotoFavButton.scss';


function PhotoFavButton(props) {
  const selected = props.favourites.includes(props.id);

  const handleClick = function() {
    props.toggleFav(props.id);
  };
  return (
    <div className="photo-list__fav-icon" onClick={handleClick}>
      <div className="photo-list__fav-icon-svg">
        <FavIcon selected={selected} /> {/* sending props with selected variable to send for parameter("selected") to give desired effect*/}
      </div>
    </div>
  );
}

export default PhotoFavButton;