import React , {useState, useEffect}from 'react'

import { useTable } from 'react-table'

import '../css/GroupPMhistory.css'

import BTable from 'react-bootstrap/Table';

function GroupPMhistory({payment}) {


    const columns = React.useMemo(
        () =>
            [
                {
                    Header: "Numbers",
                    accessor:"number"
                },
                {
                    Header:"Date",
                    accessor:"date"
                },
                {
                    Header:"Price",
                    accessor:"price"
                },
            ]
        ,
        []
      )

      // const data = React.useMemo(() => test, [])
     const data = payment
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
        <div className="PM__root">
          {/* // <div className="ReactTable">  */}
            <BTable striped bordered hover size="sm" {...getTableProps()} style={{ border: 'solid 1px blue' }} className="ReactTable">
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
      {/* </table> */}
      </BTable>
      {/* <h1>test</h1> */}
        </div>
    )
}

export default GroupPMhistory
