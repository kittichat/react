import React, { useState, useEffect } from 'react'

import value from '../api/profile_data'

import { useTable } from 'react-table'

import HistoryServices from '../services/history_servies'

import '../css/Paymenthistory.css'

function Paymenthistory() {

    const [firstname, setFirstname] = useState("")
    const [dataTable,setDataTable] = useState([])

    // useEffect(() =>
    //     setFirstname(value.gender),

    //     HistoryServices.payment().then(
    //       setDataTable(response.data.something)
    //     )
    //     )

    // console.log(firstname)


    //  const columns = React.useMemo(
    //     () =>
    //         [
    //             {
    //                 Header: "Numbers",
    //                 accessor:"number"
    //             },
    //             {
    //                 Header:"Date",
    //                 accessor:"date"
    //             },
    //             {
    //                 Header:"Price",
    //                 accessor:"price"
    //             },
    //             {
    //                 Header:"paymentID",
    //                 accessor:"id"
    //             }
    //         ]
    //     ,
    //     []
    //   )

    // const data = React.useMemo(() => test, [])
    //  const data = payment_information
    // console.log("this is not Header")
    // console.log(data)
    // const {
    //     getTableProps,
    //     getTableBodyProps,
    //     headerGroups,
    //     rows,
    //     prepareRow,
    // } = useTable({ columns, data })


    return (
        <div className="History__payment">
            <h1>Payment History</h1>

            <h1>{firstname}</h1>

            {/* <table {...getTableProps()} style={{ border: 'solid 1px blue' }}>
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
      </table> */}


        </div>
    )
}

export default Paymenthistory
