import React, { useState } from "react";

import heartImage from "../../assets/heart.png";
import { CardWrapper, Description, DescriptionBox, Heart, ImageLink, LikesBar, Photo, ShadowBackground } from "./style";


const ImageBlock = ({ image }) => {
  let [likes, addLike] = useState(image.likes);
  let [wasLiked, changeLikedStatus] = useState(false);

  const onHeartClick = () => {
    if (wasLiked) {
      return;
    }

    addLike(++likes);
    changeLikedStatus(true);
  };

  const { alt_description, urls, description, id, height, width } = image

  return (
    <CardWrapper>

      <ImageLink to={`/photo/${id}`}>
        <Photo
          alt={alt_description}
          src={urls.small}
        />
        <DescriptionBox>
          <ShadowBackground />
          <Description>{description ? description : "No description"}</Description>
        </DescriptionBox>
      </ImageLink>

      <LikesBar>
        <Heart src={heartImage} onClick={onHeartClick} />
        <span>{likes}</span>
      </LikesBar>

    </CardWrapper>
  );
};

export default ImageBlock;
