import styled from "styled-components";

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
  border-radius: 24px 0px 0px 24px;
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

export { ImageGallery, LargeImageContainer, ThumbnailContainer, Thumbnail };
