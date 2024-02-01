import React, { useState } from "react";
import Label from "./Label";
import InputBox from "./InputBox";
import Button from "./Button";

const Form = ({ setBookingDetails, movieName, id }) => {
  const [user, setUser] = useState("");
  const [seatBooked, setSeatBooked] = useState(1);
  const [selectedTheater, setSelectedTheater] = useState("Cineplex");
  const [theaterOptions] = useState([
    "Cineplex",
    "MegaPlex",
    "Star Cinemas",
    "Silver Screens",
    "Golden Theatre",
  ]);

  const handleBooking = (e) => {
    e.preventDefault();
    const newBookingDetails = {
      movie: movieName,
      seats: seatBooked,
      theater: selectedTheater,
      user: user,
    };
    localStorage.setItem(
      `bookingDetails_${id}`,
      JSON.stringify(newBookingDetails)
    );
    setBookingDetails(newBookingDetails);
  };

  return (
    <form onSubmit={handleBooking}>
      <div>
        <Label htmlFor={"user"} label={"Your Name:"} />
        <InputBox
          type={"text"}
          value={user}
          handleChange={(e) => setUser(e.target.value)}
        />
      </div>

      <div>
        <Label htmlFor={"seatBooked"} label={"How Many Seats?:"} />
        <InputBox
          type={"number"}
          value={seatBooked}
          handleChange={(e) => setSeatBooked(e.target.value)}
        />
      </div>

      <div>
        <Label htmlFor={"theaterSelect"} label={"Select Theater:"} />
        <select
          value={selectedTheater}
          onChange={(e) => setSelectedTheater(e.target.value)}
        >
          {theaterOptions.map((theater) => (
            <option key={theater} value={theater}>
              {theater}
            </option>
          ))}
        </select>
      </div>

      <Button name={"Confirm"} type={"submit"} />
    </form>
  );
};

export default Form;
