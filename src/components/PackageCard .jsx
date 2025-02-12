import React from "react";
import styled from "styled-components";

const CardWrapper = styled.div`
  background: #292929;
  padding: 24px;
  color: white;
  box-shadow: 0px 4px 20px rgba(0, 0, 0, 0.5),
    /* Dark shadow */ 0px 0px 15px rgba(255, 255, 255, 0.3); /* Softer white glow */
  font-family: "Roboto", sans-serif;
  width: 534px;
  height: 679px;
  gap: 24px;
  border-radius: 12px;
  display: flex;
  flex-direction: column;
  justify-content: space-between;
`;

const TabContainer = styled.div`
  display: flex;
  justify-content: space-between;
  background: rgba(255, 255, 255, 0.1);
  border-radius: 10px;
  padding: 5px;
  width: 486px;
  height: 78px;

  .tab-details {
    display: flex;
    width: 470px;
    height: 62px;
    gap: 8px;
    border-radius: 12px;
    padding: 8px;
  }
`;

const Tab = styled.button`
  flex: 1;
  background: ${(props) => (props.active ? "#4A4A4A" : "transparent")};
  border: none;
  color: ${(props) => (props.active ? "#FF8C00" : "#fff")};
  font-weight: 500;
  padding: 10px;
  cursor: pointer;
  border-radius: 8px;
  width: 152px;
  height: 46px;
  gap: 8px;
  border-radius: 6px;
  padding-top: 10px;
  padding-right: 14px;
  padding-bottom: 10px;
  padding-left: 14px;
  font-weight: 500;
  font-size: 22px;
  line-height: 25.78px;
  letter-spacing: 1.5%;
`;

const Price = styled.h3`
  font-weight: 500;
  font-size: 32px;
  line-height: 37.5px;
  letter-spacing: 1.8%;
`;

const PackageTitle = styled.h4`
  font-weight: 500;
  font-size: 22px;
  line-height: 25.78px;
  letter-spacing: 1.5%;
`;

const Badge = styled.span`
  background: #ffca28;
  color: black;
  font-size: 12px;
  font-weight: bold;
  padding: 4px 10px;
  border-radius: 12px;
  margin-left: 8px;
`;

const Description = styled.p`
  font-weight: 400;
  font-size: 16px;
  line-height: 18.75px;
  letter-spacing: 1%;
  color: #b3b3b3;
`;

const List = styled.ul`
  list-style: none;
  padding-left: 0;
  font-size: 14px;
`;

const ListItem = styled.li`
  margin-bottom: 6px;
  font-weight: 400;
  font-size: 16px;
  line-height: 26px;
  letter-spacing: 1%;
  color: #b3b3b3;
  &::before {
    content: "•";
    margin-right: 6px;
  }
`;

const Button = styled.button`
  background: #ffa726;
  color: white;
  font-size: 16px;
  font-weight: bold;
  padding: 12px;
  border-radius: 10px;
  width: 100%;
  border: none;
  cursor: pointer;
  margin-top: 16px;
  transition: 0.3s;

  width: 486px;
  height: 58px;
  gap: 12px;
  border-radius: 8px;
  padding-top: 16px;
  padding-right: 28px;
  padding-bottom: 16px;
  padding-left: 28px;

  font-weight: 500;
  font-size: 22px;
  line-height: 25.78px;
  letter-spacing: 1.5%;

  &:hover {
    background: #ff9800;
  }
`;

const Container = styled.div`
  display: flex;
  flex-direction: column;
  gap: 24px;
`;

const PackageInfoContainer = styled.div`
  display: flex;
  flex-direction: column;
  gap: 16px;

  h4 {
    font-weight: 500;
    font-size: 18px;
    line-height: 21.09px;
    letter-spacing: 1.2%;
  }
  .package-details {
    display: flex;
    justify-content: space-between;
  }
`;

const PackageCard = () => {
  const packageFeatures = [
    "Extensive skin prep with hydration treatment",
    "HD/Airbrush foundation for long-lasting coverage",
    "Detailed contouring, blush & highlighter",
    "Custom eye makeup (cut crease, smokey, glitter options)",
    "Luxury false eyelashes application",
    "Waterproof & transfer-proof makeup",
    "Hairstyling (Updo, curls, or any preferred bridal style)",
  ];
  return (
    <CardWrapper>
      <TabContainer>
        <div className="tab-details">
          <Tab active={false}>Basic</Tab>
          <Tab active={true}>Standard</Tab>
          <Tab active={false}>Premium</Tab>
        </div>
      </TabContainer>

      <Container>
        <Price>₹12,000</Price>
        <PackageInfoContainer>
          <div className="package-details">
            <PackageTitle>
              Premium Package: Bridal Perfection <Badge>Premium</Badge>
            </PackageTitle>
          </div>
          <Description>
            An ultra-HD, long-lasting bridal makeup look designed to last
            through the wedding day. Includes skin prep, premium HD or Airbrush
            makeup, customized eye look, false lashes, and hairstyling.
          </Description>

          <h4>What's Included</h4>
          <List>
            {packageFeatures.map((feature, index) => (
              <ListItem key={index}>{feature}</ListItem>
            ))}
          </List>
        </PackageInfoContainer>
        <Button>Book Now</Button>
      </Container>
    </CardWrapper>
  );
};

export default PackageCard;
