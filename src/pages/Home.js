import React, { useEffect, useState } from "react";
import styled from "styled-components";

import SearchBar from "../components/SearchBar/SearchBar";
import ImagesList from "../components/ImagesList/ImagesList";

import { getPhotos } from "../services";

const AppWrapper = styled.div`
max-width: 1170px;
margin: 20px auto;
`;

const Home = () => {
  const [images, setImages] = useState([]);

  useEffect(() => {
      (async () => {
        const photos = await getPhotos("random");
        setImages(photos);
      })();
    }, []
  );

  useEffect(() => {
    }, [images]
  );

  const onSearchSubmit = async (text) => {
    const photos = await getPhotos(text);

    console.log(photos)
    setImages(photos);
  };

  return (
    <AppWrapper>
      <SearchBar onSubmit={onSearchSubmit} />
      <ImagesList images={images} />
    </AppWrapper>
  );
};

export default Home;
