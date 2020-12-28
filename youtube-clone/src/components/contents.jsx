import React, { memo } from "react";
import Content from "./content";
import "../styles/contents.css";

const Contents = memo(({ isLoading, data, onActive }) => {
  return (
    <ul className="contents">
      {isLoading
        ? data.map((item) => {
            return <Content key={item.id} data={item} onActive={onActive} />;
          })
        : "로딩중"}
    </ul>
  );
});

export default Contents;
