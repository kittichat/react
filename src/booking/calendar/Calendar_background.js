import React from 'react'
// import Calendar from './components/Calendar'
import DateSelection from './DateSelection'

import '../../css/Calendar_background.css'

function Calendar_background() {
    return (
        <div className="background">
            <DateSelection />
            <button className="Date__submit">Submit</button>
        </div>
    )
}

export default Calendar_background
