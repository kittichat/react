import React , {useState, useEffect} from 'react'
import styled from 'styled-components'
import { useExpanded, useTable } from 'react-table'

// import makeData from './makeData'
import Data from '../api/booking_data'
import BookingService from '../services/booking_service'
import '../css/Afterbooking.css'

import {Container} from './bookingModal/Container'

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

function Table({ columns, data , arrRoot , setArr }) {
    // Use the state and functions returned from useTable to build your UI
    // becareful if array has some problem, just set arr value default to [0]
    const [arr,setArrState] = useState([])
const bgforTime = {
    background : "white"
}
const bgforTrue =(cell) => {

    let  x = {
        // row:cell.row.index,
        time:cell.row.values.time,
        column:cell.column.Header
    }
    for(let j in arr){
        var bgCheck = false
    if(JSON.stringify(x) == JSON.stringify(arr[j]) ){
        bgCheck = true
        break
    }
    }
    if(bgCheck){
        return(
            {
                background : "green"
            }
        )
    }else{
        return {background : 'white'}
    }

}


const bgforFalse = {
    background : "red"
    
}

const bgCell = (cell) => {
    if(cell.column.Header == "time"){
        return bgforTime
    }
    else if(cell.value == true){
        return bgforTrue(cell)
        
    }
    else{
        return bgforFalse
    }

    
}


    const testClick = (cell) => { 
       let x = {
        //    row:cell.row.index,
            time:cell.row.values.time,
           column:cell.column.Header
       }
       var sign = false
        for(let i in arr){
            if(JSON.stringify(x) == JSON.stringify(arr[i])){
                let position = i
                arr.splice(position,1)
                sign = true
                console.log("remove")
                console.log("position " + position)
                {setArr({arr})}
                break

            }
        }
    //    }
       if(cell.value == true && sign == false){
           arr.push(x)
           console.log("add")
           
        {setArr({arr})}

    }
       console.log("this is arr")
       console.log(arr)
       console.log("this is arrRoot")
       console.log(arrRoot)
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
                                     style = {bgCell(cell)}
                                    onClick = {() => {testClick(cell)}}
                                >

                                    {cell.render('Cell')}</td>
                            })}
                        </tr>
                    )
                })}
            </tbody>
        </table>
    )

}
// }
function Afterbooking() {
    const [arrRoot, setArr] = useState([0])
    const [dataTemp, setDataTemp] = useState([])
    const [apidata,setApidata] = useState(undefined)
    
   useEffect(() => {
       BookingService.booking().then(response => 
        {
             setDataTemp(response.data.status)
        }
        )
        
   }, []) 
   
   const columns = React.useMemo(
        () => [
            {
                        Header: "All courts",
                        // columns: [
                        //     {Header:"time",accessor:"time"},
                        //     {Header:"Court1",accessor:"Court1"},
                        //     {Header:"Court2",accessor:"Court2"},                                            
                        //     {Header:"Court3",accessor:"Court3"},                                            
                                                                   
                        // ]
                        // use this when you want to use data api 
                        columns: [
                            {Header:"time",accessor:"time"},
                            {Header:"Court1",accessor:"court1"},
                            {Header:"Court2",accessor:"court2"},                                            
                            {Header:"Court3",accessor:"court3"},                                            
                            {Header:"Court4",accessor:"court4"},                                            
                            {Header:"Court5",accessor:"court5"},                                            
                            {Header:"Court6",accessor:"court6"},                                            
                            {Header:"Court7",accessor:"court7"},                                            
                            {Header:"Court8",accessor:"court8"},                                            
                            {Header:"Court9",accessor:"court9"},                                            
                        ]
                    }
        ],
        []
    )
    // the problem that I cannot use data because when useEffect has set to dataTemp, data is not set too
    const data = React.useMemo(() => Data, [])
    console.log(data)
    console.log(dataTemp)
    console.log("this is arrRoot")
    console.log(arrRoot)

    const triggerText = 'Booking'
    const onSubmit = (event) => {
        event.preventDefault(event)
    }

    const arrTest = [{row:1},{row:2},{row:3}]
    return (
        <div className="Afterbooking">
            <Styles>
                <div className="group1_table">
                    <Table className="group1_eachtable" columns={columns} data={data} arr={arrRoot} setArr={setArr} />
                </div>
            </Styles>

            <button
                className="Booking__submit"
        >
                Submit
            </button>

            <Container triggerText={triggerText} onSubmit={onSubmit} bookingDetail={arrRoot.arr}/>


        </div>
    )
}

export default Afterbooking