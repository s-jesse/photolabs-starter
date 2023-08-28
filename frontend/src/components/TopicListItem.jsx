import React from "react";

import "../styles/TopicListItem.scss";

const sampleDataForTopicListItem = {
  id: "1",
  slug: "topic-1",
  label: "Nature",
};

const TopicListItem = (props) => {
  return (
    <div className="topic-list__item" >
       <h2>{props.slug} {props.title}</h2>
    </div>
  );
};

export default TopicListItem;
