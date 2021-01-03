import React , {useState} from 'react'
import { Link } from 'react-router-dom'


function Notificate() {
    const [click, setClick] = useState(false)
    const handleClick = () => setClick(!click)


    return (
        <div>
            <ul>
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
