import React from "react";
import styled from "styled-components";
import * as images from "../assets/profile";
import AspectRatioBlock from "../assets/profile/thumbnails/& Gallery/AspectRatioBlock.png";

const ImageGallery = styled.div`
  display: flex;
  gap: 20px;
`;

const LargeImageContainer = styled.div`
  background-color: #e0e0e0;
  display: flex;
  justify-content: center;
  align-items: center;
  min-height: 300px;
`;

const ThumbnailContainer = styled.div`
  flex: 1;
  display: grid;
  grid-template-columns: repeat(2, 1fr);
  gap: 20px;
`;

const Thumbnail = styled.div`
  background-color: #e0e0e0;
  aspect-ratio: 1/1;
  display: flex;
  justify-content: center;
  align-items: center;
  border-radius: 8px;
  position: relative;
  cursor: pointer;

  &:nth-child(4) {
    position: relative;
    overflow: hidden;
  }

  &:nth-child(4)::after {
    content: "Show all photos";
    position: absolute;
    bottom: 20px;
    right: 0;
    background-color: rgba(0, 0, 0, 0.7);
    color: white;
    padding: 8px 16px;
    border-radius: 4px;
    font-size: 0.8rem;
  }
`;

const ImageContainer = () => {
  return (
    <ImageGallery>
      <LargeImageContainer>
        <img
          src={AspectRatioBlock}
          alt="Large Preview"
          style={{ width: "720px", height: "489px" }}
        />
      </LargeImageContainer>
      <ThumbnailContainer>
        {Object.values(images).map((src, index) => (
          <Thumbnail key={index}>
            <img
              src={src}
              alt={`Thumbnail ${index + 1}`}
              style={{ width: "100%", height: "100%", objectFit: "cover" }}
            />
          </Thumbnail>
        ))}
      </ThumbnailContainer>
    </ImageGallery>
  );
};

export default ImageContainer;
