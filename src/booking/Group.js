import React, { useState, useEffect } from 'react'
import { Link } from 'react-router-dom'

import { Container } from './group/Container'
import { GroupContainer } from './GroupCreated/Container'
import ShowGroup from './ShowGroup'
import Groupdetail from './Groupdetail'

import value from "../api/allgroup"
import GroupList from "../services/groupservices"
import GroupList_single_service from '../services/getAllgroup_service'


import '../css/Group.css'

function Group() {
    const triggerText = 'Create Group'

    const onSubmit = (event) => {
        event.preventDefault(event)
    }

    const [Listofgroup, setListofgroup] = useState([])

    useEffect(() => {
        retrieveAllgroup()
    }, [])


    const retrieveAllgroup = () => {
        GroupList.getAll()
            .then(response => {
                setListofgroup(response.data.data)   // data is list of name of group
                console.log(response.data.data)
                const x = response.data.data
                console.log(x[0])
            })
            .catch(e => {
                console.log(e)
            })
    }


    const handleClick = (group) => {
        GroupList.setGroup(group)

    }

    return (
        <div className="list_row">
            <div className="background"></div>
            <ul className="list_group" >
                {Listofgroup &&
                    Listofgroup.map((group, index) => (
                        <Link to={"/detail/"} >

                            < li
                                className="list_groupname"
                                onClick={() => handleClick(group)}
                                style={{ textDecoration: "none" }}
                            >

                                {group.group_name}
                            </li>
                        </Link>
                    ))}
            </ul>

            <Container
                className="submit_select"
                triggerText={triggerText}
                onSubmit={onSubmit} />

            <div>

            </div>
        </div>
    )
}

export default Group
