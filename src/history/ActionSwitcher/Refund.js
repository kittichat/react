import React , {useState, useEffect}from 'react'

import {Container} from '../RefundModal/Container'

import { useTable } from 'react-table'

import HistoryServices from '../../services/history_servies'

import styled from 'styled-components'

function Refund() {
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

const [dataHT , setDataHT]  = useState([])

    useEffect(() => {
        HistoryServices.Refund_get().then(response =>
            setDataHT(response.data)
        )
    }, [])


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
      </Styles>

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
