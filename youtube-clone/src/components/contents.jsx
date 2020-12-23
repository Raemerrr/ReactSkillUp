import React, { memo } from "react";
import Content from "./content";
import "../styles/contents.css";

const Contents = memo(({ isLoading, data }) => {
  return (
    <ul className="contents">
      {isLoading
        ? data.map((item) => {
            return <Content key={item.id} data={item} />;
          })
        : "로딩중"}
    </ul>
  );
});

export default Contents;
