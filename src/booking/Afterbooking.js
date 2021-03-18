
import React from 'react'
import '../css/Afterbooking.css'

import Row_value from '../api/DynamicTable'

class Afterbooking extends React.Component {
    constructor(){
        super()
        this.state = ({
            Row1 : Row_value,
            // bgColor1:"",
            // bgColor2:"",
            // bgColor3:"",
            // bgColor4:"",
            // bgColor5:"",
            // bgColor6:"",
            // bgColor7:"",
            // bgColor8:"",
            // bgColor9:"",
            // bgColor10:"",
            // bgColor11:"",
            // bgColor12:"",
            count:1,
            test4 : true,
            colorOfBackground : {}
            
        })
        this.handleClick = this.handleClick.bind(this)
        this.bgChange =  this.bgChange.bind(this)
       
    }

    handleClick(){
        //, backgroundColor:{bgColor1,bgColor2,bgColor3,bgColor4,bgColor5,bgColor6,bgColor7,bgColor8,bgColor9}
        
        return this.state.Row1.map((test) => {
            const { id, time, court1, court2, court3, court4, court5, court6, court7, court8, court9, backgroundColor:{bgColor1,bgColor2,bgColor3,bgColor4,bgColor5,bgColor6,bgColor7,bgColor8,bgColor9}} = test
            // test.backgroundColor.map(color =>{
            //     const {bgColor1,bgColor2,bgColor3,bgColor4,bgColor5,bgColor6,bgColor7,bgColor8,bgColor9} = color
           
            return(
                <tr>
                    <th >{time}</th>
                    <td key={id} style={{backgroundColor:this.state.bgColor1}} onClick={() => this.bgChange(id)}>{id} {court1} </td>
                    <td key={id} style={{backgroundColor:this.state.bgColor2}} onClick={() => this.bgChange(id)}>{id} {court2}</td>
                    <td key={id} style={{backgroundColor:this.state.bgColor3}} onClick={() => this.bgChange(id)}>{id} {court3}</td>
                    <td key={id} style={{backgroundColor:this.state.bgColor4}} onClick={() => this.bgChange(id)}>{id} {court4}</td>
                    <td key={id} style={{backgroundColor:this.state.bgColor5}} onClick={() => this.bgChange(id)}>{id} {court5}</td>
                    <td key={id} style={{backgroundColor:this.state.bgColor6}} onClick={() => this.bgChange(id)}>{id} {court6}</td>
                    <td key={id} style={{backgroundColor:this.state.bgColor7}} onClick={() => this.bgChange(id)}>{id} {court7}</td>
                    <td key={id} style={{backgroundColor:this.state.bgColor8}} onClick={() => this.bgChange(id)}>{id} {court8}</td>
                    <td key={id} style={{backgroundColor:this.state.bgColor9}} onClick={() => this.bgChange(id)}>{id} {court9}</td>
                </tr>
                
            )
        })
        // })
    }

    

    bgChange(id){ 
        if (id === 1){this.state.test4 ? this.setState({bgColor1 : 'lime', test4 : false}) : this.setState({bgColor1 : '', test4 : true})} 
        if (id === 2){this.state.test4 ? this.setState({bgColor2 : 'lime', test4 : false}) : this.setState({bgColor2 : '', test4 : true})}
        if (id === 3){this.state.test4 ? this.setState({bgColor3 : 'lime', test4 : false}) : this.setState({bgColor3 : '', test4 : true})}
        if (id === 4){this.state.test4 ? this.setState({bgColor4 : 'lime', test4 : false}) : this.setState({bgColor4 : '', test4 : true})}
        if (id === 5){this.state.test4 ? this.setState({bgColor5 : 'lime', test4 : false}) : this.setState({bgColor5 : '', test4 : true})}
        if (id === 6){this.state.test4 ? this.setState({bgColor6 : 'lime', test4 : false}) : this.setState({bgColor6 : '', test4 : true})}
        if (id === 7){this.state.test4 ? this.setState({bgColor7 : 'lime', test4 : false}) : this.setState({bgColor7 : '', test4 : true})}
        if (id === 8){this.state.test4 ? this.setState({bgColor8 : 'lime', test4 : false}) : this.setState({bgColor8 : '', test4 : true})}
        if (id === 9){this.state.test4 ? this.setState({bgColor9 : 'lime', test4 : false}) : this.setState({bgColor9 : '', test4 : true})}
        if (id === 10){this.state.test4 ? this.setState({bgColor10 : 'lime', test4 : false}) : this.setState({bgColor10 : '', test4 : true})}
        if (id === 11){this.state.test4 ? this.setState({bgColor11 : 'lime', test4 : false}) : this.setState({bgColor11 : '', test4 : true})}
        if (id === 12){this.state.test4 ? this.setState({bgColor12 : 'lime', test4 : false}) : this.setState({bgColor12 : '', test4 : true})}
    
 }
     
        render(){
    return (
     
        <div className="after__booking">
        
            <table className="booking__table">
                <tbody>  
                    {/* <tr>{this.renderTable()}</tr>  */}
                    

                        {this.handleClick()}
                
            
            
                </tbody>
            </table>

            <form className="Booking__submit" method='POST' action=''>
                <button  className='Cancle__button' type='submit' onClick = { () => console.log(alert(1))}>cancle</button>
                <button  className='Submit__button' type='submit'>submit</button>
            </form>
        </div>
    )
}
}
export default Afterbooking


// import React from 'react'
// import styled from 'styled-components'
// import { useTable } from 'react-table'

// import makeData from './showall/makeData'

// import '../../css/Group1.css'

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
// `

// const onRowClick = (state, rowInfo, column, instance) => {
//   return {
//     onClick : (e, handleOriginal) => {
//       console.log(`Row index: ${rowInfo.index}, column header: ${column.Header}`)
//       if(handleOriginal){
//         handleOriginal()
//       }
//     }
//   }
// }

// function Table({ columns, data}) {
//     // Use the state and functions returned from useTable to build your UI
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
//         <table {...getTableProps()}>
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
//                                     // use cell.value to identify each cell
//                                 >
//                                     {cell.render('Cell')}</td>
//                             })}
//                         </tr>
//                     )
//                 })}
//             </tbody>
//         </table>
//     )
// }


// function Group1() {

//     const columns = React.useMemo(
//         () => [
//             {
//                 Header: 'Name',
//                 columns: [
//                     {
//                         Header: 'Court1',
//                         accessor: 'court1',
//                     },
//                     {
//                         Header: 'Court2',
//                         accessor: 'court2',
//                     },
//                     {
//                         Header: 'Court3',
//                         accessor: 'court3',
//                     },
//                     {
//                         Header: 'Court4',
//                         accessor: 'court4',
//                     },
//                     {
//                         Header: 'Court5',
//                         accessor: 'court5',
//                     },
//                     {
//                         Header: 'Court6',
//                         accessor: 'court6',
//                     },
//                     {
//                         Header: 'Court7',
//                         accessor: 'court7',
//                     },
//                     {
//                         Header: 'Court8',
//                         accessor: 'court8',
//                     },
//                     {
//                         Header: 'Court9',
//                         accessor: 'court9',
//                     },

//                 ],
//             },
//         ],
//         []
//     )

    
//     const data = React.useMemo(() => makeData(20), [])


//     return (
//         <div className="Group1">
//             <Styles>
//                 <div className="group1_table">
//                     <Table className="group1_eachtable" columns={columns} data={data} />
//                     <Table className="group1_eachtable" columns={columns} data={data} />
//                 </div>
//             </Styles>
//         </div>
//     )
// }

// export default Group1

