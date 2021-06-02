import React , {useState, useEffect}from 'react'

import { useTable } from 'react-table'

import styled from 'styled-components'
import '../css/GroupBKhistoryNextMonth.css'


function GroupBKhistoryNextMonth({next_month}) {
  const Styles = styled.div`
  padding: 1rem;
  table {
    border-spacing: 0;
    border: 1px solid black;
    tr {
      :last-child {
        td {
          border-bottom: 0;
          
        }
      }
    }
    th ,
    td {
      margin: 0;
      padding: 1rem;
      border-bottom: 1px solid black;
      border-right: 1px solid black;
      :last-child {
        border-right: 0;
      }
    }
  }
  `

    const columns = React.useMemo(
        () =>
            [
              {Header:"Booking Details of Next Month",
              columns:[
            
                {
                    Header: "Numbers",
                    accessor:"number"
                },
                {
                    Header:"Day",
                    accessor:"weekday"
                },
                {
                    Header:"Court",
                    accessor:"court"
                },
                {
                    Header:"Time",
                    accessor:"time"
                },
              ]
            }
            ]
        ,
        []
      )

      // const data = React.useMemo(() => test, [])
     const data = next_month
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
          <Styles>
            <table {...getTableProps()} style={{ border: 'solid 1px blue' }}>
        <thead>
          {headerGroups.map(headerGroup => (
            <tr {...headerGroup.getHeaderGroupProps()}>
              {headerGroup.headers.map(column => (
                <th
                  {...column.getHeaderProps()}
                  style={{
                    borderBottom: 'solid 3px red',
                    background: 'rgb(150, 240, 65)',
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
                        background: 'whitesmoke',
                        color: "black",
                        fontFamily: 'Segoe UI, Tahoma, Geneva, Verdana, sans-serif',
                        fontSize:"20px",
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
      </Styles>
      {/* <h1>test</h1> */}
        </div>
    )
}

export default GroupBKhistoryNextMonth
