import React, { useState, useEffect } from "react";

import "./styles/app.scss";

const App = () => {
  const [time, settime] = useState(new Date());

  useEffect(() => {
    setInterval(updateTime, 1000);
  });

  const updateTime = () => {
    settime(new Date());
  };

  const getDayFromTime = () => {
    const days = [
      "Sunday",
      "Monday",
      "Tuesday",
      "Wednesday",
      "Thursday",
      "Friday",
      "Saturday",
    ];
    return days[time.getDay()];
  };

  const getDateFromTime = () => {
    const months = [
      "January",
      "February",
      "March",
      "April",
      "May",
      "June",
      "July",
      "August",
      "September",
      "October",
      "November",
      "December",
    ];

    return `${months[time.getMonth()]} ${time.getDate()} ${time.getFullYear()}`;
  };

  const getTimeFromTime = () => {
    return `${
      time.getHours() > 12
        ? time.getHours() - 12 < 10
          ? "0" + (time.getHours() - 12)
          : time.getHours()
        : time.getHours()
    } : ${
      time.getMinutes() < 10 ? "0" + time.getMinutes() : time.getMinutes()
    }`;
  };

  const getSeconds = () => {
    return `${
      time.getSeconds() >= 10 ? time.getSeconds() : "0" + time.getSeconds()
    }`;
  };

  const getAmPm = () => {
    return time.getHours() >= 12 ? "PM" : "AM";
  };

  return (
    <div className="container">
      <p className="day">{getDayFromTime()}</p>
      <div className="middle">
        <p className="time">{getTimeFromTime()}</p>
        <div className="middle_two">
          <p className="one">{getAmPm()}</p>
          <p className="two">{getSeconds()}</p>
        </div>
      </div>
      <p className="date">{getDateFromTime()}</p>
    </div>
  );
};

export default App;
