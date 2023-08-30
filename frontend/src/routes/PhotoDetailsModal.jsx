import React, { useState, useEffect } from 'react';
import '../styles/PhotoDetailsModal.scss';
import closeSymbol from '../assets/closeSymbol.svg';
import PhotoFavButton from 'components/PhotoFavButton';

const PhotoDetailsModal = (props) => {

  const handleClick = () => {
    props.handleClick();
  };



  let similarImages = [];
  for (let photoItem in props.selectedPhoto.similar_photos) {
    similarImages.push(props.selectedPhoto.similar_photos[photoItem].urls.regular);
  }



  return (
    <div className="photo-details-modal">
      <PhotoFavButton toggleFav={props.toggleFav} favourites={props.favourites} id={props.selectedPhoto.id} />

      <button className="photo-details-modal__close-button" >
        <img src={closeSymbol} alt="close symbol" onClick={handleClick} />
        <img className='photo-details-modal--image' src={props.selectedPhoto.urls.full} />
        <h3 className='photo-details-modal__header'>Similar Photos</h3>
        {similarImages.map(photoItems => (
          <img className='photo-details-modal__images' src={photoItems} key={photoItems.id} />))}
      </button>
    </div>
  );


};

export default PhotoDetailsModal;
