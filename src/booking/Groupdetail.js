import React, {useState , useEffect} from 'react'
import GroupList from "../services/groupservices"

import '../css/Groupdetail.css'

function Groupdetail(props) {

   const [CurrentGroup, setCurrentGroup] = useState()  // match with table
    const getGroup = name => {
        GroupList.get(name)
            .then(response => {
                setCurrentGroup(response.data)
                console.log(response.data)
            })
            .catch(e => {
                console.log(e)
            })
    }


    useEffect(() => {
        getGroup(props.match.params.id)

    }, [props.match.params.id])



    return (
        <div className="group__detail">
            {/* fetch all group data >> member , payment  */}
            {/* follow makedata in showgroup by use reat-table */}
            <h1><p>This page intended to show the detail of each group about 
                user and groups information
                </p>
            </h1>
        </div>
    )
}

export default Groupdetail
