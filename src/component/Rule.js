import React, {useState, useEffect} from 'react'
import '../css/Rule.css';

import ComponentService from '../services/component_service'

function Rule() {

    const [data, setData] =  useState(undefined)
        useEffect(() => {
            ComponentService.Details().then(response => {
                setData(response.data.rules)
            })
        }, [])
    

    return (
        <div className="rule__background">
            {/* <h1 className="topic__page">Rule page</h1> */}
            <h1 className="topic__page">{data}</h1>
        </div>
    )
}

export default Rule;
