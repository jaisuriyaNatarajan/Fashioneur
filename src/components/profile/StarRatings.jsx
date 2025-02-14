import { useState } from "react";
import { Star } from "./styles/ProfileComponent.styles";

const StarRating = () => {
  const [hoverCount, setHoverCount] = useState(0);
  const [fixedCount, setFixedCount] = useState(0);
  const totalStars = 5;

  const handleMouseEnter = (index) => {
    if (!fixedCount) {
      setHoverCount(index);
    }
  };

  const handleMouseLeave = () => {
    if (!fixedCount) {
      setHoverCount(0);
    }
  };

  const handleClick = (index) => {
    setFixedCount(index);
  };

  return (
    <div>
      {Array.from({ length: totalStars }, (_, index) => (
        <Star
          key={index}
          onMouseEnter={() => handleMouseEnter(index + 1)}
          onMouseLeave={handleMouseLeave}
          onClick={() => handleClick(index + 1)}
          $active={index + 1 <= (fixedCount || hoverCount)}
        />
      ))}
    </div>
  );
};

export default StarRating;
