// import React from "react";
// import GitHubCalendar from "react-github-calendar";
// import "./calender.css";
// import ReactTooltip from "react-tooltip";

// const Calender = () => {
//   return (
//     <section className="section calender" id="calender">
//       <h2 className="section__title">Calender</h2>
//       <span className="section__subtitle">Most Recent Tasks</span>

//       <div className="main__calender-div ">
//         <a href="https://github.com/paprisaha1999">
//           <img
//             id="github-streak-stats"
//             className="calender__streak"
//             src="https://github-readme-streak-stats.herokuapp.com?user=paprisaha1999&border_radius=5"
//             alt=""
//           />
//         </a>

//         <div className="calender__div react-activity-calendar">
//           <GitHubCalendar
//             style={{ margin: "auto" }}
//             username="paprisaha1999"
//             blockSize={15}
//             // fontSize={15}
//           />
//           <ReactTooltip html />
//         </div>

//         <a href="https://github.com/paprisaha1999">
//           <img
//             id="github-stats-card"
//             className="calender__stats"
//             src="https://github-readme-stats.vercel.app/api?username=paprisaha1999"
//             alt=""
//           />
//         </a>

//         <a href="https://github.com/paprisaha1999">
//           <img
//             id="github-top-langs"
//             className="calender__language"
//             src="https://github-readme-stats.vercel.app/api/top-langs?username=paprisaha1999"
//             alt=""
//           />
//         </a>
//       </div>
//     </section>
//   );
// };

// export default Calender;

import React from "react";
import GitHubCalendar from "react-github-calendar";
import "./calender.css";
import ReactTooltip from "react-tooltip";

const Calender = () => {
  return (
    <section className="section calender" id="calender">
      <h2 className="section__title">Calender</h2>
      <span className="section__subtitle">Most Recent Tasks</span>

      <div className="main__calender-div ">
        <a href="https://github.com/paprisaha1999">
          <img
            id="github-streak-stats"
            className="calender__streak"
            src="https://github-readme-streak-stats.herokuapp.com?user=paprisaha1999&border_radius=5"
            alt=""
          />
        </a>

        <div className="calender__div react-activity-calendar">
          <GitHubCalendar
            style={{ margin: "auto" }}
            username="paprisaha1999"
            blockSize={15}
            // fontSize={15}
          />
          <ReactTooltip html />
        </div>

        <div className="stat_lang">
          <a href="https://github.com/paprisaha1999">
            <img
              id="github-stats-card"
              className="calender__stats"
              src="https://github-readme-stats.vercel.app/api?username=paprisaha1999"
              alt=""
            />
          </a>

          <a href="https://github.com/paprisaha1999">
            <img
              id="github-top-langs"
              className="calender__language"
              src="https://github-readme-stats.vercel.app/api/top-langs?username=paprisaha1999"
              alt=""
            />
          </a>
        </div>
      </div>
    </section>
  );
};

export default Calender;
