// import React from 'react'

// function Group2() {
//     return (
//         <div>
            
//         </div>
//     )
// }

// export default Group2

// import React from 'react'

// import react , {useState} from 'react'
// import ReactTable from 'react-table'

// import Data from '../../api/booking_data'



// function Group2() {
//     const [data, setData]  = useState(Data) // this is for api; don't forget to import api; I have to add fixed row too

//     // at this point i should handle something for Clicking, then it should look different
//     // onRowClick = (state, rowInfo, column, instance) => {
//     //     return {
//     //         onClick : (e, handletime:Original) => {
//     //             console.log(`Row index: ${rowInfo.index}, column header: ${column,Header}`)
//     //             if(handleOriginal){
//     //                 handleOriginal()
//     //             }
//     //         }
//     //     }
//     // }

//     return (

//         <div>
//             {/* <ReactTable
//                 data = {data}
//                 columns ={[
//                     {
//                         Header: "All courts",
//                         columns: [
//                             {Header:"Time",accessor:"time"},
//                             {Header:"Court1",accessor:"court1"},                            
//                             {Header:"Court2",accessor:"court2"},
//                             {Header:"Court3",accessor:"court3"},
//                             {Header:"Court4",accessor:"court4"},
//                             {Header:"Court5",accessor:"court5"},
//                             {Header:"Court6",accessor:"court6"},
//                             {Header:"Court7",accessor:"court7"},
//                             {Header:"Court8",accessor:"court8"},
//                             {Header:"Court9",accessor:"court9"},
//                         ]
//                     }
//                 ]}

//                 className="React-table"
//             />
//  */}

//             <h1 onClick={() => alert("test")}>test1337</h1>
            
//             <h1 onClick={() => alert("test")}>test1337</h1>
//             <h1 onClick={() => alert("test")}>test1337</h1>
//             <h1 onClick={() => console.log({data})}>test1337</h1>

//          <ReactTable
//           data={data}
//           columns={[
//             {
//               Header: "Name",
//               columns: [
//                             {Header:"Time",accessor:"time"},
//                             {Header:"Court1",accessor:"court1"},                            
//                             {Header:"Court2",accessor:"court2"},
//                             {Header:"Court3",accessor:"court3"},
//                             {Header:"Court4",accessor:"court4"},
//                             {Header:"Court5",accessor:"court5"},
//                             {Header:"Court6",accessor:"court6"},
//                             {Header:"Court7",accessor:"court7"},
//                             {Header:"Court8",accessor:"court8"},
//                             {Header:"Court9",accessor:"court9"},
//               ]
              
//             }
//           ]}
//           className="-striped -highlight"
//         />



//         </div>
//     )
// }
// export default Group2


// import React from 'react'
// import ReactDom from 'react-dom'
// import ReactTable from 'react-table-6'
// import 'react-table-6/react-table.css';

// import Data from '../../api/booking_data'
// import { CommuteRounded } from '@material-ui/icons'

// export default class Group2 extends React.Component {
//     constructor(props){
//         super(props)
//         this.state = {
//             data : Data
//         }
//     }
//     render(){
//         const {data} = this.state
//     return(
//         <div>
//              <ReactTable    
//                 data = {data}
//                 columns= {[
//                     {
//                         Header: "All courts",
//                         columns: [
// {Header:"time",accessor:"time"},
// {Header:"Court1",accessor:"court1"},
// {Header:"Court2",accessor:"court2"},                                            
// {Header:"Court3",accessor:"court3"},                                            
// {Header:"Court4",accessor:"court4"},                                            
// {Header:"Court5",accessor:"court5"},                                            
// {Header:"Court6",accessor:"court6"},                                            
// {Header:"Court7",accessor:"court7"},                                            
// {Header:"Court8",accessor:"court8"},                                            
// {Header:"Court9",accessor:"court9"},                                            
//                         ]
//                     }
//                 ]}
            
//             /> 
//         <h1>test</h1>
//         </div>
//     )
//     }
// }


import React , {useState, useEffect} from 'react'
import styled from 'styled-components'
import { useExpanded, useTable } from 'react-table'

import makeData from './makeData'
import Data from '../../api/booking_data'
import BookingService from '../../services/booking_service'
import '../../css/Group2.css'

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

