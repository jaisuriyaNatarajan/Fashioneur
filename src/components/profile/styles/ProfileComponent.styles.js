import styled, { css } from "styled-components";
import backgroundImage from "../../../assets/profile/profileBackground.png";
import StarIcon from "@mui/icons-material/Star";

/* 🌟 Common Styles */
const FlexColumn = css`
  display: flex;
  flex-direction: column;
`;

const FlexCenter = css`
  display: flex;
  align-items: center;
  justify-content: center;
`;

const FontStyle = css`
  font-weight: 400;
  font-size: 16px;
  line-height: 18.75px;
  letter-spacing: 1%;
  color: #b3b3b3;
`;

const ProfileWrapper = styled.div`
  ${FlexColumn}
  gap: 24px;
  padding: 24px;
  align-items: flex-start;
  justify-content: space-between;
  background-color: #292929f2;
  color: white;
  position: relative;
  z-index: 1;
  overflow: hidden;
  min-height: 100vh;
  margin-bottom: 95px;

  &::before {
    content: "";
    position: fixed;
    top: 0;
    left: 0;
    width: 100%;
    height: 100%;
    background: url(${backgroundImage}) no-repeat center center;
    background-size: cover;
    opacity: 0.5;
    z-index: -1;
    pointer-events: none;
  }
`;

const ProfileInfoWrapper = styled.div`
  ${FlexCenter}
  justify-content:flex-start;
  gap: 16px;

  .Image img {
    width: 64px;
    height: 64px;
    border-radius: 50%;
  }

  .profile-info {
    ${FlexColumn}
    margin-top: 10px;
    gap: 4px;
  }
`;

const Wrapper = styled.div`
  ${FlexColumn}
  width: 1261px;
  gap: 10px;
  padding: 16px;

  h4 {
    font-weight: 500;
    font-size: 22px;
    letter-spacing: 1.5%;
  }

  h5 {
    font-weight: 500;
    font-size: 18px;
    letter-spacing: 1.2%;
  }
`;

const DetailsWrapper = styled.div`
  display: flex;
  justify-content: space-between;
  width: 1261px;
  height: auto;
  gap: 24px;
`;

const LeftContainer = styled.div`
  ${FlexColumn}
  width: 703px;
  gap: 24px;
  padding: 0 12px;
`;

const RightContainer = styled.div`
  width: 534px;
  height: 679px;
  border-radius: 12px;
  gap: 24px;
  border: 1px solid #444444;
`;

const RatingContainer = styled.div`
  ${FlexCenter}
  height: 97px;
  padding: 16px;
  border-radius: 12px;
  border: 1px solid #444444;
  justify-content: space-between;
`;

const Information = styled.div`
  width: 243px;
  height: 63px;
  ${FlexCenter}
  font-weight: 500;
  font-size: 18px;
`;

const Ratings = styled.div`
  ${FlexColumn}
  width: 144px;
  height: 52px;
  gap: 12px;
  align-items: center;
`;

const Star = styled(StarIcon)`
  font-size: 40px;
  cursor: pointer;
  transition: color 0.3s ease-in-out;
  color: ${(props) => (props.$active ? "gold" : "gray")};
`;

const TotalReviews = styled.div`
  ${FlexColumn}
  width: 52px;
  height: 52px;
  gap: 12px;
  align-items: center;
`;

const Divider = styled.div`
  border: 0;
  height: 1px;
  background-color: #444444;
  width: 100%;
  max-width: ${(props) => (props.fullwidth ? "100%" : "679px")};
  margin-top: ${(props) => props.size || "24px"};
`;

const VerticalDivider = styled.div`
  border: 0;
  height: 52px;
  background-color: #444444;
  width: 1px;
  margin: 0 52px;
`;

const AboutMe = styled.div`
  ${FontStyle}
  display: flex;
`;

const ServiceContainer = styled.div`
  ${FlexColumn}
  width: 727px;
  height: auto;
  gap: 12px;
`;

const ServiceTitle = styled.div`
  font-size: 18px;
  font-weight: 500;
`;

const ServiceList = styled.div`
  ${FlexColumn}
  gap: 12px;
`;

const ServiceItem = styled.ul``;

const List = styled.li`
  ${FontStyle}
  position: relative;
  left: 28px;
`;

const MyDetails = styled.div`
  ${FlexColumn}
  gap: 12px;
  font-size: 18px;
  font-weight: 500;

  .details {
    ${FontStyle}
  }
`;

const ExperienceWrapper = styled.div`
  ${FlexColumn}
  gap: 12px;

  h5 {
    font-weight: 500;
    font-size: 18px;
    letter-spacing: 1.2%;
  }

  h4 {
    ${FontStyle}
  }

  .experience {
    ${FlexColumn}
    gap: 12px;
  }
`;

const TravelWrapper = styled.div`
  ${FlexColumn}
  gap: 12px;
  height: 200px;
  border-radius: 12px;

  .Travel-Details {
    font-weight: 500;
    font-size: 18px;
    letter-spacing: 1.2%;
  }

  .travel {
    ${FontStyle}
    ${FlexColumn}
    gap: 12px;
  }

  .travel .travel-header {
    color: white;
    margin-bottom: 8px;
  }
`;

const OverAllWrapper = styled.div`
  ${FlexCenter}
  margin: 23px 66px 0px 66px;
  height: auto;
`;

export {
  TravelWrapper,
  OverAllWrapper,
  ExperienceWrapper,
  MyDetails,
  List,
  ServiceItem,
  ServiceList,
  ServiceTitle,
  ServiceContainer,
  ProfileWrapper,
  ProfileInfoWrapper,
  Wrapper,
  DetailsWrapper,
  LeftContainer,
  RightContainer,
  RatingContainer,
  Information,
  Ratings,
  VerticalDivider,
  TotalReviews,
  AboutMe,
  Divider,
  Star,
};
