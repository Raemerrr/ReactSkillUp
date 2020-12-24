import React, { useState, useEffect } from "react";
import "../styles/player.css";

export let player;
const Player = () => {
  const items = {
    id: "1gfBxtwic-0",
    snippet: {
      publishedAt: "2020-12-23T11:26:55Z",
      title:
        "[하이라이트] 신혜선, 수라간에서 🍜라면을? 청와대 셰프 영혼 수라간 접수!🔥 대왕대비 배종옥 취저! 저 세상 메뉴까지 #철인왕후 | Mr. Queen EP.4",
      description:
        "tvN 토일 드라마 #철인왕후 ★매주 토 일 밤 9시 본 방송★\n\n04:00 해장라면🍜 후루룩-\n05:51 청와대 메인 셰프 봉환 VS 대령숙수\n08:25 대왕대비 배종옥 취저! 저 세상 조리법 (+밤샘 정성)\n14:35 타락죽에 옹심이?! 부드러운 뇨끼💕\n16:56 번외) 대령숙수의 음~청 맛있는 음청\n\n#신혜선 #김정현 #배종옥 #김태우 #설인아 #나인우\n불의의 사고로 대한민국 대표 허세남 영혼이 깃들어 '저 세상 텐션'을 갖게 된 중전 김소용과 두 얼굴의 임금 철종 사이에서 벌어지는 영혼가출 스캔들",
      channelTitle: "tvN DRAMA",
    },
    statistics: {
      viewCount: "937600",
    },
  };
  let done = false;

  // 4. The API will call this function when the video player is ready.
  const onPlayerReady = (event) => {
    event.target.playVideo();
  };

  // 5. The API calls this function when the player's state changes.
  //    The function indicates that when playing a video (state=1),
  //    the player should play for six seconds and then stop.
  const onPlayerStateChange = (event) => {
    if (event.data === window.YT.PlayerState.PLAYING && !done) {
      setTimeout(stopVideo, 6000);
      done = true;
    }
  };

  function stopVideo() {
    player.stopVideo();
  }
  useEffect(() => {
    if (window.YT) {
      window.onYouTubeIframeAPIReady = () => {
        player = new window.YT.Player("player", {
          height: "360",
          width: "640",
          videoId: items.id,
          events: {
            onReady: onPlayerReady,
            onStateChange: onPlayerStateChange,
          },
        });
      };
    }
  });

  return (
    <>
      <div id="player"></div>
      {/* <p>{props.data.snippet.title}</p> */}
      <div className="document">
        <p>{items.snippet.title}</p>
        <div>
          <p>
            조회수:{items.statistics.viewCount}ㆍ{items.snippet.publishedAt}
          </p>
        </div>
        <p>{items.snippet.channelTitle}</p>
        <p>{items.snippet.description}</p>
      </div>
    </>
  );
};

export default Player;
