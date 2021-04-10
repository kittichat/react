import React from 'react'
// import Calendar from './components/Calendar'
import DateSelection from './DateSelection'

import '../../css/Calendar_background.css'

import DateBooking from '../../services/booking_service'

function Calendar_background() {

    return (
        <div className="background">
            <DateSelection />
            
        </div>
    )
}

export default Calendar_background
