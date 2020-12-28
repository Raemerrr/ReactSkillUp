import React, { useEffect, useState, useCallback } from "react";
import "./app.css";
import Header from "./components/header";
import Contents from "./components/contents";
import Player from "./components/player";

const App = ({ youtube }) => {
  const [contentData, setContentData] = useState([]);
  const [isLoading, setIsLoading] = useState(false);
  const [playerData, setPlayerData] = useState(null);

  useEffect(() => {
    setIsLoading(true);
    // setContentData(youtube.mostPopular().then());
    youtube
      .mostPopular() //
      .then((videos) => setContentData(videos));
  }, [youtube]);

  const handleActive = useCallback((data) => {
    setPlayerData(data);
    window.scrollTo(0, 0);
  }, []);

  const handleSearch = useCallback(
    (search_text) => {
      youtube
        .searchVideos(search_text) //
        .then((videos) => {
          setContentData(videos);
          setPlayerData(null);
        });
      window.scrollTo(0, 0);
    },
    [youtube]
  );

  return (
    <>
      <Header onSearch={handleSearch} />
      <section className="viewer">
        {playerData && (
          <div className="detail">
            <Player data={playerData} />
          </div>
        )}
        <div className="list">
          <Contents
            isLoading={isLoading}
            data={contentData}
            onActive={handleActive}
          />
        </div>
      </section>
    </>
  );
};

export default App;
