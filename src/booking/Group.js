import React, { useState, useEffect } from 'react'
import {Link} from 'react-router-dom'

import { Container} from './group/Container'
import ShowGroup from './ShowGroup'

import value from "../api/allgroup"
import GroupList from "../services/groupservices"


import '../css/Group.css'

function Group() {
    

    const triggerText = 'Create Group'
    const onSubmit = (event) =>{
        event.preventDefault(event)
    }

    // I think this part is no needed any more also include showGroup too.
    const Group_component =  value.map(response => <ShowGroup name={response.name} />)

    const [Listofgroup , setListofgroup] = useState([])

    useEffect(() => {
       retrieveAllgroup() 
    }, [])


    const retrieveAllgroup = () =>{
        GroupList.getAll()
            .then(response => {
                setListofgroup(response.data)   // data is list of name of group
                console.log(response.data)
            })
            .catch(e => {
                console.log(e)
            })
    }

    return (
        <div className="list_row">
            <h1>test</h1>
            <h1>test</h1>
            <h1>test</h1>
            <h1>test</h1>
        {/* <ul className="list-group" >
            {Listofgroup &&
                Listofgroup.map((group, index) => (
                    <Link to={"/detail/"} >
                        < li 
                            
                            
                            > */}
                                {/* this part not already used cause it needs real group data */}
                                {/* {group.title}
                        </li>
                    </Link>
                ))}
        </ul> */}

                     <Container triggerText={triggerText} onSubmit={onSubmit} />



        <div>
             {/* <ShowGroup name={group.name} /> */}
            {Group_component}

            <Link to={'./group2'}>
                <h1>group2</h1>
            </Link>
        </div>
        </div>
    )
}

export default Group
