import React , {useState, useEffect}from 'react'
import {Link} from 'react-router-dom'
import axios from 'axios'
import { LeakRemoveTwoTone } from '@material-ui/icons'

import Groupdetail from './Groupdetail'

function ShowGroup(props) {
    const [groupName, setGroupName] = useState(undefined)
    const [temp, setTemp] = useState("test")

    useEffect(() => {
        setGroupName( props.name )     
    })

    // use axios request to server side and add name of group too
    const grouprequest = () => {
        
    }
    console.log(groupName)

    const handleClick = (groupName) => {
        setTemp({
            groupName
        })

    }

    const groupTemp = temp
    

    return (
        <div>
        <div>
            <Link to={'./detail'}>
                {/* both of these are same */}
                {/* <h1 >{props.name}</h1> */}
                <h1
                    onClick = {() => {handleClick(groupName)}}
                >{groupName}</h1>
            </Link>
        </div>

        <div>
            {/* <Groupdetail groupName2={"testsomething"} /> */}
        </div>
        </div>
    )
}

export default ShowGroup
