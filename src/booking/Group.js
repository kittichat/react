// import React, { useState, useEffect } from 'react'
// import {Link} from 'react-router-dom'

// import { Container} from './group/Container'

// import value from "../api/allgroup"


// import '../css/Group.css'

// function Group() {
//     const [group1, setGroup1] = useState(undefined);
//     const [group2, setGroup2] = useState(undefined);
//     const [group3, setGroup3] = useState(undefined);
//     const [group4, setGroup4] = useState(undefined);
//     const [group5, setGroup5] = useState(undefined);
//     const [group6, setGroup6] = useState(undefined);
//     const [group7, setGroup7] = useState(undefined);
//     const [group8, setGroup8] = useState(undefined);
//     const [group9, setGroup9] = useState(undefined);
//     const [group10, setGroup10] = useState(undefined);
  
//     useEffect(() => {

//         setGroup1(() => value.group1)
//         setGroup2(() => value.group2)
//         setGroup3(() => value.group3)
//         setGroup4(() => value.group4)
//         setGroup5(() => value.group5)
//         setGroup6(() => value.group6)
//         setGroup7(() => value.group7)
//         setGroup8(() => value.group8)
//         setGroup9(() => value.group9)
//         setGroup10(() => value.group10)


//     })
//     console.log(group1)

    
//     const triggerText = 'Create Group'
//     const onSubmit = (event) =>{
//         event.preventDefault(event)
//     }



//     return(
//         <div className="Group">
//             {/* <div className="Group1">  */}

//             {/* at this point i try to crete form for create group */}
//             {/* <button type="submit" onClick={ () => alert(<CreateFrom />)}>Create</button> */}
//             <Container triggerText={triggerText} onSubmit={onSubmit} />


//             <div>
//                 <Link to={"/group1"}><h1 className="Group1">{group1}</h1></Link>
//                 <Link to={"/group2"}><h1 className="Group1">{group2}</h1></Link>
//                 <Link to={"/group3"}><h1 className="Group1">{group3}</h1></Link>
//                 <Link to={"/group4"}><h1 className="Group1">{group4}</h1></Link>
//                 <Link to={"/group5"}><h1 className="Group1">{group5}</h1></Link>
//                 <Link to={"/group6"}><h1 className="Group1">{group6}</h1></Link>
//                 <Link to={"/group7"}><h1 className="Group1">{group7}</h1></Link>
//                 <Link to={"/group8"}><h1 className="Group1">{group8}</h1></Link>
//                 <Link to={"/group9"}><h1 className="Group1">{group9}</h1></Link>
//                 <Link to={"/group10"}><h1 className="Group1">{group10}</h1></Link>
//             </div>
//             {/* </div> */}
//         </div>
//     )
 
// }

// export default Group


import React, { useState, useEffect } from 'react'
import {Link} from 'react-router-dom'

import { Container} from './group/Container'
import ShowGroup from './ShowGroup'

import value from "../api/allgroup"
import GroupList from "../services/groupservices"

import '../css/Group.css'

function Group() {
    // const [ group, setGroup] = useState({})
    
    // useEffect(() => {
    
    //     setGroup(
    //         value
    //     )
    // })
   
    //  console.log(group)
    // console.log(group)

    const triggerText = 'Create Group'
    const onSubmit = (event) =>{
        event.preventDefault(event)
    }

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
        <ul className="list-group" >
            {Listofgroup &&
                Listofgroup.map((group, index) => (
                    <Link to={"/detail/" + group.title} >
                        < li 
                            // className={
                            //     "list-group-item " + (index === currentIndex ? "actice" : "")
                            // }
                            >
                                
                                {group.title}
                        </li>
                    </Link>
                ))}
        </ul>

                     <Container triggerText={triggerText} onSubmit={onSubmit} />



        <div>
             {/* <ShowGroup name={group.name} /> */}
            {Group_component}
        </div>
        </div>
    )
}

export default Group
