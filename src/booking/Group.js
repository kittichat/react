import React, { useState, useEffect } from 'react'
import {Link} from 'react-router-dom'

import { Container} from './group/Container'
import {GroupContainer} from './GroupCreated/Container'
import ShowGroup from './ShowGroup'
import Groupdetail from './Groupdetail'

import value from "../api/allgroup"
import GroupList from "../services/groupservices"


import '../css/Group.css'

function Group() {
    

    const triggerText = 'Create Group'
    const onSubmit = (event) =>{
        event.preventDefault(event)
    }

    // I think this part is no needed any more also include showGroup too.
    // const Group_component =  value.map(response => <ShowGroup name={response.name} />)

    // const [Listofgroup , setListofgroup] = useState([])
    // const [nameOfGroup, setNameOfGroup] = useState(undefined)

    // useEffect(() => {
    //    retrieveAllgroup() 
    // }, [])


    // const retrieveAllgroup = () =>{
    //     GroupList.getAll()
    //         .then(response => {
    //             setListofgroup(response.data.data)   // data is list of name of group
    //             console.log(response.data.data)
    //             const x = response.data.data
    //             console.log(x[0])
    //         })
    //         .catch(e => {
    //             console.log(e)
    //         })
    // }


    // const handleClick = (group) => {
    //     GroupList.setGroup(group)
    // }
    // console.log(nameOfGroup)
    // const test = Listofgroup
    // console.log(test.data[0])


    return (
        <div className="list_row">
            
        {/* <ul className="list_group" >
            {Listofgroup &&
                Listofgroup.map((group, index) => (
                    <Link to={"/detail/"} >
                    
                        < li 
                            className="list_groupname"
                            onClick = {() => handleClick(group)} 

                            >
                             
                                {group.group_name}
                        </li>
                    </Link>
                ))}
        </ul> */}

        <Container triggerText={triggerText} onSubmit={onSubmit} />
        {/* <GroupContainer triggerText={triggerText} onSubmit={onSubmit} /> */}


        <div>
           
             {/* <ShowGroup name={group.name} /> */}
            {/* {Group_component}

            <Link to={'./group2'}>
                <h1>group2</h1>
            </Link> */}
        </div>
        </div>
    )
}

export default Group
