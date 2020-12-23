import React, { useEffect, useState } from "react";
import "./app.css";
import Header from "./components/header";
import Content from "./components/content";
import axios from "axios";
// AIzaSyAuXK_4hDVDbo1hNKXd4uoRxgH9mR46epU

const App = () => {
  const apiKey = "AIzaSyAuXK_4hDVDbo1hNKXd4uoRxgH9mR46epU";
  const [contentData, setContentData] = useState([]);
  const [isLoading, setIsLoading] = useState(false);
  useEffect(() => {
    axios
      .get(
        `https://www.googleapis.com/youtube/v3/videos?key=${apiKey}&part=snippet,statistics&chart=mostPopular&maxResults=25&regionCode=KR`
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
    <div>
      <Header />
      <ul>
        {isLoading
          ? contentData.map((item) => {
              return <Content key={item.id} data={item} />;
            })
          : "로딩중"}
      </ul>
    </div>
  );
};

export default App;
