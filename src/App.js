import React, { useState } from "react";

function AddDaysToDate() {
  const [startDate, setStartDate] = useState("");
  const [results, setResults] = useState([]);

  const handleStartDateChange = event => {
    setStartDate(event.target.value);
  };

  const formatDateToYYMMDD = date => {
    const year = date.getFullYear().toString().slice(-2);
    const month = date.toLocaleString("default", { month: "short" });
    const day = date.getDate().toString().padStart(2, "0");
    return `${year} ${month} ${day}`;
  };

  const calculateDates = () => {
    const inputDate = new Date(startDate);
    if (!isNaN(inputDate.getTime())) {
      // Create an array of days to calculate
      const daysToCalculate = [
        3, 5, 7, 8, 10, 12, 14, 15, 18, 21, 25, 28, 30, 35, 40, 45
      ];

      // Calculate and format the dates
      const calculatedDates = daysToCalculate.map(daysToAdd => {
        const newDate = new Date(inputDate);
        newDate.setDate(inputDate.getDate() + daysToAdd);

        // Format the date as "YY MM DD"
        const formattedDate = formatDateToYYMMDD(newDate);
        return { days: daysToAdd, formattedDate };
      });

      setResults(calculatedDates);
    } else {
      setResults([]);
    }
  };

  return (
    <div className="app-container">
      <div>
        <h2>Best Before Date Calculator</h2>
        <label>
          Enter a start date:
          <input
            type="date"
            value={startDate}
            onChange={handleStartDateChange}
          />
        </label>
        <button onClick={calculateDates}>Calculate Dates</button>
        {startDate && (
          <h4 className="developer">
            Selected Date: {formatDateToYYMMDD(new Date(startDate))}
          </h4>
        )}
        <div>
          {results.map(result => (
            <p key={result.days}>
              {result.days} days added:&nbsp; &nbsp;
              {result.formattedDate}
            </p>
          ))}
        </div>
      </div>
      <h4 className="developer">
        Developed by:&nbsp; &nbsp;{" "}
        <a className="link" href="https://www.cmkcanada.com/">
          Monica Wolfe
        </a>
      </h4>
    </div>
  );
}

export default AddDaysToDate;
