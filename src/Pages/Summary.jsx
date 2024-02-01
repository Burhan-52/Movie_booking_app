import React, { useState } from "react";
import Button from "../components/Button";
import MovieImage from "../components/MovieImage";
import Form from "../components/Form";
import MovieName from "../components/MovieName";
import useMovieSummary from "../hooks/useMovieSummary";
import { ABOUT_MOVIE, BOOKING_TICKETS, MESSAGE } from "../config";

const Summary = () => {
  const [summary] = useMovieSummary();
  const [showForm, setShowForm] = useState(false);
  const [bookingDetails, setBookingDetails] = useState(null);

  const handleBookTickets = () => {
    setShowForm(true);
  };

  if (summary?.length < 0) {
    return null;
  }

  return (
    <div>
      <div className="summary-container">
        <div className="movie-image-name">
          <MovieImage src={summary?.image?.medium} alt={summary?.name} />
        </div>
        <div className="movie-image-name">
          <div>
          <MovieName name={summary?.name} className={"movie-name"} />
          <div className="movie-details">
            ⭐ {summary?.rating?.average} / 10
          </div>
          <div className="movie-details">{summary?.language}</div>
          <div className="movie-details">{summary?.premiered}</div>

          <Button
            name={BOOKING_TICKETS}
            type={"button"}
            handleClick={handleBookTickets}
          />
          </div>
        </div>
      </div>

      <div className="about-container">
        <h2> {ABOUT_MOVIE}</h2>
        <div className="about-movie">
          {summary?.summary?.replace(/<\/?p>|<\/?b>/g, " ")}
        </div>
      </div>

      {showForm && (
        <div className="modal-overlay">
          <div className="booking-form-container">
            <div className="booking-form">
              <div className="booking-title">
                <div>{BOOKING_TICKETS}</div>
                <span onClick={() => setShowForm(false)}>X</span>
              </div>
              <div>
                <MovieName name={summary?.name} className={"booking-title"} />
              </div>
              <Form
                setBookingDetails={setBookingDetails}
                movieName={summary?.name}
                id={summary?.id}
              />
              {bookingDetails && <div>{MESSAGE}</div>}
            </div>
          </div>
        </div>
      )}
    </div>
  );
};

export default Summary;
