import React, {useState , useEffect} from 'react'
import GroupList from "../services/groupservices"
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
        <div>
            {/* fetch all group data >> member , payment  */}
            {/* follow makedata in showgroup by use reat-table */}
        </div>
    )
}

export default Groupdetail
