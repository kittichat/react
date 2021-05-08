import React , {useState, useEffect}from 'react'

import {Container} from '../RefundModal/Container'

import { useTable } from 'react-table'

import HistoryServices from '../../services/history_servies'

function Refund() {
const [dataHT , setDataHT]  = useState([])

    useEffect(() => {
        HistoryServices.Refund_get().then(response =>
            setDataHT(response.data)
        )
    }, [])

    const handleClick = () => {

    }

    const triggerText = 'Refund'
    const onSubmit = (event) => {
        event.preventDefault(event)
    }

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

            <Container 
                // className="Booking__submit"
                triggerText={triggerText}
                onSubmit={onSubmit} 
                refundDetail={dataHT}
                />
        </div>
    )
}

export default Refund
