import React from "react";
import TopicListItem from "./TopicListItem";
import "../styles/TopicList.scss";

const sampleDataForTopicList = [
  {
    id: "1",
    slug: "topic-1",
    title: "Nature",
  },
  {
    id: "2",
    slug: "topic-2",
    title: "Travel",
  },
  {
    id: "3",
    slug: "topic-3",
    title: "People",
  },
];

const TopicList = (props) => {
  // why no  braces / curly  brackets for topicLIst map
  // should it hover?
  return (
    <div className="top-nav-bar__topic-list">
    {/* {sampleDataForTopicList.map((topicList) => {
    return(
    <ul key={topicList.id}>
        <h2>{topicList.slug} {topicList.title}</h2>
    </ul>
    )
  }) } */}
  {props.topics.map(topicListItems => 
  <TopicListItem {...topicListItems} key={topicListItems.id} />
  ) }
    </div>
  );
};

export default TopicList;
