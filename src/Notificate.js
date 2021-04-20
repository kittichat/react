import React , {useState, useEffect} from 'react'
import { Link } from 'react-router-dom'

import Notification from './services/notification'

import './css/Notificate.css'

// this page is focus on show all notication for users

function Notificate() {
    const [click, setClick] = useState(false)
    const [notice, setNotice] = useState([])

    const handleClick = () => setClick(!click)
    
    const handleAccept = (detail) => {
        Notification.accept(
            detail.id,
        )
        .then(
            window.location.reload()
        )

    }

    const handleDecline = (detail) => {
        Notification.decline(
            detail.id,
            
        )
        .then(
            window.location.reload()
        )
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
                        <h1>{`${detail.msg} ${detail.group}`}</h1>

                    <div className="Notification__button">
                         <button 
                            className="Accept__button" 
                            onClick={() => {handleAccept(detail)}}
                            >
                                Accept
                        </button>
                        <button 
                            className="Decline__button" 
                            onClick={() => {handleDecline(detail)}}
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
