import React from "react";

import "../styles/TopicListItem.scss";

const sampleDataForTopicListItem = {
  id: "1",
  slug: "topic-1",
  label: "Nature",
};


const TopicListItem = (props) => {
  const handleClick = () => {
    //console.log("props.id", props.id);
    props.fetchByTopic(props.id);
  };
  return (
    <div className="topic-list__item" onClick={handleClick} >
      <span>{props.title}</span>
    </div>
  );
};

export default TopicListItem;
