import React, { memo } from "react";
import Content from "./content";
import "../styles/contents.css";

const Contents = memo(({ isLoading, data, onActive }) => {
  return (
    <ul className="contents">
      {isLoading
        ? data.map((item) => {
            let id = Date.now();
            //채널에 대한 처리를 하긴 했지만 현재 프로젝트에서는 비디오만 받기로 했다.
            if (item.kind === "youtube#searchResult") {
              id =
                item.id.kind === "youtube#channel"
                  ? item.id.channelId
                  : item.id.videoId;
            } else {
              id = item.id;
            }
            return <Content key={id} data={item} onActive={onActive} />;
          })
        : "로딩중"}
    </ul>
  );
});

export default Contents;
