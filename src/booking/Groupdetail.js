import React, {useState , useEffect} from 'react'
import GroupList from "../services/groupservices"

import {useTable}  from 'react-table'

import '../css/Groupdetail.css'

import Data from '../api/group__members'

function Groupdetail(props) {

   const [CurrentGroup, setCurrentGroup] = useState(undefined)  // match with table
   const [presentGroup, setPresentGroup] = useState(undefined)
   const [members, setMembers] = useState([])
   const [authrority, setAuthority] = useState(false)
   const [role, setRole] = useState(undefined)
   const [dataTerm, setData] = useState([])

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
     
      const group = GroupList.getCurrentGroup()
       setPresentGroup(
        GroupList.getCurrentGroup()
    )
        
        GroupList.getMembers(group)
        .then(response =>{
          console.log(response.data.member)
          handleMembers(response.data.member)
          authorityCheck(response.data.role)
        })
        // set members to data variable
    
        // handleMembers()

        // authorityCheck(role)

    }, [])
    // console.log("this is members")
    // console.log(members)
    console.log("this is dataTerm")
    console.log(dataTerm)
    console.log(Data)

    const handleMembers = (members) => {
      let count = 0
      const dataTemp = []
      for(let i in members){
        console.log("i information")
        console.log(members[i])
        dataTemp.push({
          sequence:count,
          member:members[i]
        })
      count++
      }
      return setData(
        dataTemp
      )
    }

    const authorityCheck = (role) => {
      if (role == "header"){
        setAuthority(true)
      }else if( role == "member"){
        setAuthority(false)
      }
    }

    const handleJoin = () => {
      
    }

    const handleLeave = () => {

    }

    const handleAccept = (cell) => {

    }

    const handleDelete = (cell) => {

    }

    const columns = React.useMemo(
        () => [
            {
                Header: "Numbers",
                accessor:"sequence"
            },
            {
                Header:"Members",
                accessor:"member"
            }
        ],
        []
    )
    
    const data  = React.useMemo( () => Data,[])

    
   const {
     getTableProps,
     getTableBodyProps,
     headerGroups,
     rows,
     prepareRow,
   } = useTable({ columns, data })

    return (
        <div className="group__detail">
            {/* fetch all group data >> member , payment  */}
            {/* follow makedata in showgroup by use reat-table */}
            <h1><p>This page intended to show the detail of each group about 
                user and groups information
                </p>
            </h1>
            {/* <h1>{props.nameOfGroup}</h1> */}
            <h1>{presentGroup}</h1>
            <h1>ok</h1>

                 <table {...getTableProps()} style={{ border: 'solid 1px blue' }}>
       <thead>
         {headerGroups.map(headerGroup => (
           <tr {...headerGroup.getHeaderGroupProps()}>
             {headerGroup.headers.map(column => (
               <th
                 {...column.getHeaderProps()}
                 style={{
                   borderBottom: 'solid 3px red',
                   background: 'aliceblue',
                   color: 'black',
                   fontWeight: 'bold',
                 }}
               >
                 {column.render('Header')}
               </th>
             ))}
           </tr>
         ))}
       </thead>
       <tbody {...getTableBodyProps()}>
         {rows.map(row => {
           prepareRow(row)
           return (
             <tr {...row.getRowProps()}>
               {row.cells.map(cell => {
                 return (
                   <td
                     {...cell.getCellProps()}
                     style={{
                       padding: '10px',
                       border: 'solid 1px gray',
                       background: 'papayawhip',
                     }}
                   >
                     {cell.render('Cell')}
                   </td>
                 )
               })}
             </tr>
           )
         })}
       </tbody>
     </table>
    { authrority ?
      
    //  CHeck Is this Header or not
     <div>
     <button 
                type="submit"
                className="Accept__member"
            >
               Accept 
            </button>
            <button
                type="submit"
                className="Delete__member"
            >
                Delete   
            </button>
     </div>
    //  this is for member
     :
        <div>
            <button 
                type="submit"
                className="Join__group"
                onClick = {() => handleJoin()}
            >
                Join
            </button>
            <button
                type="submit"
                className="Leave__group"
                onClick = {() => handleLeave()}
            >
                Leave
            </button>
        </div>
} 
        </div>
    )
}

export default Groupdetail
