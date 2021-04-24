import React, { useState, useEffect } from 'react'

import Form from "react-validation/build/form"
import Input from "react-validation/build/input"
import CreatableSelect from 'react-select/creatable';
import { useTable } from 'react-table'

import groupBooking from '../../services/groupBooking_service'


// import {Container} from './'    #add path to container for group right here

import '../../css/Week.css'

// const Styles = styled.div`
//   padding: 1rem;
//   table {
//     border-spacing: 0;
//     border: 1px solid black;
//     tr {
//       :last-child {
//         td {
//           border-bottom: 0;
//         }
//       }
//     }
//     th,
//     td {
//       margin: 0;
//       padding: 0.5rem;
//       border-bottom: 1px solid black;
//       border-right: 1px solid black;
//       :last-child {
//         border-right: 0;
//       }
//     }
//   }
//   `

// function Table({ columns, data, arrRoot, setArr, ClearState, isClear }) {
//     // Use the state and functions returned from useTable to build your UI
//     // becareful if array has some problem, just set arr value default to [0]
//     const [arr, setArrState] = useState([])


//     const CLear = () => {
//         setArrState([])
//     }
//     let test = false
//     { isClear ? test = true : test = false }
//     if (test) {
//         arr.splice(0)
//         test = false
//     }

//     const bgforTime = {
//         background: "white"
//     }
//     const bgforTrue = (cell) => {

//         let x = {
//             // row:cell.row.index,
//             time: cell.row.values.time,
//             column: cell.column.Header
//         }
//         for (let j in arr) {
//             var bgCheck = false
//             if (JSON.stringify(x) == JSON.stringify(arr[j])) {
//                 bgCheck = true
//                 break
//             }
//         }
//         if (bgCheck) {
//             return (
//                 {
//                     background: "green"
//                 }
//             )
//         } else {
//             return { background: 'white' }
//         }

//     }


//     const bgforFalse = {
//         background: "red"

//     }

//     const bgCell = (cell) => {
//         if (cell.column.Header == "time") {
//             return bgforTime
//         }
//         else if (cell.value == true) {
//             return bgforTrue(cell)

//         }
//         else {
//             return bgforFalse
//         }


//     }


//     const testClick = (cell) => {
//         let x = {
//             //    row:cell.row.index,
//             time: cell.row.values.time,
//             column: cell.column.Header
//         }
//         var sign = false
//         for (let i in arr) {
//             if (JSON.stringify(x) == JSON.stringify(arr[i])) {
//                 let position = i
//                 arr.splice(position, 1)
//                 sign = true
//                 console.log("remove")
//                 console.log("position " + position)
//                 { setArr({ arr }) }
//                 break

//             }
//         }
//         //    }
//         if (cell.value == true && sign == false) {
//             arr.push(x)
//             console.log("add")

//             { setArr({ arr }) }

//         }


//         console.log("this is arr")
//         console.log(arr)
//         console.log("this is arrRoot")
//         console.log(arrRoot)
//         console.log(x)
//         console.log("value ")
//         console.log(cell.row.values.time)

//     }


//     const {
//         getTableProps,
//         getTableBodyProps,
//         headerGroups,
//         rows,
//         prepareRow,
//     } = useTable({
//         columns,
//         data,
//     })
//     // Render the UI for your table
//     return (
//         <table {...getTableProps()}
//             className="Booking__table"
//         >
//             <thead>
//                 {headerGroups.map(headerGroup => (
//                     <tr {...headerGroup.getHeaderGroupProps()}>
//                         {headerGroup.headers.map(column => (
//                             <th {...column.getHeaderProps()}>{column.render('Header')}</th>
//                         ))}
//                     </tr>
//                 ))}
//             </thead>
//             <tbody {...getTableBodyProps()}>
//                 {rows.map((row, i) => {
//                     prepareRow(row)
//                     return (
//                         <tr {...row.getRowProps()}>
//                             {row.cells.map(cell => {
//                                 return <td {...cell.getCellProps()}
//                                     style={bgCell(cell)}
//                                     onClick={() => { testClick(cell) }}
//                                 >
//                                     {cell.render('Cell')}
//                                 </td>
//                             })}
//                         </tr>
//                     )
//                 })}
//             </tbody>
//         </table>
//     )

// }


function Week() {

    const [day, setDay] = useState("Monday")
    const [monday,setMonday] = useState([])
    const [tuesday,setTuesday] = useState([])
    const [wednesday,setWednesday] = useState([])
    const [thrusday,setThrusday] = useState([])
    const [friday,setFriday] = useState([])
    const [saturday,setSaturday] = useState([])
    const [sunday,setSunday] = useState([])    


    const [temp, setTemp] = useState(undefined)
    
    const [dataTable, setDataTable] = useState([])
    const [arrRoot, setArr] = useState([0])

    useEffect(() => {

        // groupBooking.getDays().then(
        //     setMonday(response.data.day),
        //     setTuesday(response.data.day),
        //     setWednesday(response.data.day),
        //     setThrusday(response.data.day),
        //     setFriday(response.data.day),
        //     setSaturday(response.data.day),
        //     setSunday(response.data.day)
        // )

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

        // switch (newValue.value) {
        //     case "Monday":
        //         setDataTable(monday)
        //         break;
        //     case "Tuesday":
        //         setDataTable(tuesday)
        //         break;
        //     case "Wednesday":
        //         setDataTable(wednesday)
        //         break;
        //     case "Thrusday":
        //         setDataTable(thrusday)
        //         break;
        //     case "Friday":
        //         setDataTable(friday)
        //         break;
        //     case "Saturday":
        //         setDataTable(saturday)
        //     case "Sunday":
        //         setDataTable(sunday)
        //         break;
        // }

        // groupBooking.getDay(newValue.value).then(response => {
        //     setDataTable(response.data.something)
        //     // edited data in table right here
        // })
        // console.log(newValue.value)
    }


    // const columns = React.useMemo(
    //     () => [
    //         {
    //             Header: "All courts",
    //             columns: [
    //                 { Header: "time", accessor: "time" },
    //                 { Header: "Court1", accessor: "Court1" },
    //                 { Header: "Court2", accessor: "Court2" },
    //                 { Header: "Court3", accessor: "Court3" },

    //             ]
    //         }
    //     ],
    //     []
    // )

    // const triggerText = 'Booking'
    // const onSubmit = (event) => {
    //     event.preventDefault(event)
    // }


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

            <h1>{temp}</h1>
            <h1>this is for Group booking page</h1>
            <h1>{day.value}</h1>

            {/* <div className="Afterbooking">
                <Styles>
                    <div className="group1_table">
                        <Table
                            className="group1_eachtable"
                            columns={columns}
                            data={dataTemp}
                            arr={arrRoot}
                            setArr={setArr}
                        />
                    </div>
                </Styles>
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


            </div> */}

        </div>
    )
}

export default Week
