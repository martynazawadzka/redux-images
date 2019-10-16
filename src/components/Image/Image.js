import React, { useState, useRef, useEffect } from "react";

import heartImage from "../../assets/heart.png";
import {
  CardWrapper,
  Description,
  DescriptionBox,
  Heart,
  ImageLink,
  LikesBar,
  Photo,
  ShadowBackground
} from "./style";

const ImageBlock = ({ image }) => {
  const [likes, addLike] = useState(image.likes);
  const [wasLiked, changeLikedStatus] = useState(false);
  const [spanNumber, setSpanNumber] = useState(0);
  const imgRef = useRef();

  const onHeartClick = () => {
    if (wasLiked) {
      return;
    }

    addLike(likes + 1);
    changeLikedStatus(true);
  };
  const autoHeight = () => {
    const { current } = imgRef;
    if (current.clientHeight) {
      const computedSpansNumber = Math.ceil(current.clientHeight / 10) + 5;
      setSpanNumber(computedSpansNumber);
    }
  };

  const { alt_description, urls, description, id } = image;

  return (
    <CardWrapper style={{ gridRowEnd: `span ${spanNumber}` }}>
      <ImageLink to={`/photo/${id}`}>
        <Photo
           ref={imgRef}
           alt={alt_description}
           src={urls.small}
           onLoad={autoHeight}
        />
        <DescriptionBox>
          <ShadowBackground/>
          <Description>
            {description ? description : "No description"}
          </Description>
        </DescriptionBox>
      </ImageLink>

      <LikesBar>
        <Heart src={heartImage} onClick={onHeartClick}/>
        <span>{likes}</span>
      </LikesBar>
    </CardWrapper>
  );
};

export default ImageBlock;
