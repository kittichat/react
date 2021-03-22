import React , {useState, useEffect}from 'react'
import {Link} from 'react-router-dom'
import axios from 'axios'

function ShowGroup(props) {
    const [groupName, setGroupName] = useState(undefined)

    useEffect(() => {
        setGroupName( props.name )     
    })

    // use axios request to server side and add name of group too
    const grouprequest = () => {
        
    }
    console.log(groupName)

    return (
        <div>
            <Link to={'./detail'}>
                {/* both of these are same */}
                {/* <h1 >{props.name}</h1> */}
                <h1>{groupName}</h1>
            </Link>
        </div>
    )
}

export default ShowGroup
