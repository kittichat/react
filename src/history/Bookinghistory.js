import React, { useState, useEffect } from 'react'

import Form from "react-validation/build/form"
import Input from "react-validation/build/input"
import CreatableSelect from 'react-select/creatable';

import BKhistorytable from './BKhistorytable'
import PayOrCancel from './ActionSwitcher/PayOrCancel'
import Refund from './ActionSwitcher/Refund'

import HistoryServices from '../services/history_servies'

import '../css/Bookinghistory.css'

function Bookinghistory() {
    

    const [dataTable, setDataTable] = useState([])
    const [actions, setActions] = useState([])

const handleOption = newValue => {
    if (newValue == null) { return setActions("") }
    setActions(newValue.value)
}

const options = [
    { value: 'Pay/Cancel', label: 'Pay/Cancel' },
    { value: 'Refund', label: 'Refund' },

];


    return (
        <div className="History__booking">
            <div className="HistoryBooking__bg"></div>
            {/* <div className="HistoryBooking__details"> */}
            <div className="HistoryBooking__root">
            <h1 className="HistoryBooking__detail">Booking History</h1>
            <Form >
                <CreatableSelect
                    className="History__dropdown"
                    isClearable
                    onChange={handleOption}
                    options={options}
                />
            </Form>
        {actions?.length
        ?             
        actions == "Refund" 
        ?
        <div className="HistoryBooking__all">
         <Refund />  
        </div>
         :
         <div className="HistoryBooking__all">
          <PayOrCancel />
            </div>
        :
        <div className="HistoryBooking__all">
        <BKhistorytable 
            // className="HistoryBooking__all"
        />
        </div>
        
        }        
        </div>
        </div>    
        // </div>
    )
}

export default Bookinghistory
