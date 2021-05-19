import React, {useState, useEffect} from 'react'
import '../css/Contact.css';

import ComponentService from '../services/component_service'

function Contact() {
    const [data, setData] =  useState(undefined)

    useEffect(() => {
        ComponentService.Details().then(response => {
            setData(response.data.contacts)
        })
    }, [])

    return (
        <div className="contact__background">
                {/* <h1 className="test__contact">Contact page</h1> */}
                <h1 className="test__contact">{data}</h1>
        </div>
    )
}

export default Contact
