import React, { useState } from "react";
import "../styles/PhotoListItem.scss";
import PhotoFavButton from "./PhotoFavButton";




const PhotoListItem = (props) => {


  const handleClick = () => {
    let selectedPhoto = {
      urls: props.urls,
      similar_photos: props.similar_photos,
      id: props.id

    };
    props.handleClick(selectedPhoto);
  };

  return (
    <div className="photo-list__item">
      <PhotoFavButton toggleFav={props.toggleFav} favourites={props.favourites} id={props.id} />
      <img className="photo-list__image " src={props.urls.regular} onClick={handleClick} />
      <div className="photo-list__user-details">
        <img className="photo-list__user-profile " src={props.user.profile} />
        <div className="photo-list__user-info">
          <span >{props.user.name} </span>

          <div className="photo-list__user-location">
            <p >{props.location.city}, {props.location.country} </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default PhotoListItem;
