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

function Table({ columns, data , arrRoot , setArr, ClearState , isClear  }) {
    // Use the state and functions returned from useTable to build your UI
    // becareful if array has some problem, just set arr value default to [0]
    const [arr,setArrState] = useState([])


    const CLear = () => {
        setArrState([])
    }
    let test = false
    {isClear ? test = true : test = false}
    if(test){
        arr.splice(0)
        test = false
    }

    // {isClear &&  
    // //    console.log("fuckingSheit happening on this")
    //     // setArrState([0])
    //     // CLear()
    //     // arr.pop(0)
    //     // arr.push(0)
      
    //         arr.splice(0)
       
       
        
        
    // }

    // const Clear = () => {
    //     // setArrState([0])
    //     console.log("work")
    // }

  
    // {ClearState({Clear})}
//*************************************** */ 

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
                                return  <td {...cell.getCellProps()}
                                     style = {bgCell(cell)}
                                    onClick = {() => {testClick(cell)}}
                                >
                                    {/* <button>test</button> */}
                                    

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
// }
function Afterbooking(props) {
    const [arrRoot, setArr] = useState([0])
    const [dataTemp, setDataTemp] = useState([])
    const [apidata,setApidata] = useState(undefined)
    const [isClear , setClear]  = useState(false)
    
   useEffect(() => {
    //    BookingService.AllBookingInformation().then(response => 
    //     {
    //          setDataTemp(response.data.status)
    //     }
    //     )
     BookingService.GetBookingInformation(localStorage.getItem("date")).then(response => {
         setDataTemp(response.data.status)
         localStorage.setItem("date2",response.data.date)
     })
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
                            {Header:"Court10",accessor:"court10"},                        
                            {Header:"Court11",accessor:"court11"},                        
                        ]
                    }
        ],
        []
    )
    // the problem that I cannot use data because when useEffect has set to dataTemp, data is not set too
    const data = React.useMemo(() => Data, [])
    console.log(data)
    // console.log(dataTemp)
    console.log("this is arrRoot")
    console.log(arrRoot)

    const triggerText = 'Booking'
    const onSubmit = (event) => {
        event.preventDefault(event)
    }
 // this part I try to create clear booking by callback from function table
    let test = false

    const ClearState = () => {
            setClear(!isClear)
    }
    
     
    console.log("this is isClear")
    console.log(isClear)

    return (
        <div className="Afterbooking">
            <Styles>
                <div className="group1_table">
                    <Table 
                        className="group1_eachtable" 
                        columns={columns} 
                        data={data} 
                        arr={arrRoot} 
                        setArr={setArr} 
                        isClear={isClear}
                        // ClearState={ClearState}
                    />
                </div>
            </Styles>
            <button
                className="Booking__clear"
                onClick={() => window.location.reload()}
            >
                Clear
            </button>
            {/* <button
                className="Booking__submit"
        >
                Submit
            </button> */}

            <Container 
                // className="Booking__submit"
                triggerText={triggerText}
                onSubmit={onSubmit} 
                bookingDetail={arrRoot.arr}/>


        </div>
    )
}

export default Afterbooking