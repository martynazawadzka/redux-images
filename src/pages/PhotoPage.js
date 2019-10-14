import React, { useEffect } from "react";

import { getPhoto } from "../services/index";

const PhotoPage = ({match}) => {
  useEffect(() => {
      (async () => {
        console.log(match.params.id);
        const id = match.params.id;

        const photo = await getPhoto(id);
        console.log(photo);
      })();
    }, [match.params.id]
  );

  // useEffect(() => {
  //     (async () => {
  //       const photos = await getPhotos("random");
  //       console.log(photos);
  //     })();
  //   }, []
  // );


  return (
    <main>aaa</main>
  );
};

export default PhotoPage;