// const bgforTime = {
//     background : ""
// }
// const bgforTrue = {
//     for(let i=0;i< arr.length;i++){
//     if(JSON.stringify(x) == JSON.stringify(arr[i]) ){
        
//     }
//     }
// }

// const bgforFalse = {
//     background : "red"
    
// }


// const bgCell = (cell) => {
//     if(cell.column.Header == "time"){
//         return bgforTime
//     }
//     else if(cell.value == true){
//         return bgforTrue
//     }else{
//         return bgforFalse
//     }
// }

// var arr = [0]

// const onRowClick = (cell,add,setAdd) => {
//     // const [selected, setSelected] = useState(-1)

//     console.log(`${cell.row.index} and ${cell.value} and ${cell.column.Header}`)
    
//     // setAdd(!add)
//     // console.log(add)

//     let x  = {
//        row:cell.row.index,
//        column:cell.column.Header
//     }   

//     // if(arr.includes(x)){
//     //    let pointer =  arr.indexOf(x)
//     //     arr.splice(pointer,1)
//     // }
//     // if(arr.length == 0){
//     //     arr.push(x)
//     // }else{
//     // for(let i=0;i<arr.length;i++){
//     //     if(arr[i] == x){
//     //         arr.splice(i,1)
//     //     }
//     // else{
// //   arr.push(x)
//     // }

//     //    let limit = arr.length
//     //    let i = 0
//     //    while(i < limit){
//     // if(x == arr[i]){
//     //     console.log("test")
//     //     let position = arr.indexOf(x)
//     //     console.log(position)
//     //     arr.splice(position,1)
//     // }else{
//     //     arr.push(x)
//     //     console.log('add')
//     //     // console.log(x)
    
//     // }
//     // i++
// // }

// // this is just for test

//     // console.log(`this is x:${x}`)
//     // arr.push(x)
//     // console.log(`this is array container:${arr}`)
//     // for(let i in arr){
//     //     console.log(arr[i])
//     //     if(arr[i] == x){
//     //         console.log("wow this is what I want")
//     //     }
//     // }

// // *********************
// // global y = false
// for(let i in arr){
//     var y = false;
//     // console.log(arr[i])
//     if(JSON.stringify(arr[i]) == JSON.stringify(x)){
//         let position = arr.indexOf(x) 
//         arr.splice(position,1)
//         console.log(`position:${position}`)
//         console.log("removed")
//          y=true
      
//     }
    
// }
// if(y == false && cell.value == true){
//     arr.push(x)
  
// }

// // this is the last part of onRowClick
// console.log(arr)
// }

// console.log(arr)

// this part is for return style to table

// const bgforTime = {
//     background : ""
// }
// const bgforTrue =(cell) => {

//     // var bgCheck = false
//     var arr_pointer = undefined
//     let  x = {
//         row:cell.row.index,
//         column:cell.column.Header
//     }
//     for(let j in arr){
//         var bgCheck = false
//     if(JSON.stringify(x) == JSON.stringify(arr[j]) ){
//         bgCheck = true
//         arr_pointer = arr[j]
//         break
//     }
//     }
//     if(bgCheck){
//     // return console.log(`this is bgCheck:${bgCheck} ${x}`)z
//         // return bgGreen
//         // return console.log(arr)
//         return(
//             "test__ok"
//         )
//     }
//     // console.log("fucking shitttt")
//     // console.log(arr)
//     // console.log(x)
// }


// const bgforFalse = {
//     background : "red"
    
// }

// const bgCell = (cell) => {
//     if(cell.column.Header == "time"){
//         return bgforTime
//     }
//     else if(cell.value == true){
//         return bgforTrue(cell)
        
//     }
//     else{
//         return bgforFalse
//     }

    
// }

// var arrState = []

