import React, { memo } from "react";
import "../styles/player.css";

export let player;
const Player = memo(({ data, data: { snippet } }) => {
  return (
    <section className="document">
      <iframe
        id="player"
        title="youtube video player"
        type="text/html"
        width="100%"
        height="500"
        src={`http://www.youtube.com/embed/${data.id}`}
        frameBorder="0"
      ></iframe>
      <h2>{snippet.title}</h2>
      <h3>{snippet.publishedAt}</h3>
      <p>{snippet.channelTitle}</p>
      <pre>{snippet.description}</pre>
    </section>
  );
});

export default Player;
