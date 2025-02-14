import React from "react";
import ImageContainer from "./ImageContainer";
import avatar from "../../assets/profile/Avatar.png";
import PackageCard from "./PackageCard ";
import Navbar from "./Navbar";
import PortfolioCard from "./PortfolioCard ";
import {
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
} from "./styles/ProfileComponent.styles";
import ReviewSection from "./ReviewSection";
import BookingsSection from "./BookingsSection";
import StarRating from "./StarRatings";

const ProfileComponent = () => {
  const services = [
    "Bridal makeup",
    "Special event makeup",
    "Photoshoot makeup (including editorial)",
    "Party and night-out glam",
    "Makeup for film & TV",
    "Airbrush makeup (optional)",
  ];
  return (
    <div id="glass-overlay">
      <Navbar />
      <OverAllWrapper>
        <ProfileWrapper>
          <Wrapper>
            <ImageContainer />
          </Wrapper>
          <Wrapper>
            <div>
              <h4>Expert Makeup Artist - Wedding, Events, & Photoshoots</h4>
            </div>
            <div>
              <h5>Beauty & Personal Care / Makeup Artists</h5>
            </div>
          </Wrapper>
          <DetailsWrapper>
            <LeftContainer>
              <RatingContainer>
                <Information>
                  <h5>
                    One of the most loved service on fashioneur, according to
                    guest
                  </h5>
                </Information>
                <VerticalDivider />
                <Ratings>
                  <div>4.5</div>
                  <StarRating />
                </Ratings>
                <VerticalDivider />
                <TotalReviews>
                  <div>245</div>
                  <div>Review</div>
                </TotalReviews>
              </RatingContainer>
              <AboutMe>
                Transform your look with a professional makeup artist
                specializing in weddings, events, photoshoots, and more. With
                over 7 years of experience, I tailor my services to your unique
                style and occasion. Whether you're looking for a natural glow or
                bold glamour, I’ll ensure you look and feel your best.
              </AboutMe>
              <Divider />
              <ProfileInfoWrapper>
                <div className="Image">
                  <img src={avatar} alt="Profile" />
                </div>
                <div className="profile-info">
                  <div>Angelina </div>
                  <div>Level 03. Experienced Artist </div>
                </div>
              </ProfileInfoWrapper>
              <Divider />
              <ServiceContainer>
                <ServiceTitle>Services Offered</ServiceTitle>
                <ServiceList>
                  {services.map((service, index) => (
                    <ServiceItem key={index}>
                      {<List>{service}</List>}
                    </ServiceItem>
                  ))}
                </ServiceList>
              </ServiceContainer>
              <Divider />
              <MyDetails>
                <div className="About-Me">About Me</div>
                <div className="details">
                  I’m a certified makeup artist with over 7 years of experience
                  in the industry. I’ve worked with top photographers,
                  influencers, and brides, delivering beautiful looks tailored
                  to every client. My work focuses on enhancing your natural
                  beauty with professional techniques and high-quality products.
                  I pride myself on creating a comfortable, fun, and
                  personalized experience.
                </div>
              </MyDetails>
              <Divider />
              <ExperienceWrapper>
                <div>
                  <h5>Experience</h5>
                </div>
                <div className="experience">
                  {[
                    "7+ years in makeup artistry",
                    "Worked on over 500 events and photoshoots",
                    "Published in magazines like Glamour and Vogue",
                    "Experienced in all skin tones and types",
                  ].map((item, index) => (
                    <div key={index}>
                      <h4>{item}</h4>
                    </div>
                  ))}
                </div>
              </ExperienceWrapper>
              <Divider />
              <TravelWrapper>
                <div className="Travel-Details">Travel Details</div>
                <div className="travel">
                  <div>
                    I am based in Los Angeles, but I am available for travel
                    within the Los Angeles area and surrounding regions.
                  </div>
                  <div>
                    <div className="travel-header">Travel Fee:</div>
                    <div>
                      $30–$50 depending on the location. (For locations more
                      than 25 miles from Los Angeles, additional fees may
                      apply.)
                    </div>
                  </div>
                  <div>
                    <div className="travel-header">
                      Travel to other cities or states:
                    </div>
                    <div>
                      Available by request, with travel and accommodation costs
                      to be discussed upon booking.
                    </div>
                  </div>
                </div>
              </TravelWrapper>
              <Divider />
              <PortfolioCard />
              <Divider />
              <ReviewSection />
              <Divider />
              <BookingsSection />
              <Divider />
            </LeftContainer>

            <RightContainer>
              <PackageCard />
            </RightContainer>
          </DetailsWrapper>
        </ProfileWrapper>
      </OverAllWrapper>
    </div>
  );
};

export default ProfileComponent;
