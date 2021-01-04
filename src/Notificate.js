import React , {useState} from 'react'
import { Link } from 'react-router-dom'

import './css/Notificate.css'

// this page is focus on show all notication for users

function Notificate() {
    const [click, setClick] = useState(false)
    const handleClick = () => setClick(!click)


    return (
        <div>
            <ul
                onClick={handleClick}
                className="Dropdownlist"
            >
                <li>
                    <h1>Test</h1>
                </li>
                <li>
                    <h1>Test</h1>
                </li>
                <li>
                    <h1>Test</h1>
                </li>    
            </ul>        


        </div>
    )
}

export default Notificate
