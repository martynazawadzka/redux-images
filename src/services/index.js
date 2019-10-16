import client from './client';

export const getPhotos = async (phrase) => {
  try {
    const response = await client.get("/search/photos", {
      params: {
        query: phrase
      },
  });

  return response.data.results;
  } catch (e) {
    console.log(e);
  }
};

export const getPhoto = async (id) => {
  try {
    const response = await client.get(`/photos/${id}`, {

    });
    return response.data;
  } catch (e) {
    console.log(e);
  }
};


