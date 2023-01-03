import React, { useState } from "react";
import "../css/BookingForm.css";

function BookingForm(props) {
  const [date, setDate] = useState(new Date().toISOString().slice(0, 10));
  const [time, setTime] = useState("");
  const [guests, setGuests] = useState("1");
  const [occasion, setOccasion] = useState("Birthday");

  function handleSubmit(event) {
    event.preventDefault();
    const formData = {
      date: date,
      time: time,
      guests: guests,
      occasion: occasion,
    };

    fetch("http://localhost:8080/book-table", {
      method: "POST",
      body: JSON.stringify(formData),
      headers: {
        "Content-Type": "application/json",
      },
    })
      .then((response) => response.json())
      .then((response) => {
        if(response) window.alert("Your booking was successful");
      });
  }

  function handleDateChange(event) {
    setDate(event.target.value);
    props.updateTimes(date);
  }

  function handleTimeChange(event) {
    setTime(event.target.value);
  }

  function handleGuestsChange(event) {
    setGuests(event.target.value);
  }

  function handleOccasionChange(event) {
    setOccasion(event.target.value);
  }

  return (
    <div className="bookingForm-flex-container">
    <div className="flex-item bookingForm-flex-item-1">
    <form style={{ display: "grid", maxWidth: "200px", gap: "20px" }}>
      <label htmlFor="res-date">Choose date</label>
      <input
        type="date"
        id="res-date"
        value={date}
        onChange={handleDateChange}
        required
      />
      <label htmlFor="res-time">Choose time</label>
      <select id="res-time" value={time} onChange={handleTimeChange} required>
        {props.availableTimes.map((availableTime) => (
          <option key={availableTime}>{availableTime}</option>
        ))}
      </select>
      <label htmlFor="guests">Number of guests</label>
      <input
        type="number"
        placeholder="1"
        min="1"
        max="10"
        id="guests"
        value={guests}
        onChange={handleGuestsChange}
        required
      />
      <label htmlFor="occasion">Occasion</label>
      <select
        id="occasion"
        value={occasion}
        onChange={handleOccasionChange}
        required
      >
        <option>Birthday</option>
        <option>Anniversary</option>
      </select>
      <input type="submit" value="Make Your reservation" onClick={handleSubmit}/>
    </form>
    </div>
    </div>
  );
}

export default BookingForm;
