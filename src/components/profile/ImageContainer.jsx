import React from "react";
import * as images from "../../assets/profile";
import AspectRatioBlock from "../../assets/profile/thumbnails/& Gallery/AspectRatioBlock.png";
import {
  ImageGallery,
  LargeImageContainer,
  ThumbnailContainer,
  Thumbnail,
} from "./styles/ImageContainer.styles";

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
