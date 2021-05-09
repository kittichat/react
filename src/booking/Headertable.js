import React , {useState, useEffect}from 'react'

import Data from '../api/group__members'
import GroupList from "../services/groupservices"

import { useTable } from 'react-table'

function Headertable({ dataHeader, authority2}) {
    const [dataApi, setApi] = useState([])
    const [authority, setAuthority] = useState(undefined)

    const group = GroupList.getCurrentGroup()

// useEffect(() => {
//   const group = GroupList.getCurrentGroup()
//     GroupList.getMembers(group)
//       .then(response => {

//         setApi(response.data.detail.member)
//         setAuthority(response.data.role)


//       })
// }, [])


const handleDelete = (id) => {
  GroupList.deleteMember(group,id)
  .then(
    window.location.reload()
  )
}

    const columns = React.useMemo(
        () =>
          [
            // {
            //   Header: "Numbers",
            //   accessor: "sequence"
            // },
            // {
            //   Header: "Members",
            //   accessor: "member"
            // },
            // {
            //   Header: "Delete",
            //   accessor: "manage"
            // }
                {
              Header: "Numbers",
              accessor: "number"
            },
            {
              Header: "Members",
              accessor: "firstname"
            },
            {
              Header: "Delete",
              accessor: "delete"
            }
          ]
        ,
        []
      )
    
      // const data = React.useMemo(() => dataHeader, [])
      // const data = dataApi
      const data =dataHeader
      console.log("this is data from Header", authority2)
          console.log(dataHeader)
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
                        { typeof (cell.value) == "boolean" && authority2 == 0
                          ?
                          <div>
                            <button onClick={() => handleDelete(cell.row.original.id)}>Delete</button>
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
        </div>
    )
}

export default Headertable
