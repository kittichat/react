import React , {useState, useEffect}from 'react'

import Data from '../api/group__members'
import GroupList from "../services/groupservices"

import { useTable } from 'react-table'


function Grouptable({members}) {
const [dataApi , setApi]  = useState([])

// useEffect(() => {
//   const group = GroupList.getCurrentGroup()
//   console.log("this is group ",group)
//     GroupList.getMembers(group)
//       .then(response => {

//         setApi(response.data.detail.member)


//       })
// }, [])

    const columns = React.useMemo(
        () =>
            [
                {
                    Header: "Numbers",
                    accessor:"number"
                },
                {
                    Header:"Members",
                    accessor:"firstname"
                },
            ]
        ,
        []
      )

      const data = React.useMemo(() => test, [])
    //  const data = dataApi
     console.log("this is not Header")
            console.log(data)
    const {
        getTableProps,
        getTableBodyProps,
        headerGroups,
        rows,
        prepareRow,
      } = useTable({ columns , data })
    

    return (
        <div>
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
                      { 
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
      {/* <h1>test</h1> */}
        </div>
    )
}

export default Grouptable