function Table({ columns, data , arrRoot , setArr }) {
    

    // Use the state and functions returned from useTable to build your UI
    const [add,setAdd] = useState(false)
    const [arr,setArrState] = useState([0])
    const [bgColor, setBgColor] = useState("")
    const [bgCheck, setBgCheck] = useState(false)
    // console.log(add)
    
    // const checkBgColor = (cell) => {
    //     let bgCheck = false
    //     let x = {
    //         row:cell.row.index,
    //         column:cell.column.Header
    //     }
    //     for(let bgi in arrState){
    //         if(JSON.stringify(arrState[bgi]) == JSON.stringify(x)){
    //             bgCheck = true
    //             break
    //         }
    //     }
    //     console.log("bgCheck" + bgCheck)
    //     if(cell.value == false){
    //         setBgColor("bg__false")
    //         // return "bg__false"
    //     }
    //     else if(bgCheck == true){
    //         setBgColor("test__ok")
    //         // return "test__ok"
    //     }else{
    //         setBgColor("test2__ok")
    //         // return "test2__ok"
    //     }
    //     // else if (){
    //     //     return "test__ok"
    //     // }
    //     // else if(cell.value == true && x )
    //     // return (
    //     //     bgColor
    //     //     // console.log(bgColor)
    // //     )
    // }
// let arr = [0]

const bgforTime = {
    background : "white"
}
const bgforTrue =(cell) => {

    let  x = {
        row:cell.row.index,
        column:cell.column.Header
    }
    for(let j in arr){
        var bgCheck = false
    if(JSON.stringify(x) == JSON.stringify(arr[j]) ){
        // position = arr.indexOf(x)
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
        // let arr = []
       let x = {
           row:cell.row.index,
           column:cell.column.Header
       }
       // I think at this point when I use includes method, it will call index not value then I have to use loop to solve 
    //    if( cell.value == true && arrState.includes(x)){
    //         let position = arrState.indexOf(x)
    //         arrState.splice(position,x)
    //         console.log("remove")
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
    // setArr([99,999,9999,99999])
    
       console.log("this is arr")
       console.log(arr)
       console.log("this is arrRoot")
       console.log(arrRoot)
    //    console.log("includes : " + arrState.includes(x))
       console.log(x)
       console.log("value " + cell.value)
       // at this point click should work for add and remove value
    //    setArrState(arr)   // add arr to state this will cause page rerender
    //    checkBgColor
    //    setBgCheck(cell.value)
    //    setAdd(sign)
        // {setArr(arr)}
        // setArr([99,999,9999,99999])
       }
    
       
    
    //   let bgClass = bgCheck ? add ? "test__ok" : "test2__ok" : "test2__ok"

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
                                    // onClick = {() => {setAdd(!add)}}
                                    //  className = {bgClass}
                                    // onClick = {() => onRowClick(cell)}
                                    // className ={ cell.value ? bgCell(cell) : "test2__ok" } 
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
    
function Group2() {
    const [arrRoot, setArr] = useState([0])
    // const [add, setAdd] = useState(false)
    // console.log(add)
    const [dataTemp, setDataTemp] = useState([])
    // const [arrState, setArrState] = useState([])
    // console.log(Data)
    const [apidata,setApidata] = useState(undefined)
    // const [data , setData] = useState()
    
   useEffect(() => {
       BookingService.booking().then(response => 
        {
             setDataTemp(response.data.status)
            // setDataTemp(response.data.status);
            // window.location.reload();
            
        }
        )
        
   }, []) 
    // useEffect(() => {
    //     fetch("http://localhost:8000/status/")
    //     .then(res => res.json())
    //     .then(
    //         (result) => {
    //             setDataTemp(
    //                 result.status
    //             )
    //         }
    //     )
        
        
    // }, [])
   // check by console.log(data)  >> make sure data really contain information from an api
    // don't forget to change variable at data memo  (datatemp)
    // const bookingCourts = () => {
    //     BookingService.bookingCourts(
    //         arrState,
    //     )
    // }

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
    // let test = dataTemp

    // the problem that I cannot use data because when useEffect has set to dataTemp, data is not set too
    const data = React.useMemo(() => Data, [])
    console.log(data)
    console.log(dataTemp)
    // console.log(Data[1])
    console.log("this is arrRoot")
    console.log(arrRoot)


    return (
        <div className="Group2">
            <Styles>
                <div className="group1_table">
                    <Table className="group1_eachtable" columns={columns} data={data} arr={arrRoot} setArr={setArr} />
                    {/* <Table className="group1_eachtable" columns={columns} data={data} /> */}
                </div>
            </Styles>

            <button
                className="Booking__submit"
                // onSubmit = {bookingCourts}
            >
                Submit
            </button>


            {/* <div className="Test">
            <h1>test</h1>
            </div> */}
        </div>
    )
}

export default Group2