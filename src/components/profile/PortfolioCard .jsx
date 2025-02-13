import React from "react";
import styled from "styled-components";
import Bojan1 from "../../assets/profile/gallery/bojan1.png";
import Bojan2 from "../../assets/profile/gallery/bojan2.png";
import Bojan3 from "../../assets/profile/gallery/bojan3.png";
import Bojan4 from "../../assets/profile/gallery/bojan4.png";


const PortfolioCard = () => {
  return (
    <Container>
      <Title>Portfolio</Title>
      <CardContainer>
        <TimeAgo>2 months ago</TimeAgo>
        <Wrapper>
          <Heading>Soft Glam</Heading>
          <Description>
            I carefully select foundation and concealer shades..
          </Description>
        </Wrapper>
        <ImageGrid>
          <ImageWrapper width="184.72px" height="159px" isFirst>
            <Image src={Bojan1} alt="Model 1" />
          </ImageWrapper>
          <ImageWrapper width="182.20px" height="196px">
            <Image src={Bojan2} alt="Model 2" />
          </ImageWrapper>
          <ImageWrapper width="188.49px" height="202px">
            <Image src={Bojan3} alt="Model 3" />
          </ImageWrapper>
          <ImageWrapper width="182.20px" height="173px">
            <Image src={Bojan4} alt="Model 4" />
          </ImageWrapper>
        </ImageGrid>
        <ViewDetails>View Details</ViewDetails>
      </CardContainer>
    </Container>
  );
};

// Styled Components
const Container = styled.div`
  display: flex;
  flex-direction: column;
  gap: 12px;
  width: 406px;
`;

const CardContainer = styled.div`
  color: white;
  border-radius: 9.84px;
  display: flex;
  flex-direction: column;
  gap: 19.68px;
  padding: 12px;
  backdrop-filter: blur(10px);
`;

const Title = styled.h3`
  padding: 12px 0px 0px 12px;
  font-weight: 500;
  font-size: 18px;
  line-height: 21.09px;
`;

const TimeAgo = styled.p`
  font-size: 12px;
  color: #bbb;
`;

const Wrapper = styled.div`
  display: flex;
  flex-direction: column;
  gap: 4px;
`;

const Heading = styled.h5`
  font-weight: 500;
  font-size: 18px;
  letter-spacing: 1.2%;
  white-space: nowrap;
`;

const Description = styled.p`
  font-weight: 400;
  font-size: 16px;
  color: #b3b3b3;
`;

/* ✅ Grid Layout with Exact Horizontal (9px) & Vertical (15px) Gaps */
const ImageGrid = styled.div`
  display: grid;
  grid-template-columns: repeat(2, auto); /* Two images per row */
  column-gap: 9px; /* Horizontal gap */
  row-gap: 15px; /* Vertical gap */
  justify-content: center;
  margin-top: 16px;
`;

const ImageWrapper = styled.div`
  width: ${(props) => props.width};
  height: ${(props) => props.height};
  border-radius: 9.84px;
  overflow: hidden;
  display: flex;
  justify-content: center;
  align-items: center;

  ${({ isFirst }) => isFirst && "align-self: flex-end;"}
`;

const Image = styled.img`
  width: 100%;
  height: 100%;
  object-fit: cover;
`;

const ViewDetails = styled.button`
  background: none;
  border: none;
  color: #b3b3b3;
  text-align: center;
  font-size: 16px;
  cursor: pointer;
  font-weight: 500;
`;

export default PortfolioCard;
