import React from 'react';
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
      <img className="photo-details-modal__close-button" src={closeSymbol} alt="close symbol" onClick={handleClick} />
      <div className='photo-details-modal--image'>
        <PhotoFavButton toggleFav={props.toggleFav} favourites={props.favourites} id={props.selectedPhoto.id} />
        <img src={props.selectedPhoto.urls.full} />
      </div>
      <h3 className='photo-details-modal__header'>Similar Photos</h3>
      <div className='photo-details-modal__images'>
        {similarImages.map(photoItems => (
          <img src={photoItems} key={photoItems.id} height={500} width={500} />))}
      </div>
    </div>
  );


};

export default PhotoDetailsModal;
