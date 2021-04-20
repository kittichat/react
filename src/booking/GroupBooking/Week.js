import React, { useState, useEffect } from 'react'

import 'react-dropdown/style.css'
import Dropdown from 'react-dropdown';
import 'react-dropdown/style.css';
// import Form from "react-validation/build/form"

import '../../css/Week.css'

function Week() {

    const [day, setDay] = useState(undefined)

    useEffect(() => {

    }, [])

    const options = [
        'Monday',
        'Tuesday',
        'Wednesday',
        'Thursday',
        'Friday',
        "Saturday",
        "Sunday"

    ];
    const defaultOption = options[0];
    
    const handleOption = (e) => {
        // setDay(e.target.value)
        console.log(day)
    }

    console.log(day)
    return (
        <div className="Week">
            <Dropdown 
                className="week__dropdown"
                options={options}
                onChange={() => handleOption()} 
                value={day} 
                placeholder="Select an option" />;


            <p>


                <h1>this is for Group booking page</h1>
                <h1>{day}</h1>
            </p>
        </div>
    )
}

export default Week
