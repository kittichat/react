import React , {useState, useEffect} from 'react'

import '../css/Paymenthistory.css'

import value from '../api/profile_data'

function Paymenthistory() {

    const [firstname, setFirstname] = useState("")

    useEffect( () => 
        setFirstname(value.gender)
    )

    console.log(firstname)

    return (
        <div className="History__payment">
            <h1>Payment History</h1>
            
            <h1>{firstname}</h1>


        </div>
    )
}

export default Paymenthistory
