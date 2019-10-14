import axios from "axios";

export const getPhotos = async (phrase) => {
  try {

  const response = await axios.get("https://api.unsplash.com/search/photos", {
    params: {
      query: phrase
    },
    headers: {
      Authorization: "Client-ID 1a418dd2beeb4226e04b3724afcccc9c2bc89b368de147474c8603d493d6aedb"
    }
  });

  return response.data.results;
  } catch (e) {
    console.log(e);
  }
};

export const getPhoto = async (id) => {
  try {

    const response = await axios.get(`https://api.unsplash.com/photos/${id}`, {
      headers: {
        Authorization: "Client-ID 1a418dd2beeb4226e04b3724afcccc9c2bc89b368de147474c8603d493d6aedb"
      }
    });
    return response.data;
  } catch (e) {
    console.log(e);
  }
};


