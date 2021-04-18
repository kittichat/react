import React , {useState, useEffect}from 'react'

import Data from '../api/group__members'
import GroupList from "../services/groupservices"

import { useTable } from 'react-table'


function Grouptable() {

useEffect(() => {
    // fetch list of members here
}, [])

    const columns = React.useMemo(
        () =>
            [
                {
                    Header: "Numbers",
                    accessor:"sequence"
                },
                {
                    Header:"Members",
                    accessor:"member"
                },
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
        </div>
    )
}

export default Grouptable
