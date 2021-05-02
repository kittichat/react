import React, { useState, useEffect } from 'react'

import { useTable } from 'react-table'

import groupBooking from '../../../services/groupBooking_service'

import datagroupbk from '../../../api/groupBooking'


function Table({ columns, data, setArr, }) {

    const [arr, setArrState] = useState([])

    const bgforTime = {
        background: "white"
    }
    const bgforTrue = (cell) => {

        let x = {
            time: cell.row.values.time,
            column: cell.column.Header
        }
        for (let j in arr) {
            var bgCheck = false
            if (JSON.stringify(x) == JSON.stringify(arr[j])) {
                bgCheck = true
                break
            }
        }
        if (bgCheck) {
            return (
                {
                    background: "green"
                }
            )
        } else {
            return { background: 'white' }
        }

    }


    const bgforFalse = {
        background: "red"

    }

    const bgCell = (cell) => {
        if (cell.column.Header == "time") {
            return bgforTime
        }
        else if (cell.value == true) {
            return bgforTrue(cell)

        }
        else {
            return bgforFalse
        }
    }
    const testClick = (cell) => {
        let x = {
            //    row:cell.row.index,
            time: cell.row.values.time,
            column: cell.column.Header
        }
        var sign = false
        for (let i in arr) {
            if (JSON.stringify(x) == JSON.stringify(arr[i])) {
                let position = i
                arr.splice(position, 1)
                sign = true
                console.log("remove")
                console.log("position " + position)
                { setArr({ arr }) }
                break

            }
        }
        //    }
        if (cell.value == true && sign == false) {
            arr.push(x)
            console.log("add")

            { setArr({ arr }) }

        }
    }


    const {
        getTableProps,
        getTableBodyProps,
        headerGroups,
        rows,
        prepareRow,
    } = useTable({
        columns,
        data,
    })
    return (
        <table {...getTableProps()}
            className="Booking__table"
        >
            <thead>
                {headerGroups.map(headerGroup => (
                    <tr {...headerGroup.getHeaderGroupProps()}>
                        {headerGroup.headers.map(column => (
                            <th {...column.getHeaderProps()}>{column.render('Header')}</th>
                        ))}
                    </tr>
                ))}
            </thead>
            <tbody {...getTableBodyProps()}>
                {rows.map((row, i) => {
                    prepareRow(row)
                    return (
                        <tr {...row.getRowProps()}>
                            {row.cells.map(cell => {
                                return <td {...cell.getCellProps()}
                                    style={bgCell(cell)}
                                    onClick={() => { testClick(cell) }}
                                >
                                    {cell.render('Cell')}
                                </td>
                            })}
                        </tr>
                    )
                })}
            </tbody>
        </table>
    )

}

function MondayTable({ members }) {

    const [monday, setMonday] = useState([])
    const [tuesday, setTuesday] = useState([])
    const [wednesday, setWednesday] = useState([])
    const [thrusday, setThrusday] = useState([])
    const [friday, setFriday] = useState([])
    const [saturday, setSaturday] = useState([])
    const [sunday, setSunday] = useState([])

    const [dataTable, setDataTable] = useState([])
    const [arrRoot, setArr] = useState([0])

    useEffect(() => {

        setMonday(datagroupbk.status[0])
        setTuesday(datagroupbk.status[1])
        setWednesday(datagroupbk.status[2])
        setThrusday(datagroupbk.status[3])
        setFriday(datagroupbk.status[4])
        setSaturday(datagroupbk.status[5])
        setSunday(datagroupbk.status[6])

        setDataTable(datagroupbk.status[0])
    }, [])

    const columns = React.useMemo(
        () => [
            {
                Header: "All courts",
                columns: [

                    { Header: "time", accessor: "time" },
                    { Header: "Court1", accessor: "Court1" },
                    { Header: "Court2", accessor: "Court2" },
                    { Header: "Court3", accessor: "Court3" },
                ]
            }
        ],
        []
    )

    return (
        <div>
            <div className="Afterbooking">
                {dataTable?.length
                    ?
                    <Styles>
                        <div className="group1_table">
                            <Table
                                className="group1_eachtable"
                                columns={columns}
                                data={dataTable}
                                arr={arrRoot}
                                setArr={setArr}
                            />
                        </div>
                    </Styles>
                    :
                    <h1>nothing</h1>
                }
            </div>
        </div>
    )
}

export default MondayTable
