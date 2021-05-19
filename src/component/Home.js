import React, {useState, useEffect} from 'react'
import '../css/Home.css';

import ComponentService from '../services/component_service'

function Home() {
    const [data, setData] =  useState(undefined)

    useEffect(() => {
        ComponentService.Details().then(response => {
            setData(response.data.announce)
        })
    }, [])
    return (
        <div className="home__background">
            {/* <h1 className="home__text">Home page</h1> */}
            <h1 className="home__text">{data}</h1>
        </div>
        
    )
}

export default Home
