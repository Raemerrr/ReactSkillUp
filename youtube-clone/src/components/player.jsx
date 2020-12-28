import React, { useState, useEffect, memo } from "react";
import "../styles/player.css";

export let player;
const Player = memo(({ data }) => {
  const [done, setDone] = useState(false);

  // 4. The API will call this function when the video player is ready.
  const onPlayerReady = (event) => {
    setDone(true);
    event.target.playVideo();
    console.log('done');
  };

  // 5. The API calls this function when the player's state changes.
  //    The function indicates that when playing a video (state=1),
  //    the player should play for six seconds and then stop.
  const onPlayerStateChange = (event) => {
    if (event.data === window.YT.PlayerState.PLAYING && !done) {
      setTimeout(stopVideo, 6000);
    }
  };

  function stopVideo() {
    player.stopVideo();
  }
  
  useEffect(() => {
    if (window.YT && data) {
      console.log("data.id : " + data.id);
      window.onYouTubeIframeAPIReady = () => {
        player = new window.YT.Player("player", {
          height: "360",
          width: "900",
          videoId: data.id,
          events: {
            onReady: onPlayerReady,
            onStateChange: onPlayerStateChange,
          },
        });
      };
    }
  });

  return (
    <ul className="document">
      <li>
        <div id="player"></div>
      </li>
      <li>
        <p>{data && data.snippet.title}</p>
      </li>
      <li>
        <p>{data && data.snippet.publishedAt}</p>
      </li>
      <li>
        <p>{data && data.snippet.channelTitle}</p>
      </li>
      <li>
        <p>{data && data.snippet.description}</p>
      </li>
    </ul>
  );
});

export default Player;
