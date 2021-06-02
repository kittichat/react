import React , {useState, useEffect}from 'react'

import Data from '../api/group__members'
import GroupList from "../services/groupservices"

import { useTable } from 'react-table'

import styled from 'styled-components'

function Grouptable({members}) {
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
              {Header:"Members",
            columns:[
                {
                    Header: "Numbers",
                    accessor:"number"
                },
                {
                    Header:"Members",
                    accessor:"firstname"
                },
              ]
            }
            ]
        ,
        []
      )

      // const data = React.useMemo(() => test, [])
     const data = members
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

export default Grouptable
