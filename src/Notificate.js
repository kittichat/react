import React , {useState, useEffect} from 'react'
import { Link } from 'react-router-dom'

import Notification from './services/notification'

import './css/Notificate.css'

// this page is focus on show all notication for users

function Notificate() {
    const [click, setClick] = useState(false)
    const [notice, setNotice] = useState([])

    const handleClick = () => setClick(!click)
    
    const handleAccept = (id) => {
        Notification.accept(id)
    }

    const handleDecline = () => {

    }

    useEffect(() => {
        
        Notification.get().then(response => {
            setNotice(response.data)
        }
        )
        
    }, [])

    console.log(notice)
    return (
        <div>
            <ul
                // onClick={() => handleClick()}
                className="Dropdownlist"
            >
                
                    {notice && 
                        notice.map((detail) => (
                    
                    <li>
                        <h1>{detail.msg}</h1>

                    <div className="Notification__button">
                         <button 
                            className="Accept__button" 
                            onClick={() => {handleAccept(detail.id)}}
                            >
                                Accept
                        </button>
                        <button 
                            className="Decline__button" 
                            onClick={() => {handleDecline()}}
                            >
                                Decline
                        </button>
                    </div>
                    

                    </li>
    ))}
                  
                
            </ul>        


        </div>
    )
}

export default Notificate
