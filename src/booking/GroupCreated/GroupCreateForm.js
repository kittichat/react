import React from 'react'
import ReactDom from 'react-dom'
import { Link } from "react-router-dom"
import CheckButton from "react-validation/build/button"
import Form from "react-validation/build/form"
import {isEmail} from 'validator'
import Input from 'react-validation/build/input'

import BookingService from '../../services/booking_service'
import AuthService from '../../services/auth_service'
import createGroup from '../../services/groupservices'

import "../../css/CreateForm.css"




  const required = value => {
    if (!value){
      return (
        <div className="alert alert-danger" role="alert">
          This field is required!
        </div>
      );
    }
  };

  const vemail = value =>{
    if  (!isEmail(value)){
      return(
        <div className="alert alert-danger" role="alert">
          This is not a valid email;
        </div>
      )
    }
  }

  const name = value =>{
    if (value.length === 0 || value.length > 40){
      return (
        <div className="alert alert-danger" role="alert">
          please fill in your name 
        </div>
      )
    }
  }


class GroupCreateForm extends React.Component {
  constructor(props){
    super(props)
    this.state = {
      // Listofmember:[],
  // successful:false,
      bookingDetail2:[],
      name:"",
      email:"",
      phone:"",
      member:false,
      isSubmit:false,
      uuid:undefined,
      isSuccess:false,
      price:{},

      
    }

    // this.retrieveAllmember = this.retrieveAllmember.bind(this)
  
    this.handleCreate = this.handleCreate.bind(this)
   
  }



    // componentDidMount(){
    
       

    // }


    
    

// **********************************************************************
    handleCreate(e){
      e.preventDefault()
      this.form.validateAll();


      if(this.checkBtn.context._errors.length === 0){
        createGroup.createGroupToServer(
          this.state.bookingDetail2,
          this.state.name,
          this.state.email,
          this.state.phone,
        )
        .then(
          response => {
            this.setState({
              message: response.data.message,
              uuid:response.data.receipt, // change this line 
              price:response.data.price,
              isSubmit : true,
            })
          },
          error => {
            const resMessage = 
            (error.response && 
              error.response.data &&
              error.response.data.message) ||
              error.message ||
              error.toString();

              this.setState({
                message: resMessage
              })
          }
        )
      }

      

    }

    // bookingVerfify(e){
    //   e.preventDefault()
    //   this.form.validateAll();
     
    //   // this.setState({
    //   //   Successful:false
    //   // })

    //  if(this.checkBtn.context._errors.length === 0){
    //     BookingService.BookingVerify(
    //       this.state.uuid,
    //     )
    //     .then(
    //       response => {
    //         this.setState({
    //           message: response.data.message,
    //           // isSuccess:true,
    //           // Successful: true
    //         })
    //         window.location.reload()
    //         window.alert("Your booking is Successful")
    //       },
    //       error => {
    //         const resMessage = 
    //         (error.response && 
    //           error.response.data &&
    //           error.response.data.message) ||
    //           error.message ||
    //           error.toString();

    //           this.setState({
    //             // successful: false,
    //             message: resMessage
    //           }) 
    //       }
    //     )
    //   }

      

    // }

    render(){
      
  return (
   <div>
    
    <div className="list_row">
      <Form 
        onSubmit={this.handleCreate}
        ref = {c => {
          this.form = c
        }}
      
      >
     
       
        <div className="form-group">
         <button className="form-control btn btn-primary" type="submit">
           Submit
         </button>
       </div>

       <CheckButton
        className=""
        style={{display:"none"}}
        ref={c => {
          this.checkBtn = c
        }}
       >

       </CheckButton>
      </Form>
    </div>
    

    </div>
      
  )
      }
}

export default GroupCreateForm

