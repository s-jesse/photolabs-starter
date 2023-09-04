import React from 'react';
import '../styles/HomeRoute.scss';
import TopNavigation from 'components/TopNavigationBar';
import PhotoList from 'components/PhotoList';


const HomeRoute = (props) => {

  return (
    <div className="home-route">
      <TopNavigation fetchByTopic={props.fetchByTopic} topics={props.topics} favouriteExists={props.favourites.length > 0} actions={props.ACTIONS} /> {/* pass value from favourites state set to if/length to topNav as prop */}
      <PhotoList photos={props.photos} toggleFav={props.toggleFav} favourites={props.favourites} handleClick={props.handleClick} /> {/* pass toggleFav function and favourite state as prop/value */}
    </div>
  );
};

export default HomeRoute;
