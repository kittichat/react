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
import { ArrowBackIosTwoTone, ContactSupportOutlined } from '@material-ui/icons';
import { weekdays } from 'moment';


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

function Table({
    columns,
    data,
    setArr,
    arrRoot,
    day,
    arrMonday,
    arrTuesday,
    arrWednesday,
    arrThursday,
    arrFriday,
    arrSaturday,
    arrSunday,
    setArrTotal,
    setForTotalTemp,
}) {
    // Use the state and functions returned from useTable to build your UI
    // becareful if array has some problem, just set arr value default to [0]
    // const [arr, setArrLocal] = useState([])
    // const [arrTotalTemp, setArrTotalTemp] = useState()
    let arrTotalTemp = []
    let arrTotalSpread = []
    let arr = []
    switch (day) {
        case "Monday":
            arr = arrMonday
            break;
        case "Tuesday":
            arr = arrTuesday
            break;
        case "Wednesday":
            arr = arrWednesday
            break;
        case "Thursday":
            arr = arrThursday
            break;
        case "Friday":
            arr = arrFriday
            break;
        case "Saturday":
            arr = arrSaturday
            break;
        case "Sunday":
            arr = arrSunday
            break;
    }


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
        arrTotalTemp.push(
            arrMonday,
            arrTuesday,
            arrWednesday,
            arrThursday,
            arrFriday,
            arrSaturday,
            arrSunday,
        )
        let count = 0
        let dayTemp = ""
        console.log(arrTotalTemp)
        arrTotalTemp.forEach(i => {
            console.log("i ", i)
            console.log(count)
            switch (count) {
                case 0:
                    dayTemp = "Monday"
                    break;
                case 1:
                    dayTemp = "Tuesday"
                    break;
                case 2:
                    dayTemp = "Wednesday"
                    break;
                case 3:
                    dayTemp = "Thursday"
                    break;
                case 4:
                    dayTemp = "Friday"
                    break;
                case 5:
                    dayTemp = "Saturday"
                    break;
                case 6:
                    dayTemp = "Sunday"
                    break;
            }
            i.forEach(CandT => {
                console.log("test ", CandT)
                if (typeof (CandT) == "object") {
                    arrTotalSpread.push(CandT)
                } else {
                    arrTotalSpread.push({ day: CandT })
                }
                // arrTotalSpread.push({CandT,dayTemp})
            }
            )
            count++
        }
        )


        console.log("this is arr")
        console.log(arr)
        console.log("this is arrRoot")
        console.log(arrRoot)
        console.log(x)
        console.log("value ")
        console.log(cell.row.values.time)

        console.log(arrMonday)
        console.log(arrTuesday)
        console.log(arrWednesday)
        console.log(arrThursday)
        console.log(arrFriday)
        console.log(arrSaturday)
        console.log(arrSunday)

        console.log(arrTotalTemp)
        console.log("arrTotalSpread ", arrTotalSpread)

        // {setArrTotal(arrTotalTemp)}
        { setForTotalTemp(arrTotalTemp) }
        { setArrTotal(arrTotalSpread) }

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

    const [day, setDay] = useState("Select day")
    const [monday, setMonday] = useState([])
    const [tuesday, setTuesday] = useState([])
    const [wednesday, setWednesday] = useState([])
    const [thursday, setThursday] = useState([])
    const [friday, setFriday] = useState([])
    const [saturday, setSaturday] = useState([])
    const [sunday, setSunday] = useState([])

    const [date, setDate] = useState(undefined)

    const [dataTable, setDataTable] = useState([])

    const [arrRoot, setArr] = useState([0])
    const [arrTotal, setArrTotal] = useState([])
    const [forTotalTemp, setForTotalTemp] = useState([])

    const [arrTemp, setArrTemp] = useState([])
    const [arrMonday, setArrMonday] = useState(["Monday"])
    const [arrTuesday, setArrTuesday] = useState(["Tuesday"])
    const [arrWednesday, setArrWednesday] = useState(["Wednesday"])
    const [arrThursday, setArrThrrThursday] = useState(["Thursday"])
    const [arrFriday, setArrFriday] = useState(["Friday"])
    const [arrSaturday, setArrSaturday] = useState(["Saturday"])
    const [arrSunday, setArrSunday] = useState(["Sunday"])

    // const [arrTemp, setArrTemp] = useState([])
    // const [arrMonday, setArrMonday] = useState([])
    // const [arrTuesday, setArrTuesday] = useState([])
    // const [arrWednesday, setArrWednesday] = useState([])
    // const [arrThursday, setArrThrrThursday] = useState([])
    // const [arrFriday, setArrFriday] = useState([])
    // const [arrSaturday, setArrSaturday] = useState([])
    // const [arrSunday, setArrSunday] = useState([])

    useEffect(() => {

        groupBooking.getDays().then(response => {

            setMonday(response.data.status[0])
            setTuesday(response.data.status[1])
            setWednesday(response.data.status[2])
            setThursday(response.data.status[3])
            setFriday(response.data.status[4])
            setSaturday(response.data.status[5])
            setSunday(response.data.status[6])

            setDate(response.data.date)
        })

        // setMonday(datagroupbk.status[0])
        // setTuesday(datagroupbk.status[1])
        // setWednesday(datagroupbk.status[2])
        // setThursday(datagroupbk.status[3])
        // setFriday(datagroupbk.status[4])
        // setSaturday(datagroupbk.status[5])
        // setSunday(datagroupbk.status[6])
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
        setDay(newValue.value)
        // setArrTemp(newValue.value)
        console.log("data table change", newValue)
        switch (newValue.value) {
            case "Monday":
                setDataTable(monday.status, monday.weekdays)
                break;
            case "Tuesday":
                setDataTable(tuesday.status, tuesday.weekdays)
                break;
            case "Wednesday":
                setDataTable(wednesday.status, wednesday.weekdays)
                break;
            case "Thursday":
                setDataTable(thursday.status, thursday.weekdays)
                break;
            case "Friday":
                setDataTable(friday.status, friday.weekdays)
                break;
            case "Saturday":
                setDataTable(saturday.status, saturday.weekdays)
                break;
            case "Sunday":
                setDataTable(sunday.status, sunday.weekdays)
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

                ]
            }
        ],
        []
    )

    const triggerText = 'Booking'
    const onSubmit = (event) => {
        event.preventDefault(event)
    }

    // console.log(dataTable.weekday, dataTable)
    console.log("dataTable", dataTable)
    console.log("arrTotal ", arrTotal)
    console.log("arrRoot ", arrRoot)
    console.log("forTotalTemp", forTotalTemp)

    return (
        <div className="Week">
            <div className="test"></div>
            <div className="All_form">
                
                <h1 className="week__day">{day}</h1>

                <Form>
                    <CreatableSelect
                        className="week__dropdown"
                        isClearable
                        onChange={handleOption}
                        options={options}
                    />
                </Form>

                {/* <h1>{day}</h1> */}

                <div className="Afterbooking">
                    {dataTable?.length

                        ?
                        <Styles>
                            <div className="group_table">
                                <Table
                                    className="group_eachtable"
                                    columns={columns}
                                    data={dataTable}
                                    arrRoot={arrRoot}
                                    setArr={setArr}
                                    day={day}
                                    arrMonday={arrMonday}
                                    arrTuesday={arrTuesday}
                                    arrWednesday={arrWednesday}
                                    arrThursday={arrThursday}
                                    arrFriday={arrFriday}
                                    arrSaturday={arrSaturday}
                                    arrSunday={arrSunday}
                                    setArrTotal={setArrTotal}
                                    setForTotalTemp={setForTotalTemp}
                                />
                            </div>
                        </Styles>
                        :
                        <div></div>
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
                        bookingDetail={arrTotal}
                        bookingDetail3={forTotalTemp}
                        date={date}
                    />


                </div>
            </div>
        </div>
    )
}

export default Week
