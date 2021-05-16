import React, { useState, useEffect } from 'react'
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
                window.alert("Accept successfully"),
                window.location.reload()
            )

    }

    const handleDecline = (detail) => {
        Notification.decline(
            detail.id,
        )
            .then(
                window.alert("Decline successfully"),
                window.location.reload()
            )
    }

    useEffect(() => {

        Notification.get().then(response => {
            setNotice(response.data)
        }
        )

    }, [])


    return (
        <div>
            {!notice?.length
                ?
                <li className="Dropdownlist">
                    <h1
                        style={{
                            color: "black",
                            fontSize: "15px",
                            padding: "2px",
                            backgroundColor:"rgb(200, 200, 200)"
                        }}
                    >
                        No information right here
                    </h1>
                </li>
                :
                <ul
                    className="Dropdownlist"
                >
                    {notice &&
                        notice.map((detail) => (
                            <li>
                                <h1 className="Notification__detail">{`${detail.msg} ${detail.group}`}</h1>
                                <div className="Notification__button">
                                    <button
                                        className="Accept__button"
                                        onClick={() => { handleAccept(detail) }}
                                    >
                                        Accept
                                </button>
                                    <button
                                        className="Decline__button"
                                        onClick={() => { handleDecline(detail) }}
                                    >
                                        Decline
                                </button>
                                </div>
                            </li>
                        ))}
                </ul>
            }
        </div>
    )
}

export default Notificate
