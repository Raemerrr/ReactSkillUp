import axios from "axios";

class Youtube {
  constructor(key) {
    this.client = axios.create({
      baseURL: "https://www.googleapis.com/youtube/v3",
      params: {
        key: key,
        maxResults: 28,
        part: "snippet",
      },
    });
  }

  async mostPopular() {
    try {
      const response = await this.client.get("videos", {
        params: {
          chart: "mostPopular",
          regionCode: "KR",
        },
      });
      return response.data.items;
    } catch (error) {
      // handle error
      console.log(error);
    }
  }

  async searchVideos(query) {
    try {
      const response = await this.client.get("search", {
        params: {
          q: query,
          type: "video",
        },
      });
      return response.data.items.map((item) => ({
        ...item,
        id: item.id.videoId,
      }));
    } catch (error) {
      // handle error
      console.log(error);
    }
  }
}

export default Youtube;
