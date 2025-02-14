import React from "react";
import {
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
} from "./styles/AboutMe.styles";
import backgroundimg from "../../assets/about/aboutBackgroundImage.png";
import Navbar from "../profile/Navbar";
import StarRatings from "../profile/StarRatings";

const AboutMe = () => {
  const stats = [
    { value: 2390, label: "Followers" },
    { value: 163, label: "Following" },
    { value: <StarRatings />, label: "Review" },
  ];
  const userDetails = ["Model", "Chennai ,", "India"];
  return (
    <>
      <Navbar />
      <BackGroundImage backgroundImage={backgroundimg}>
        <GlassContainer>
          <Container>
            <LeftContainer>
              <ProfileCard>
                <CardDetails>
                  <PersonalInfoContainer>
                    <CardTitle>
                      <div>Olivia Rhye</div>
                      <VerifiedIcon sx={{ fontSize: 34 }} />
                    </CardTitle>
                    <UserProfileContainer>
                      {userDetails.map((review, index) => (
                        <Wrapper key={index} color>
                          {review}
                        </Wrapper>
                      ))}
                    </UserProfileContainer>
                    <UserProfileContainer>
                      <ReviewContainer>
                        {stats.map((item, index) => (
                          <FlexWrapper key={index}>
                            <Wrapper color>{item.value}</Wrapper>
                            <Wrapper>{item.label}</Wrapper>
                          </FlexWrapper>
                        ))}
                      </ReviewContainer>
                    </UserProfileContainer>
                  </PersonalInfoContainer>
                </CardDetails>
              </ProfileCard>
            </LeftContainer>
            <RightContainer>
              <h1>Right</h1>
            </RightContainer>
          </Container>
        </GlassContainer>
      </BackGroundImage>
    </>
  );
};

export default AboutMe;
