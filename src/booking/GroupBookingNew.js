import React , {useState, useEffect}from 'react'

import HistoryServices from '../services/history_servies'

import { useTable } from 'react-table'


function GroupBookingNew({groupNewBK}) {
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
                // {
                //     Header: "Numbers",
                //     accessor:"number"
                // },
                {
                    Header: "Day",
                    accessor:"weekday"
                },
                {
                    Header: "Court",
                    accessor:"court"
                },
                {
                    Header:"Times",
                    accessor:"time"
                },
            ]
        ,
        []
      )

      // const data = React.useMemo(() => test, [])
     const data = groupNewBK
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

export default GroupBookingNew
