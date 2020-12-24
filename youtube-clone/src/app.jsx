import React, { useEffect, useState } from "react";
import "./app.css";
import Header from "./components/header";
import Contents from "./components/contents";
import Player from "./components/player";
import axios from "axios";
// AIzaSyAuXK_4hDVDbo1hNKXd4uoRxgH9mR46epU

const App = () => {
  const apiKey = "AIzaSyAuXK_4hDVDbo1hNKXd4uoRxgH9mR46epU";
  const [contentData, setContentData] = useState([]);
  const [isLoading, setIsLoading] = useState(false);
  useEffect(() => {
    axios
      .get(
        `https://www.googleapis.com/youtube/v3/videos?key=${apiKey}&part=snippet,statistics&chart=mostPopular&maxResults=28&regionCode=KR`
      )
      .then(function (response) {
        // handle success
        setContentData(response.data.items);
        setIsLoading(true);
      })
      .catch(function (error) {
        // handle error
        console.log(error);
      })
      .then(function () {
        // always executed
      });
  }, []);

  return (
    <>
      <Header />
      <div className="viewer">
        <Player />
        <Contents isLoading={isLoading} data={contentData}/>
      </div>
    </>
  );
};

export default App;
