import styled from "styled-components";
import bgImage from "../../../assets/about/Image.png";
import { Verified } from "@mui/icons-material";

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
  width: 80%;
  background: rgba(255, 255, 255, 0.1);
  border-radius: 15px;
  box-shadow: 0 4px 10px rgba(0, 0, 0, 0.1);
  backdrop-filter: blur(10px);
  -webkit-backdrop-filter: blur(10px); /* For Safari */
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
  font-size: 16px;
  line-height: 24px;
  letter-spacing: 0%;
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

const RightContainer = styled.div``;

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
};
