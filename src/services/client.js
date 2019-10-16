import axios from 'axios';

export default axios.create({
  baseURL: "https://api.unsplash.com",
  headers: {
    Authorization: "Client-ID 1a418dd2beeb4226e04b3724afcccc9c2bc89b368de147474c8603d493d6aedb"
  }
});
