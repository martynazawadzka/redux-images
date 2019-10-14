import React from 'react';

import { ListWrapper } from "./style";
import Image from '../Image/Image';

const ImagesList = ({ images }) => {
  return (
    <ListWrapper >
      {images.map(image =>
          <Image
            image={image}
            key={image.id}
          />
        )
      }
    </ListWrapper>
  )
}

export default ImagesList;
