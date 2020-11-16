import React from 'react'
import './css/Beforebooking.css'
import {Link} from 'react-router-dom'
import { LineStyle } from '@material-ui/icons'

function Beforebooking() {
    return (
        // <div className="booking">
        //     <h1>Booking Page</h1>
        // </div>

        
        <div className="booking__page">
            <div className="booking__process">
                <h1 >How to booking </h1>
            </div>
            
            <div className="booking__verticalline"></div>

            <div className="booking__redirect">
                <Link to={'./afterbooking'}>
                    <button className="booking__button"  >Start</button>
                </Link>            
            </div>


        </div>
     

    )
}

export default Beforebooking
