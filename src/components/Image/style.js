import styled from "styled-components";
import {Link} from "react-router-dom";

export const CardWrapper = styled.div`
  position: relative;
  width: 100%;
  margin-bottom: 20px;
  text-align: center;
`;

export const ImageLink = styled(Link)`
  position: relative;
  display: block;
  overflow: hidden;
`;

export const Photo = styled.img`
  width: 100%;
  height: 100%;
  object-fit: cover;
`;

export const DescriptionBox = styled.div`
  position: absolute;
  top: 100%;
  width: 100%;
  height: 100%;
  transition: top 0.3s;
  
  ${ImageLink}:hover & {
  top: 0;
  }
`;

export const ShadowBackground = styled.div`
  width: 100%;
  height: 100%;
  background: gray;
  opacity: 0.8;
`;

export const Description = styled.p`
  position: absolute;
  top: 50%;
  left: 50%;
  transform: translate(-50%,-50%);
  width: 80%;
  color: #fff;
  text-align: center;
  overflow: hidden;
  white-space: nowrap;
  text-overflow: ellipsis;
`;

export const Heart = styled.img`
  width: 20px;
  height: 20px;
  margin-right: 5px;
  vertical-align: bottom;
  transition: transform 0.2s;
  :hover {
    cursor: pointer;
    transform: scale(1.5);
  }
`;

export const LikesBar = styled.p`
  margin-top: 10px;
`;

