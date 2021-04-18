import React, { useState, useEffect } from 'react'

import GroupList from "../services/groupservices"

import Grouptable from './Grouptable'
import { useTable } from 'react-table'

import '../css/Groupdetail.css'

import Data from '../api/group__members'

import button from 'react-validation/build/button'
import { ContactSupportOutlined } from '@material-ui/icons'

function Groupdetail(props) {

  const [CurrentGroup, setCurrentGroup] = useState(undefined)  // match with table
  const [presentGroup, setPresentGroup] = useState(undefined)
  const [members, setMembers] = useState([])
  const [authority, setAuthority] = useState(0)
  const [role, setRole] = useState(undefined)
  const [dataTerm, setData] = useState([])
  const [isPrivacy, setPrivacy] = useState(false)
  const [joingroup, setJoin] = useState(undefined)
  const [yes, setYes] = useState([])

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
      .then(response => {
        console.log(response.data.member)
        handleMembers(response.data.member)
        authorityCheck(response.data.role)
        setJoin(response.data.group_name)

      })

  }, [])
  // console.log("this is members")
  // console.log(members)
  console.log("this is dataTerm")
  console.log(dataTerm)
  console.log(Data)

  const handleMembers = (members) => {
    let count = 0
    const dataTemp = []
    for (let i in members) {
      console.log("i information")
      console.log(members[i])
      dataTemp.push({
        sequence: count,
        member: members[i]
      })
      count++
    }
    return setData(
      dataTemp
    )
  }

  const authorityCheck = (role) => {
    if (role == "header") {
      setAuthority(0)
    } else if (role == "member") {
      setAuthority(1)
    } else if (role == "wating") {
      setAuthority(2)
    } else {
      setAuthority(3) //this case status is free
    }
    console.log("the authority is ", authority)
    console.log("this is role ", role)
    console.log(typeof (role))
  }

  // ***************************************************************************
  // Services is here

  const handleJoin = () => {

    GroupList.joinGroup(joingroup)
      .then(
        window.alert("Your request is successful"),
        window.location.reload()
      )
    console.log(joingroup)
  }

  const handleLeave = () => {
    GroupList.leaveGroup()
      .then(
        window.location.reload()
      )
  }

  const handleDelete = (cell) => {

  }

  const handleCancel = () => {
    GroupList.cancel()
      .then(
        window.location.reload()
      )
  }

  const handlePrivacy = (status) => {
    if (status) {
      //send request to server that want to set group to public
    } else {
      //send request to server that want to set group to private
    }
    setPrivacy(!status)
  }

  // services
  // ***************************************************************************
  const header = () => {
    return (
      isPrivacy ?
        <button
          className="privacy__on"
          onClick={() => { handlePrivacy(false) }}
        >
          ON
          </button>
        :
        <button
          className="privacy__off"
          onClick={() => handlePrivacy(true)}
        >
          OFF
          </button>
    )

  }

  const member = () => {
    return <button
      className="member__leave"
      onClick={() => handleLeave()}
    >
      Leave
              </button>
  }

  const free = () => {
    return <button
      className="free__join"
      onClick={() => handleJoin()}
    >
      Join
              </button>

  }

  const wating = () => {
    return <button
      className="wating__cancel"
      onClick={() => handleCancel()}

    >
      Cancel
               </button>
  }

  const handleRole = (authority) => {
    switch (authority) {
      case 0:
        // return console.log("this is header")
        return header();
      case 1:
        return member();
      case 2:
        return wating();
      case 3:
        return free();
      default:
        break;
    }
  }

  const columns = React.useMemo(
    () =>
      //  (role == "header")
      //   ?
      [
        {
          Header: "Numbers",
          accessor: "sequence"
        },
        {
          Header: "Members",
          accessor: "member"
        },
        {
          Header: "Delete",
          accessor: "manage"
        }
      ]
    ,
    []
  )

  const data = React.useMemo(() => Data, [])


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
      {authority == 0
        ?
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
                        { typeof (cell.value) == "boolean" && authority == 0
                          ?
                          <div>
                            <button onClick={() => alert(cell.value)}>test</button>
                            {/* {setColumn(authority)} */}
                          </div>
                          :
                          cell.render('Cell')
                        }
                      </td>
                    )
                  })}
                </tr>
              )
            })}
          </tbody>
        </table>
        :
        <Grouptable />
      }
      <div className="role_checks">
        {handleRole(authority)}
        <h1>{authority}</h1>

      </div>
    </div>
  )
}

export default Groupdetail
