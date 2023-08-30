import React from 'react';
import '../styles/TopNavigationBar.scss';
import FavIcon from './FavIcon';
import TopicList from './TopicList';
import FavBadge from './FavBadge';

const TopNavigation = (props) => {
  // should favbadge be red?
  return (
    <div className="top-nav-bar">
      <span className="top-nav-bar__logo">PhotoLabs</span>
      <TopicList fetchByTopic={props.fetchByTopic} topics={props.topics} />
      <FavBadge favouriteExists={props.favouriteExists} />
    </div>
  );
};

export default TopNavigation;