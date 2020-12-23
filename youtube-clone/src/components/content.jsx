import React from "react";
import "../styles/content.css";

const Content = (props) => {
  return (
    <li className="content">
      <img src={props.data.snippet.thumbnails.medium.url} alt={props.data.snippet.title}/>
      <p>{props.data.snippet.title}</p>
      <p>{props.data.snippet.channelTitle}</p>
      <div>
        <p>
          조회수:{props.data.statistics.viewCount}●
          {props.data.snippet.publishedAt}
        </p>
      </div>
    </li>
  );
};

export default Content;
