import styled from "styled-components";

const BookingContainer = styled.div`
  width: 100%;
  display: flex;
  flex-direction: column;
  align-items: flex-start;
`;

const BookingHeader = styled.div`
  font-weight: 500;
  font-size: 18px;
  line-height: 21.09px;
  letter-spacing: 1.2%;
`;

const BookingInfo = styled.div`
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  margin-top: 24px;
  font-weight: 400;
  font-size: 16px;
  line-height: 24px;
  letter-spacing: 1%;
  color: #b3b3b3;
`;

export { BookingContainer, BookingHeader, BookingInfo };
