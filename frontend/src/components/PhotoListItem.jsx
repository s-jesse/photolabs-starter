import React, { useState } from "react";
import App from "App";
import "../styles/PhotoListItem.scss";
import PhotoFavButton from "./PhotoFavButton";
import HomeRoute from "routes/HomeRoute";
import PhotoDetailsModal from "routes/PhotoDetailsModal";



const PhotoListItem = (props) => {
  //function moved to homeroute and now takes in values as props sent from homeroute to photolist into here as props
  // where is it giving the values???
  // is main thing here from props photoid is to send the props.id with the function and state?
  const [imageState, setImageState] = useState("notclicked");
  console.log("prop.id in pohotolistitem photoitem:", props.id);
  console.log("props in pohotolistitem photoitem:", props);
  const handleClick = () => {
    console.log("props", props);
    setImageState("clicked"); // prev?
    console.log("prop.id in pohotolistitem photoitem:", props.id);
    console.log("props in pohotolistitem photoitem:", props);

    let selectedPhoto = {
      urls: props.urls,
      similar_photos: props.similar_photos,
      id: props.id

    };
    props.handleClick(selectedPhoto); // sending back to app

  };

  return (
    <div className="photo-list__item"> {/*props value change to props.value and being sent with global data*/}
      <PhotoFavButton toggleFav={props.toggleFav} favourites={props.favourites} id={props.id} /> {/*"return" button and pass down props toggleFav function, favourites state, id props to button*/}
      <img className="photo-list__image " src={props.urls.regular} onClick={handleClick} />
      <p><img className="photo-list__user-profile " src={props.user.profile} /></p>

      <h2 className="photo-list__user-info">{props.user.name}</h2>
      <div className="photo-list__user-details">
        <h2 className="photo-list__user-location">{props.location.city}, {props.location.country}</h2>
      </div>

    </div>
  );
};

export default PhotoListItem;
