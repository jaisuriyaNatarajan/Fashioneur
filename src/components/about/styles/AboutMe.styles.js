import styled from "styled-components";
import bgImage from "../../../assets/about/Image.png";
import { Verified } from "@mui/icons-material";
import ErrorOutlineOutlinedIcon from "@mui/icons-material/ErrorOutlineOutlined";

const BackGroundImage = styled.div`
  background-image: url(${(props) => props.backgroundImage});
  background-size: cover;
  background-position: center;
  min-height: 100vh;
  display: flex;
  flex-direction: column;
  align-items: center;
  padding: 20px;
  position: relative;

  &::before {
    content: "";
    position: absolute;
    top: 0;
    left: 0;
    width: 100%;
    height: 100%;
    background: rgba(0, 0, 0, 0.2);
  }
`;

const GlassContainer = styled.div`
  position: relative;
  padding: 20px;
  width: 90%;
  background: rgba(255, 255, 255, 0.1);
  border-radius: 15px;
  box-shadow: 0 4px 10px rgba(0, 0, 0, 0.1);
  backdrop-filter: blur(10px);
  -webkit-backdrop-filter: blur(10px); 
  border: 1px solid rgba(255, 255, 255, 0.3);
`;

const Container = styled.div`
  display: flex;
  justify-content: space-between;
`;

const LeftContainer = styled.div`
  width: 40%;
  height: auto;
  border-radius: 12px;
  display: flex;
  flex-direction: column;
  gap: 24px;
`;

const ProfileCard = styled.div`
  background-image: url(${bgImage});
  background-size: cover;
  background-position: center;
  display: flex;
  align-items: center;
  height: 441px;
  width: 100%;
  position: relative;
  border-radius: 14px;
`;

const CardDetails = styled.div`
  bottom: 0;
  left: 0;
  width: 100%;
  height: 100%;
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  justify-content: flex-end;
`;
const CardTitle = styled.div`
  display: flex;
  font-family: Inter;
  font-weight: 600;
  font-size: 24px;
  line-height: 32px;
  letter-spacing: 0%;
  color: #ffffff;
  justify-content: flex-start;
  align-items: center;
  width: 90%;
  height: 32px;
  padding: 0px 10px;
`;

const VerifiedIcon = styled(Verified)`
  font-size: 50px;
  color: #1da1f2;
  margin-left: 10px;
`;
const UserProfileContainer = styled.div`
  display: flex;
  justify-content: flex-start;
  align-items: center;
  font-weight: 500;
  font-size: 18px;
  line-height: 28px;
  color: #ffffff;
  gap: 10px;
  padding: 0px 10px;
`;
const PersonalInfoContainer = styled.div`
  position: absolute;
  top: 265px;
  left: 12px;
`;
const ReviewContainer = styled.div`
  display: flex;
  justify-content: flex-start;
  align-items: center;
  color: white;
  gap: 11px;
  align-items: flex-end;
`;
const Wrapper = styled.div`
  font-weight: 500;
  font-size: ${(props) => props.size || "20px"};
  line-height: 24px;
  text-align: center;
  color: ${(props) => (props.color ? "#FFFFFF" : "#BFC0C0")};
  display: flex;

  &:hover {
    color: #ffffff;
  }
`;

const FlexWrapper = styled(Wrapper)`
  display: flex;
  flex-direction: column;
`;

const InfoSection = styled.div`
  display: flex;
  flex-direction: column;
  gap: 12px;
`;
const Conatiner = styled.div`
  font-weight: 400;
  font-size: 16px;
  line-height: 18px;
  color: #b3b3b3;
  display: flex;
  flex-direction: column;
  gap: 12px;
`;

const ErrorIcon = styled(ErrorOutlineOutlinedIcon)`
  font-size: ${(props) => props.size || "20px"};
  color: #ffffff;
`;
const ReporWrapper = styled.div`
  display: flex;
  gap: 8px;
  font-weight: 600;
  font-size: 16px;
  line-height: 24px;
  align-items: center;
`;

const RightContainer = styled.div`
  width: 59%;
  margin: 0px 24px;
`;
const NavContainer = styled.div`
  display: flex;
  gap: 8px;
  font-family: Inter;
  font-weight: 500;
  font-size: 14px;
  line-height: 20px;
  color: #d0d5dd;
  .nav-details {
    display: flex;
    gap: 8px;
    margin: 12px 8px;
  }
`;

const AboutMeContainer = styled.div``;
const Column = styled.div`
  display: flex;
  flex-direction: column;
  gap: 12px;
  margin-top: 12px;

  .header {
    font-weight: ${(props) => (props.weight ? "700px" : "500px")};
    font-size: 20px;
    line-height: 21.09px;
    color: white;
  }

  .content {
    font-weight: 400;
    font-size: 16px;
    line-height: 18.75px;
    font-weight: 400;
    font-size: 16px;
    line-height: 19px;
    color: #b3b3b3;
  }
`;

export {
  BackGroundImage,
  GlassContainer,
  LeftContainer,
  RightContainer,
  Container,
  ProfileCard,
  CardDetails,
  CardTitle,
  VerifiedIcon,
  UserProfileContainer,
  PersonalInfoContainer,
  ReviewContainer,
  Wrapper,
  FlexWrapper,
  InfoSection,
  Conatiner,
  ErrorIcon,
  ReporWrapper,
  NavContainer,
  AboutMeContainer,
  Column,
};
