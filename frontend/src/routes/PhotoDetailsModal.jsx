import React, { useState, useEffect } from 'react';
import '../styles/PhotoDetailsModal.scss';
import closeSymbol from '../assets/closeSymbol.svg';
// import PhotoFavButton from 'components/PhotoFavButton';
import PhotoListItem from 'components/PhotoListItem';
import FavIcon from 'components/FavIcon';
import PhotoFavButton from 'components/PhotoFavButton';

const PhotoDetailsModal = (props) => {

  const handleClick = () => {
    console.log("working");
    props.handleClick();
  };
  // const similarPhotoLibrary = () => {
  let similarImages = [];
  for (let photoItem in props.selectedPhoto.similar_photos) {
    similarImages.push(props.selectedPhoto.similar_photos[photoItem].urls.regular);
    // let similarImages = photoItem;
    console.log("photoitem loop in ", similarImages);
  }


  console.log("props.favourites in photoModal", props.favourites);
  console.log("props.id in photoModal", props.id);
  console.log("props.selectedPhoto in photoModal", props.selectedPhoto);


  //   return similarImages
  // }

  // Object.keys(myObject).map

  return (
    <div className="photo-details-modal">
      <PhotoFavButton toggleFav={props.toggleFav} favourites={props.favourites} id={props.selectedPhoto.id} />

      <button className="photo-details-modal__close-button" onClick={handleClick}>
        <img src={closeSymbol} alt="close symbol" />
        <img className='photo-details-modal--image' src={props.selectedPhoto.urls.full} />
        {console.log("similar images", similarImages)}
        <h3 className='photo-details-modal__header'>Similar Photos</h3>
        {similarImages.map(photoItems => (
          <img className='photo-details-modal__images' src={photoItems} key={photoItems.id} />))}
        {/* <img src={props.selectedPhoto.similar_photos.photo3.urls.regular}/>
        <img src={props.selectedPhoto.similar_photos.photo4.urls.regular}/>
        <img src={props.selectedPhoto.similar_photos.photo5.urls.regular}/> */}


      </button>
    </div>
  );


};

export default PhotoDetailsModal;
