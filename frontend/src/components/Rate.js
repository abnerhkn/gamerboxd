import React, { useState, useEffect, useMemo } from "react";
import { FaStar, FaHeart } from "react-icons/fa";
import "../styles/Rating.css";
import Button from "./Button";
import bg from "../assets/bg.jpg";
import CardComponent from "./CardComponent";
import Input from "./Input";

const Rate = () => {
  const [starRating, setStarRating] = useState(null);
  const [starHover, setStarHover] = useState(null);
  const [like, setLike] = useState(false);
  const [likeHover, setLikeHover] = useState(false);

  const currentDate = useMemo(() => new Date(), []);
  const currentYear = currentDate.getFullYear();
  const currentDay = currentDate.getDate();

  const [review, setReview] = useState("");
  const [reviewDate, setReviewDate] = useState("");

  const handleReviewChange = (e) => {
    setReview(e.target.value);
  };

  const handleReviewDateChange = (e) => {
    const selectedDate = new Date(e.target.value);
    const selectedYear = selectedDate.getFullYear();
    const selectedDay = selectedDate.getDate();

    if (
      selectedYear > currentYear ||
      (selectedYear === currentYear && selectedDay > currentDay)
    ) {
      // Invalid date
      console.log("Invalid date");
    } else {
      setReviewDate(e.target.value);
    }
  };

  useEffect(() => {
    const formattedDate = currentDate.toISOString().split("T")[0];
    setReviewDate(formattedDate);
  }, [currentDate]);

  return (
    <div className="container-review">
      <div className="view-game">
        <p>Dead by Daylight</p>
        <CardComponent>
          <img src={bg} alt="game" />
        </CardComponent>
      </div>
      <div className="rating">
        <h2>Classifique este jogo</h2>
        <textarea
          type="text"
          placeholder="Adicione sua review..."
          value={review}
          onChange={handleReviewChange}
        />
        <div className="review-container">
          <div className="review-date">
            <Input
              type={"date"}
              size={"large"}
              value={reviewDate}
              onChange={handleReviewDateChange}
              label=""
              placeholder=""
            />
          </div>
          <div className="rating-content">
            {[...Array(5)].map((_star, index) => {
              const currentRating = index + 1;
              return (
                <label key={index}>
                  <input
                    type="radio"
                    name="rating"
                    value={currentRating}
                    onClick={() => setStarRating(currentRating)}
                  />
                  <FaStar
                    className="star"
                    size={30}
                    color={
                      currentRating <= (starHover || starRating)
                        ? "#ffcc00"
                        : "#e4e5e9"
                    }
                    onMouseEnter={() => setStarHover(currentRating)}
                    onMouseLeave={() => setStarHover(null)}
                  />
                </label>
              );
            })}
          </div>
          <div className="like-container">
            <FaHeart
              className="like"
              size={30}
              color={like || likeHover ? "#D20103" : "#e4e5e9"}
              onClick={() => setLike(!like)}
              onMouseEnter={() => setLikeHover(true)}
              onMouseLeave={() => setLikeHover(false)}
            />
          </div>
          <Button className={"primary"} label="Salvar" size={"small"} />
        </div>
      </div>
    </div>
  );
};

export default Rate;
