import styled from "styled-components";
import {
  BookingContainer,
  BookingHeader,
  BookingInfo,
} from "./styles/BookingsSection.styles";

const BookingsSection = () => {
  const bookings = [
    "Contact me via message to discuss your needs.",
    "Select a date and time.",
    "Secure your spot with a 20% deposit (non-refundable).",
    "Get ready for the most flawless makeup application you’ve ever had!",
  ];

  return (
    <BookingContainer>
      <BookingHeader>Booking Process</BookingHeader>
      <BookingInfo>
        {bookings.map((booking, index) => (
          <div>{`${index + 1}. ${booking}`}</div>
        ))}
      </BookingInfo>
    </BookingContainer>
  );
};

export default BookingsSection;
