import React, { useState, useEffect } from 'react'

import Form from "react-validation/build/form"
import Input from "react-validation/build/input"
import CreatableSelect from 'react-select/creatable';
import { useTable } from 'react-table'

import groupBooking from '../../services/groupBooking_service'

import styled from 'styled-components'
import { Container } from './groupBookingModal/Container'    //add path to container for group right here

import '../../css/Week.css'
import data from '../../api/booking_data';
import datagroupbk from '../../api/groupBooking'


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
    th,
    td {
      margin: 0;
      padding: 0.5rem;
      border-bottom: 1px solid black;
      border-right: 1px solid black;
      :last-child {
        border-right: 0;
      }
    }
  }
  `

function Table({ columns, data, setArr, arrt}) {
    // Use the state and functions returned from useTable to build your UI
    // becareful if array has some problem, just set arr value default to [0]
    const [arr, setArrState] = useState([]) 

    const bgforTime = {
        background: "white"
    }
    const bgforTrue = (cell) => {

        let x = {
            // row:cell.row.index,
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


        console.log("this is arr")
        console.log(arr)
        console.log("this is arrRoot")
        console.log(arrt)
        console.log(x)
        console.log("value ")
        console.log(cell.row.values.time)

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
    // Render the UI for your table
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

function Week() {

    const [day, setDay] = useState("Monday")
    const [monday, setMonday] = useState([])
    const [tuesday, setTuesday] = useState([])
    const [wednesday, setWednesday] = useState([])
    const [thrusday, setThrusday] = useState([])
    const [friday, setFriday] = useState([])
    const [saturday, setSaturday] = useState([])
    const [sunday, setSunday] = useState([])


    // const [temp, setTemp] = useState(undefined)

    const [dataTable, setDataTable] = useState([])

    const [arrRoot, setArr] = useState([0])

    const [arrTemp, setArrTemp] = useState([])
    const [arrMonday,setArrMonday] = useState([])
    const [arrTuesday,setArrTuesday] = useState([])
    const [arrWednesday,setArrWednesday] = useState([])
    const [arrThrusday,setArrThrusday] = useState([])
    const [arrFriday,setArrFriday] = useState([])
    const [arrSaturday,setArrSaturday] = useState([])
    const [arrSunday,setArrSunday] = useState([])    

    useEffect(() => {

        // groupBooking.getDays().then(response => {
        //     // console.log(response.data)
        //     // console.log(response.data.status[0].status)
        //     setMonday(response.data.status[0])
        //     setTuesday(response.data.status[1])
        //     setWednesday(response.data.status[2])
        //     setThrusday(response.data.status[3])
        //     setFriday(response.data.status[4])
        //     setSaturday(response.data.status[5])
        //     setSunday(response.data.status[6])
        // })

        setMonday(datagroupbk.status[0])
        setTuesday(datagroupbk.status[1])
        setWednesday(datagroupbk.status[2])
        setThrusday(datagroupbk.status[3])
        setFriday(datagroupbk.status[4])
        setSaturday(datagroupbk.status[5])
        setSunday(datagroupbk.status[6])
    }, [])

    const options = [
        { value: 'Monday', label: 'Monday' },
        { value: 'Tuesday', label: 'Tuesday' },
        { value: 'Wednesday', label: 'Wednesday' },
        { value: 'Thursday', label: 'Thursday' },
        { value: 'Friday', label: 'Friday' },
        { value: "Saturday", label: 'Saturday' },
        { value: "Sunday", label: 'Sunday' }

    ];
    const defaultOption = options[0];

    const handleOption = (newValue) => {
        if (newValue == null) { return setDay("") }
        setDay(newValue)
        console.log("data table change", newValue)
        switch (newValue.value) {
            case "Monday":
                setDataTable(monday.status)
                setArrTemp(arrMonday)
                console.log(monday.weekday)
                break;
            case "Tuesday":
                setDataTable(tuesday.status)
                setArrTemp(arrTuesday)
                console.log(tuesday.weekday)
                break;
            case "Wednesday":
                setDataTable(wednesday.status)
                setArrTemp(arrWednesday)
                console.log(wednesday.weekday)
                break;
            case "Thrusday":
                setDataTable(thrusday.status)
                setArrTemp(arrThrusday)
                console.log(thrusday.weekday)
                break;
            case "Friday":
                setDataTable(friday.status)
                setArrTemp(arrFriday)
                console.log(friday.weekday)
                break;
            case "Saturday":
                setDataTable(saturday.status)
                setArrTemp(arrSaturday)
                console.log(saturday.weekday)
                break
            case "Sunday":
                setDataTable(sunday.status)
                setArrTemp(arrSunday)
                console.log(sunday.weekday)
                break;
        }

    }


    const columns = React.useMemo(
        () => [
            {
                Header: "All courts",
                columns: [

                    { Header: "time", accessor: "time" },
                    { Header: "Court1", accessor: "Court1" },
                    { Header: "Court2", accessor: "Court2" },
                    { Header: "Court3", accessor: "Court3" },
                    // { Header: "test", accessor: "test" },

                ]
            }
        ],
        []
    )

    const triggerText = 'Booking'
    const onSubmit = (event) => {
        event.preventDefault(event)
    }

    const handleset = () => {
        return  setArrTemp
    }

    return (
        <div className="Week">
            <Form>
                <CreatableSelect
                    className="week__dropdown"
                    isClearable
                    onChange={handleOption}
                    options={options}
                />
            </Form>

            <h1>this is for Group booking page</h1>
            <h1>{day.value}</h1>

            <div className="Afterbooking">
                {dataTable?.length
                
                    ?
                    <Styles>
                        <div className="group1_table">
                            <Table
                                className="group1_eachtable"
                                columns={columns}
                                data={dataTable}
                                // arr={arrRoot}
                                arrt={arrTemp}
                                setArr={() => handleset()} 

                            />
                        </div>
                    </Styles>
                     :
                    <h1>nothing</h1>
                } 
                <button
                    className="Booking__clear"
                    onClick={() => window.location.reload()}
                >
                    Clear
                 </button>

                <Container
                    triggerText={triggerText}
                    onSubmit={onSubmit}
                    bookingDetail={arrRoot.arr} />


            </div>

        </div>
    )
}

export default Week
