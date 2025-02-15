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
  InfoSection,
  Conatiner,
  ReporWrapper,
  ErrorIcon,
  NavContainer,
  AboutMeContainer,
  Column,
} from "./styles/AboutMe.styles";
import backgroundimg from "../../assets/about/aboutBackgroundImage.png";
import Navbar from "../profile/Navbar";
import StarRatings from "../profile/StarRatings";
import AboutNavItems from "./AboutNavItems";
import { Divider } from "../profile/styles/ProfileComponent.styles";
import ReviewSection from "../profile/ReviewSection";

const AboutMe = () => {
  const stats = [
    { value: 2390, label: "Followers" },
    { value: 163, label: "Following" },
    { value: <StarRatings />, label: "Review" },
  ];
  const userDetails = ["Model", "Chennai ,", "India"];
  const VerifiedIdentityInfo = ["Identity", "Email Address", "Phone number"];
  const profileResponseInfo = [
    "Super host are experienced and highly rated hosts who are committing to provide great stays for guests",
    "Response Rate : 100%",
    "Response within in 1 hr",
  ];

  const experienceInfo = [
    "7+ years in makeup artistry",
    "Worked on over 500 events and photoshoots",
    "Published in magazines like Glamour and Vogue",
    "Experienced in all skin tones and types",
  ];

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
              <InfoSection>
                <Wrapper color>Olivia Rhye’s confirmed information</Wrapper>
                <Conatiner>
                  {VerifiedIdentityInfo.map((identity, i) => (
                    <>
                      <div key={i}>{identity}</div>
                    </>
                  ))}
                </Conatiner>
              </InfoSection>
              <ReporWrapper>
                <ErrorIcon sx={{ fontSize: 20 }} />
                <Wrapper size="16px" color>
                  Report this host
                </Wrapper>
              </ReporWrapper>
            </LeftContainer>
            <RightContainer>
              <AboutNavItems />
              <AboutMeContainer>
                <Column>
                  <div className="header">About Me</div>
                  <div className="content">
                    I’m a certified makeup artist with over 7 years of
                    experience in the industry. I’ve worked with top
                    photographers, influencers, and brides, delivering beautiful
                    looks tailored to every client. My work focuses on enhancing
                    your natural beauty with professional techniques and
                    high-quality products. I pride myself on creating a
                    comfortable, fun, and personalized experience.
                  </div>
                </Column>
              </AboutMeContainer>
              <Divider fullwidth />
              <Column weight>
                <div className="header">Olivia Rhye is Super host</div>
                <div className="content">
                  <Column>
                    {profileResponseInfo.map((info, i) => (
                      <div key={i}>{info}</div>
                    ))}
                  </Column>
                </div>
              </Column>
              <Divider fullwidth />
              {/* TODO - Portfolio Section */}
              <Column>
                <div className="header">Experience</div>
                <div className="content">
                  <Column>
                    {experienceInfo.map((info, i) => (
                      <div key={i}>{info}</div>
                    ))}
                  </Column>
                </div>
              </Column>
              {/* TODO - service Section */}
              <Divider fullwidth />
              <ReviewSection size="20px" margin="12px 0px 0px 0px" />
            </RightContainer>
          </Container>
        </GlassContainer>
      </BackGroundImage>
    </>
  );
};

export default AboutMe;
