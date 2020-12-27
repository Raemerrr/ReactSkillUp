import React, { useEffect, useState } from "react";
import "./app.css";
import Header from "./components/header";
import Contents from "./components/contents";
import Player from "./components/player";
import axios from "axios";

const App = () => {
  const apiKey = "AIzaSyAuXK_4hDVDbo1hNKXd4uoRxgH9mR46epU";
  const [contentData, setContentData] = useState([]);
  const [isLoading, setIsLoading] = useState(false);
  const [playerData, setPlayerData] = useState(null);
  const maxResults = 27;
  useEffect(() => {
    axios
      .get(
        `https://www.googleapis.com/youtube/v3/videos?key=${apiKey}&part=snippet&chart=mostPopular&maxResults=${maxResults}&regionCode=KR`
      )
      .then(function (response) {
        // handle success
        setIsLoading(true);
        setContentData(response.data.items);
      })
      .catch(function (error) {
        // handle error
        console.log(error);
      });
    // .then(function () {
    //   // always executed
    // });
  }, []);

  const handleActive = (data) => {
    console.log("active");
    setPlayerData(data);
  };

  const handleSearch = (search_text) => {
    axios
      .get(
        `https://www.googleapis.com/youtube/v3/search?key=${apiKey}&part=snippet&maxResults=${maxResults}&q=${search_text}`
      )
      .then(function (response) {
        // handle success
        setIsLoading(true);
        setContentData(response.data.items);
      })
      .catch(function (error) {
        // handle error
        console.log(error);
      });
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
