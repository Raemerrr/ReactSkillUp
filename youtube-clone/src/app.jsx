import React, { useEffect, useState } from "react";
import "./app.css";
import Header from "./components/header";
import Contents from "./components/contents";
import Player from "./components/player";

const App = ({youtube}) => {
  const [contentData, setContentData] = useState([]);
  const [isLoading, setIsLoading] = useState(false);
  const [playerData, setPlayerData] = useState(null);

  useEffect(() => {
    setIsLoading(true);
    // setContentData(youtube.mostPopular().then());
    youtube
      .mostPopular() //
      .then(videos => setContentData(videos));
  }, []);

  const handleActive = (data) => {
    console.log("active");
    setPlayerData(data);
  };

  const handleSearch = (search_text) => {
    youtube
      .searchVideos(search_text) //
      .then((videos) => setContentData(videos));
  };

  return (
    <>
      <Header onSearch={handleSearch} />
      <div className="viewer">
        <Player data={playerData}/>
        <Contents
          isLoading={isLoading}
          data={contentData}
          onActive={handleActive}
        />
      </div>
    </>
  );
};

export default App;
