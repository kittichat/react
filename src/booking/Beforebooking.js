import React from 'react'
import '../css/Beforebooking.css'
import { Link } from 'react-router-dom'
import { LineStyle } from '@material-ui/icons'

function Beforebooking() {
    return (

        <div className="booking__page">
            <div className="booking__process">
                <h1 >                    
                    <p>How to booking</p>
                </h1>
            </div>

            <div className="booking__verticalline"></div>

            <div className="booking__redirect">
                <h1 className="define__detail">Booking court for Individual</h1>
                <Link to={'./dateselection'}>
                    <button className="user__button">Start</button>
                </Link>
                <h1 className="define__detail">Booking court for Group</h1>
                <Link to={'./groupbooking'}>
                    <button className="group__button"  >Start</button>
                </Link>

            </div>



        </div>


    )
}

export default Beforebooking
