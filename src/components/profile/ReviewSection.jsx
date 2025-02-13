import React from "react";
import styled from "styled-components";
import StarIcon from "@mui/icons-material/Star";
import avatar from "../../assets/profile/Avatar.png";

const ReviewSection = () => {
  const reviews = [
    {
      id: 1,
      name: "Ashley",
      avatar: avatar,
      comment:
        "Absolutely amazing! She made me feel like a queen on my wedding day. Highly recommend!",
    },
    {
      id: 2,
      name: "Sophia",
      avatar: avatar,
      comment:
        "Her work is outstanding! She really knows how to bring out the best in you.",
    },
    {
      id: 3,
      name: "Olivia",
      avatar: avatar,
      comment: "Very professional and talented. My bridal look was flawless!",
    },
    {
      id: 4,
      name: "Emma",
      avatar: avatar,
      comment:
        "Best makeup artist I've ever met! Highly skilled and super friendly.",
    },
  ];

  return (
    <>
      <div>
        <ReviewContainer>
          <ReviweTitle>Reviews (5.0/5 stars)</ReviweTitle>
          {reviews.map((review) => (
            <ReviewerDetails key={review.id}>
              <div className="Image">
                <img src={review.avatar} alt="Profile" />
              </div>
              <div className="Details">
                <div className="reviewerDetails">
                  <div className="reviwer-name">{review.name}</div>
                  <Ratings>
                    <div className="stars">
                      <StarIcon /> <StarIcon /> <StarIcon /> <StarIcon />
                      <StarIcon />
                    </div>
                  </Ratings>
                </div>
                <div className="comments">“{review.comment}”</div>
              </div>
            </ReviewerDetails>
          ))}
        </ReviewContainer>
      </div>
    </>
  );
};

export default ReviewSection;
const ReviweTitle = styled.h5`
  font-weight: 500;
  font-size: 18px;
  line-height: 21.09px;
  letter-spacing: 1.2%;
`;
const ReviewContainer = styled.div`
  display: flex;
  flex-direction: column;
  gap: 24px;
`;

const ReviewerDetails = styled.div`
  display: flex;
  gap: 16px;

  img {
    width: 56px;
    height: 56px;
    border-radius: 200px;
  }
  .reviewerDetails {
    display: flex;
    gap: 8px;
    justify-content: space-between;
  }
  .comments {
    font-weight: 400;
    font-size: 16px;
    line-height: 18.75px;
    letter-spacing: 1%;
    color: #b3b3b3;
    margin-top: 8px;
  }

  .Details {
    width: 100%;
  }
`;

const Ratings = styled.div`
  display: flex;

  .stars {
    color: gold;
    display: flex;
  }
`;
