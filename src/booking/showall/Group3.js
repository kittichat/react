import moment from 'moment';
import React, {useState} from 'react'
import Calendar from 'react-calendar'
import 'react-calendar/dist/Calendar.css';
import '../../css/group3.css'

function Group3() {
    // const [value, onChange] = useState(new Date()) 
    const [value, onChange] = useState(new Date())
    const [date, setDate] = useState(0)

    console.log(`${value.getDate()}  ${value.getMonth()} ${value.getYear()}`)
    console.log(value.getFullYear())


    // const handleChange = date => {
    //     onChange({selectedDate: date})
    // }




    return (
        <div className="calendar">
            <Calendar
                value={value}
                onChange={onChange}
                // minDate = {onChange}
                
            />

            <p>{moment(value).format('Do')}</p>
            {/* <h1>{value}</h1> */}
        </div>
    )
}

export default Group3
