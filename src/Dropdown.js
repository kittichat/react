import React, {useState} from 'react'
import { Link } from 'react-router-dom'

import './css/Dropdown.css'

function Dropdown() {
    const [click, setClick] = useState(false)

    const handleClick = () => setClick(!click)
    
    return (
        <div>
            <ul
                onClick={handleClick}
                className="Dropdownlist"
            >
                <li>
                    <Link to={"./profile"} className="list_detail">
                        Profile
                    </Link>
                </li>
                <li>
                    <Link to={"./paymenthistory" } className="list_detail">
                        Payment History
                    </Link>
                </li>
                <li>
                    <Link to={"./bookinghistory"} className="list_detail">
                        Booking History
                    </Link>
                </li>
            
                
            </ul>
            
        </div>
    )
}

export default Dropdown
