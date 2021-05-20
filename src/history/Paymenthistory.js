import React, { useState, useEffect } from 'react'

import PMhistorytable from './PMhistorytable'

import HistoryServices from '../services/history_servies'

import '../css/Paymenthistory.css'

function Paymenthistory() {

    return (
        <div className="History__payment">
            <div className="HistoryPayment__bg"></div>
            <div className="HistoryPayment__root">
            <h1 className="HistoryPayment__detail">Payment History</h1>
            <div className="HistoryPayment__all"> 
            <PMhistorytable />
            </div>
            </div>
        </div>
    )
}

export default Paymenthistory
