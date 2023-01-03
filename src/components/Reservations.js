import React from "react";
import BookingForm from "./BookingForm";
import { useEffect, useReducer, useState } from "react";

function bookingReducer(state, action) {
  switch (action.type) {
    case "SET_AVAILABLE_TIMES":
      return {
        ...state,
        availableTimes: action.times,
      };
    case "UPDATE_AVAILABLE_TIMES":
      console.log(action.payload);
      return {
        ...state,
        availableTimes: action.payload,
      };
    default:
      return state;
  }
}

function Reservations() {
  const [state, dispatch] = useReducer(bookingReducer, {
    availableTimes: [],
  });

  function initializeTimes() {
    const today = new Date();
    
    const formattedDate = today.toISOString().substring(0, 10);

    //Spring Boot webserver is developed and running local. All requests are fired there.

    return fetch(`http://localhost:8080/get-times?date=${formattedDate}`)
      .then((response) => response.json())
      .catch((error) => console.log(error));
  }

  useEffect(() => {
    initializeTimes().then((times) => {
      console.log(times)
      dispatch({ type: "SET_AVAILABLE_TIMES", times });
    });
  }, []);

  function updateTimes(date) {
    // Update the availableTimes state based on the selected date
    const dateObj = new Date(date);
    const formattedDate = dateObj.toISOString().substring(0, 10);

    //Spring Boot webserver is developed and running local. All requests are fired there.

    return fetch(`http://localhost:8080/get-times?date=${formattedDate}`)
    .then((response) => response.json())
    .then((times) => {
      dispatch({
        type: "UPDATE_AVAILABLE_TIMES",
        payload: times,
      });
    })
    .catch((error) => console.error(error));
  }

  return (
    <BookingForm
      availableTimes={state.availableTimes}
      updateTimes={updateTimes}
    />
  );
}

export default Reservations;
