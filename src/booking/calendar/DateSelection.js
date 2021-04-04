import React from "react";

import Calendar from "./components/Calendar";

import "../../css/DateSelection.css";

class DateSelection extends React.Component {
  render() {
    return (
      // <div className="calendar">
      <div className="DateSelection">
        <header>
          <div id="logo">
            <span className="icon">date_range</span>
            <span>
              react<b>calendar</b>
            </span>
          </div>
        </header>
        <main>
          <Calendar />
        </main>
      </div>
      // </div>
    );
  }
}

export default DateSelection;