import React, { useState, useEffect } from 'react'

import PMhistorytable from './PMhistorytable'

import HistoryServices from '../services/history_servies'

import '../css/Paymenthistory.css'

function Paymenthistory() {

    return (
        <div className="History__payment">
            <h1>Payment History</h1>

            <PMhistorytable />
        </div>
    )
}

export default Paymenthistory
