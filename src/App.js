import React, { useState } from "react";

function AddDaysToDate() {
  const initialDate = new Date().toISOString().split("T")[0]; // Get today's date in the "YYYY-MM-DD" format
  const [startDate, setStartDate] = useState(initialDate); // Initialize with today's date
  const [results, setResults] = useState([]);

  const handleStartDateChange = event => {
    setStartDate(event.target.value);
  };

  const formatDateToDDMonYY = date => {
    const day = date.getDate().toString().padStart(2, "0");
    const monthNames = [
      "Jan",
      "Feb",
      "Mar",
      "Apr",
      "May",
      "Jun",
      "Jul",
      "Aug",
      "Sep",
      "Oct",
      "Nov",
      "Dec"
    ];
    const monthIndex = date.getMonth();
    const year = date.getFullYear().toString().slice(-2);
    return `${year} ${monthNames[monthIndex]} ${day}`;
  };

  const calculateDates = () => {
    const inputDate = new Date(startDate);
    if (!isNaN(inputDate.getTime())) {
      const daysToCalculate = [
        3, 4, 5, 7, 8, 10, 12, 14, 15, 18, 21, 25, 28, 30, 35, 40, 45, 60
      ];

      const calculatedDates = daysToCalculate.map(daysToAdd => {
        const newDate = new Date(inputDate);
        // Start counting from the day after the selected date
        newDate.setDate(inputDate.getDate() + 1 + daysToAdd);
        return { days: daysToAdd, formattedDate: formatDateToDDMonYY(newDate) };
      });

      setResults(calculatedDates);
    } else {
      setResults([]);
    }
  };

  return (
    <div className="app-container">
      <div>
        <h3>Best Before Date Calculator</h3>
        <label>
          Enter the 1st day counted date:&nbsp;
          <input
            type="date"
            value={startDate}
            onChange={handleStartDateChange}
          />
        </label>
        <button onClick={calculateDates}>Calculate Dates</button>

        {startDate && (
          <h4 className="developer" style={{ color: getRandomColor() }}>
            Date Started: {startDate}
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
        Check this out too:&nbsp; &nbsp;
        <a className="link" href="https://celadon-nougat-f50b41.netlify.app/">
          Input your own best before dates.
        </a>
      </h4>
      <h4 className="developer">
        Developed by:&nbsp; &nbsp;
        <a className="link" href="https://www.cmkcanada.com/">
          Monica Wolfe
        </a>
      </h4>
    </div>
  );
}

export default AddDaysToDate;

// Function to generate a random color
const getRandomColor = () => {
  const colors = ["#0048BA", "#9966CC", "#DA1884"];
  return colors[Math.floor(Math.random() * colors.length)];
};

// import React, { useState } from "react";

// function AddDaysToDate() {
//   const initialDate = new Date().toISOString().split("T")[0]; // Get today's date in the "YYYY-MM-DD" format
//   const [startDate, setStartDate] = useState(initialDate); // Initialize with today's date
//   const [results, setResults] = useState([]);

//   const handleStartDateChange = event => {
//     setStartDate(event.target.value);
//   };

//   const formatDateToDDMonYY = date => {
//     const day = date.getDate().toString().padStart(2, "0");
//     const monthNames = [
//       "Jan",
//       "Feb",
//       "Mar",
//       "Apr",
//       "May",
//       "Jun",
//       "Jul",
//       "Aug",
//       "Sep",
//       "Oct",
//       "Nov",
//       "Dec"
//     ];
//     const monthIndex = date.getMonth();
//     const year = date.getFullYear().toString().slice(-2);
//     return `${year} ${monthNames[monthIndex]} ${day}`;
//   };

//   const calculateDates = () => {
//     const inputDate = new Date(startDate);
//     if (!isNaN(inputDate.getTime())) {
//       const daysToCalculate = [
//         3, 4, 5, 7, 8, 10, 12, 14, 15, 18, 21, 25, 28, 30, 35, 40, 45
//       ];

//       const calculatedDates = daysToCalculate.map(daysToAdd => {
//         const newDate = new Date(inputDate);
//         // Start counting from the day after the selected date
//         newDate.setDate(inputDate.getDate() + 1 + daysToAdd);
//         return { days: daysToAdd, formattedDate: formatDateToDDMonYY(newDate) };
//       });

//       setResults(calculatedDates);
//     } else {
//       setResults([]);
//     }
//   };

//   return (
//     <div className="app-container">
//       <div>
//         <h3>Best Before Date Calculator</h3>
//         <label>
//           Enter the date:&nbsp;
//           <input
//             type="date"
//             value={startDate}
//             onChange={handleStartDateChange}
//           />
//         </label>
//         <button onClick={calculateDates}>Calculate Dates</button>

//         {startDate && <h4 className="developer">Date Started: {startDate}</h4>}
//         <div>
//           {results.map(result => (
//             <p key={result.days}>
//               {result.days} days added:&nbsp; &nbsp;
//               {result.formattedDate}
//             </p>
//           ))}
//         </div>
//       </div>
//       <h4 className="developer">
//         Check this out too:&nbsp; &nbsp;
//         <a className="link" href="https://celadon-nougat-f50b41.netlify.app/">
//           Input your own best before dates.
//         </a>
//       </h4>
//       <h4 className="developer">
//         Developed by:&nbsp; &nbsp;
//         <a className="link" href="https://www.cmkcanada.com/">
//           Monica Wolfe
//         </a>
//       </h4>
//     </div>
//   );
// }

// export default AddDaysToDate;
