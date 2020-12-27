import React, { memo } from "react";
import "../styles/content.css";
const Content = memo(({ data, onActive }) => {
  return (
    <li className="content">
      <a href="#" onClick={()=>{
        onActive(data);
      }}>
        <img
          src={data.snippet.thumbnails.medium.url}
          alt={data.snippet.title}
        />
        <p>{data.snippet.title}</p>
        <p>{data.snippet.channelTitle}</p>
        <p>{data.snippet.publishedAt}</p>
      </a>
    </li>
  );
});

export default Content;
