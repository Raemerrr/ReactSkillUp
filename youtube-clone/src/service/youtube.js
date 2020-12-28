import axios from "axios";

class Youtube {
  constructor(key) {
    this.key = key;
    this.maxResults = 27;
  }

  async mostPopular() {
    try {
      const response = await axios.get(
        `https://www.googleapis.com/youtube/v3/videos?key=${this.key}&part=snippet&chart=mostPopular&maxResults=${this.maxResults}&regionCode=KR`
      );
      return response.data.items;
    } catch (error) {
      // handle error
      console.log(error);
    }
  }

  async searchVideos(query) {
    try {
      const response = await axios.get(
        `https://www.googleapis.com/youtube/v3/search?key=${this.key}&part=snippet&maxResults=${this.maxResults}&q=${query}&type=video`
      );
      return response.data.items;
    } catch (error) {
      // handle error
      console.log(error);
    }
  }
}

export default Youtube;
