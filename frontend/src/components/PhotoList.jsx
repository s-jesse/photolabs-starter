import React from "react";
import PhotoListItem from "./PhotoListItem";
import "../styles/PhotoList.scss";
const sampleDataForPhotoList = [
  {
    id: "1",
    location: {
      city: "Montreal",
      country: "Canada",
    },
    urls: {
      full: `${process.env.PUBLIC_URL}/Image-1-Full.jpeg`,
      regular: `${process.env.PUBLIC_URL}/Image-1-Regular.jpeg`,
    },
    user: {
      id: "1",
      username: "exampleuser",
      name: "Joe Example",
      profile: `${process.env.PUBLIC_URL}/profile-1.jpg`,
    },
  },
  {
    id: "2",
    location: {
      city: "Toronto",
      country: "Canada",
    },
    urls: {
      full: `${process.env.PUBLIC_URL}/Image-2-Full.jpeg`,
      regular: `${process.env.PUBLIC_URL}/Image-2-Regular.jpeg`,
    },
    user: {
      id: "2",
      username: "exampleuser",
      name: "Joe Example",
      profile: `${process.env.PUBLIC_URL}/profile-1.jpg`,
    },
  },
  {
    id: "3",
    location: {
      city: "Ottawa",
      country: "Canada",
    },
    urls: {
      full: `${process.env.PUBLIC_URL}/Image-3-Full.jpeg`,
      regular: `${process.env.PUBLIC_URL}/Image-3-Regular.jpeg`,
    },
    user: {
      id: "3",
      username: "exampleuser",
      name: "Joe Example",
      profile: `${process.env.PUBLIC_URL}/profile-1.jpg`,
    },
  },
];

const PhotoList = (props) => {
  // props is now getting togglefav function / favourite state from homeroute 
  // it is then sending key / photoitem.id value , toggleFav now set to props.togglefav following same pattern as photos
  // maping through photo item and sending everyhing with favourties state and all the above to photolistitem function as props

  console.log("favourites inside photolist", props.favourites);

  // why is there 9 photos in display in grid layout?
  // what is meant by cleanup any empty props
  // why is there no hover
  return (
    <div className="photo-list">

      {props.photos.map(photoItem => ( // change to props.photos because photos being passed down from homeroute
        <PhotoListItem {...photoItem} key={photoItem.id} toggleFav={props.toggleFav} favourites={props.favourites} handleClick={props.handleClick} />
      ))}
    </div>
  );
};

{/* <div  className="photo-list">
{sampleDataForPhotoList.map((photoList) => {
return <ul key={photoList.id}> <li>{photoList}</li></ul>
}) }
</div> */}
export default PhotoList;
