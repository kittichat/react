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
                    {/* <tr>{this.renderTable()}</tr> */}
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
