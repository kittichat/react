import React , {useState, useEffect}from 'react'

import HistoryServices from '../../services/history_servies'

import { useTable } from 'react-table'


function PayOrCancel() {
const [dataHT , setDataHT]  = useState([])

    useEffect(() => {
        HistoryServices.PayOrCancel_get().then(response =>
            {setDataHT(response.data)
            
            })
          
    }, [])

   const columns = React.useMemo(
        () =>
          [
            {
              Header: "Numbers",
              accessor: "number"
            },
            {
              Header: "Date",
              accessor: "date"
            },
            {
              Header: "Court",
              accessor: "court"
            },
            {
              Header: "Time",
              accessor: "time"
            },
            {
              Header: "Timeout",
              accessor: "timeout"
            }
          ]
        ,
        []
      )

      // const data = React.useMemo(() => test, [])
     const data = dataHT
          console.log(dataHT)
    const {
        getTableProps,
        getTableBodyProps,
        headerGroups,
        rows,
        prepareRow,
      } = useTable({ columns , data })
    
    console.log(dataHT)
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
      <h1>test</h1>


        </div>
    )
}

export default PayOrCancel
