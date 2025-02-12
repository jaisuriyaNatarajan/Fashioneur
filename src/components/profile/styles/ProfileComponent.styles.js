import styled from "styled-components";
import backgroundImage from "../../../assets/profile/profileBackground.png";

const ProfileWrapper = styled.div`
  gap: 24px;
  padding: 24px;
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  justify-content: space-between;
  background-color: #292929f2;
  color: white;
  position: relative;
  z-index: 1;
  overflow: hidden;
  min-height: 100vh;

  &::before {
    content: "";
    position: fixed;
    top: 0;
    left: 0;
    width: 100%;
    height: 100%;
    background: url(${backgroundImage}) no-repeat center center;
    background-size: cover;
    opacity: 0.2;
    z-index: -1;
    pointer-events: none;
  }
`;

const ProfileInfoWrapper = styled.div`
  display: flex;
  align-items: center;
  gap: 16px;
  .Image img {
    width: 64px;
    height: 64px;
    border-radius: 200px;
  }

  .profile-info {
    display: flex;
    flex-direction: column;
    margin-top: 10px;
    gap: 4px;
  }
`;

const Wrapper = styled.div`
  display: flex;
  flex-direction: column;
  width: 1261px;
  gap: 10px;
  padding: 16px;

  h4 {
    font-weight: 500;
    font-size: 22px;
    line-height: 25.78px;
    letter-spacing: 1.5%;
  }

  h5 {
    font-weight: 500;
    font-size: 18px;
    line-height: 21.09px;
    letter-spacing: 1.2%;
  }
`;
const DetailsWrapper = styled.div`
  width: 1261px;
  height: 2354px;
  gap: 24px;
  display: flex;
  justify-content: space-between;
`;

const LeftContainer = styled.div`
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  width: 703px;
  height: 2354px;
  gap: 24px;
  padding-right: 12px;
  padding-left: 12px;
`;
const RightContainer = styled.div`
  width: 534px;
  height: 679px;
  border-radius: 12px;
  gap: 24px;
  border-width: 1px;
`;
const RatingContainer = styled.div`
  display: flex;
  height: 97px;
  padding: 16px;
  border-radius: 12px;
  border-width: 1px;
  justify-content: space-between;
  border: 1px solid #444444;
`;
const Information = styled.div`
  width: 243px;
  height: 63px;
  display: flex;
  align-items: center;
  justify-content: center;
  font-weight: 500;
  font-size: 18px;
  line-height: 21.09px;
  letter-spacing: 1.2%;

  h5 {
    font-weight: 500;
    font-size: 18px;
    line-height: 21.09px;
    letter-spacing: 1.2%;
  }
`;
const Ratings = styled.div`
  width: 144px;
  height: 52px;
  gap: 12px;
  display: flex;
  flex-direction: column;
  align-items: center;
  .stars {
    color: gold;
    display: flex;
  }
`;
const VerticalDivider = styled.div`
  border: 0;
  height: 52px;
  background-color: #444444;
  width: 1px;
  margin: 0 52px;
`;

const TotalReviews = styled.div`
  width: 52px;
  height: 52px;
  gap: 12px;
  display: flex;
  flex-direction: column;
  align-items: center;
`;

const AboutMe = styled.div`
  display: flex;
  color: #b3b3b3;
  font-weight: 400;
  font-size: 16px;
  line-height: 18.75px;
  letter-spacing: 1%;
`;

const Divider = styled.div`
  border: 0;
  height: 1px;
  background-color: #444444;
  width: 100%;
  max-width: 679px;
  margin-top: ${(props) => props.size || "24px"};
`;

const ServiceContainer = styled.div`
  display: flex;
  flex-direction: column;
  width: 727px;
  height: auto;
  gap: 12px;
`;

const ServiceTitle = styled.div`
  font-size: 18px;
  font-weight: 500;
`;
const ServiceList = styled.div`
  display: flex;
  flex-direction: column;
  gap: 12px;
`;
const ServiceItem = styled.ul``;
const List = styled.li`
  font-size: 16px;
  font-weight: 400;
  color: #b3b3b3;
  position: relative;
  left: 28px;
`;
const MyDetails = styled.div`
  display: flex;
  flex-direction: column;
  gap: 12px;
  font-size: 18px;
  font-weight: 500;
  .details {
    font-weight: 400;
    font-size: 16px;
    line-height: 18.75px;
    letter-spacing: 1%;
    color: #b3b3b3;
  }
`;

const ExperienceWrapper = styled.div`
  display: flex;
  flex-direction: column;
  gap: 12px;
  h5 {
    font-weight: 500;
    font-size: 18px;
    line-height: 21.09px;
    letter-spacing: 1.2%;
  }
  h4 {
    font-weight: 400;
    font-size: 16px;
    line-height: 18.75px;
    letter-spacing: 1%;
  }

  .experience {
    display: flex;
    gap: 12px;
    flex-direction: column;
    font-weight: 400;
    font-size: 16px;
    line-height: 18.75px;
    letter-spacing: 1%;
    color: #b3b3b3;
  }
`;

const TravelWrapper = styled.div`
  display: flex;
  flex-direction: column;
  gap: 12px;
  height: 200px;
  border-radius: 12px;
  border-width: 1px;
  justify-content: flex-start;

  .Travel-Details {
    font-weight: 500;
    font-size: 18px;
    line-height: 25px;
    letter-spacing: 1.2%;
  }

  .travel {
    font-weight: 400;
    font-size: 16px;
    line-height: 25px;
    letter-spacing: 1%;
    color: #b3b3b3;
    display: flex;
    flex-direction: column;
    gap: 12px;
  }

  .travel .travel-header {
    font-weight: 400;
    font-size: 16px;
    line-height: 18.75px;
    letter-spacing: 1%;
    color: white;
    margin-bottom: 8px;
  }
`;
const OverAllWrapper = styled.div`
  display: flex;
  justify-content: "center";
  align-items: "center";
  margin: 23px 66px;
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
  ServiceContainer,
};
