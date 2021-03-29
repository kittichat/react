import React from 'react'
import ReactDom from 'react-dom'
import { Link } from "react-router-dom"
import CheckButton from "react-validation/build/button"
import Form from "react-validation/build/form"
import {isEmail} from 'validator'
import Input from 'react-validation/build/input'

import BookingService from '../../services/booking_service'
import AuthService from '../../services/auth_service'

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

    const phone = phoneno =>{
      // const check = /^\d{10}$/;
    if (phoneno.length === 0 || phoneno.length > 10){
      return (
        <div className="alert alert-danger" role="alert">
          please fill in your phone number
        </div>
      )
  }
}
class CreateForm extends React.Component {
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
    this.bookingInformation = this.bookingInformation.bind(this)
    this.handleCreate = this.handleCreate.bind(this)
    this.onChangename = this.onChangename.bind(this)
    this.onChangeemail = this.onChangeemail.bind(this)
    this.onChangephone = this.onChangephone.bind(this)
    this.memberCheck  = this.memberCheck.bind(this)
    this.bookingVerfify = this.bookingVerfify.bind(this)
  }



    componentDidMount(){
    
       this.bookingInformation();
       this.memberCheck()

    }

    memberCheck(){
      let user = AuthService.getCurrentUser()
      if(user){
        this.setState({
          member : true
        })
      }
    }

    bookingInformation(){
    this.setState({
      bookingDetail2: this.props.bookingDetail
    })
    }

    onChangename(e){
      this.setState({
        name:e.target.value
      })
    }

    onChangeemail(e){
      this.setState({
        email:e.target.value
      })
    }

    onChangephone(e){
      this.setState({
        phone:e.target.value
      })
    }

    

// **********************************************************************
    handleCreate(e){
      e.preventDefault()
      this.form.validateAll();


      if(this.checkBtn.context._errors.length === 0){
        BookingService.CourtBooking(
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

    bookingVerfify(e){
      e.preventDefault()
      this.form.validateAll();
     
      // this.setState({
      //   Successful:false
      // })

      if(this.checkBtn.context._errors.length === 0){
        BookingService.BookingVerify(
          this.state.uuid,
        )
        .then(
          response => {
            this.setState({
              message: response.data.message,
              // isSuccess:true,
              // Successful: true
            })
            window.location.reload()
            window.alert("Your booking is Successful")
          },
          error => {
            const resMessage = 
            (error.response && 
              error.response.data &&
              error.response.data.message) ||
              error.message ||
              error.toString();

              this.setState({
                // successful: false,
                message: resMessage
              })
          }
        )
      }

      

    }

    render(){
      console.log(this.state.uuid)
      const { member, isSubmit } = this.state
  return (
   <div>
     { isSubmit ? 
     // something
    //  <h1>test</h1>
     <div>
     <Form
      onSubmit={this.bookingVerfify}
      ref = {c => {
        this.form = c
      }}

      >
        {/* I think we should should some qr code for tranfers the money */}
        <h1>Please sends your receipt to the admin through line</h1>
        <h2>Thank you</h2>

        <h1>Total price</h1>
        <h1>{this.state.price.normal_price}</h1>
        <h1>{this.state.price.discount_time}</h1>
        <h1>{this.state.price.discouht_member}</h1>

        <div className="form-group">
         <button className="form-control btn btn-primary" type="submit">
           Verify
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
     
     :
    <div className="list_row">
      <Form 
        onSubmit={this.handleCreate}
        ref = {c => {
          this.form = c
        }}
      
      >
      { !member ? <div>
       <div className="form-group">
         <label className="Header__label">Name</label>
         <Input 
          className="form-control"
          id="name" 
          value={this.state.name}
          onChange={this.onChangename}
          // validations={[name]}
          />

       </div>

       <div className="form-group">
         <label className="Header__label">Email address</label>
         <Input
           type="text"
           className="form-control"
           id="email"
           placeholder="name@example.com"
           value={this.state.email}
           onChange={this.onChangeemail}
          //  validations= {[vemail]}
         />
       </div>

       <div className="form-group">
          <label className="Header__label">Phone number</label>
          <Input
            className="form-control"
            id="phone"
            placeholder="012-345-6789"
            value={this.state.phone}
            onChange={this.onChangephone}
            // validations={[phone]}
          />
       </div>
       </div>
       : <h1>Booking Details</h1>
      }
           <ul
            className ="ul__booking"
           >
               {this.state.bookingDetail2 && 
                    this.state.bookingDetail2.map(detail => (
                        <li
                          className = "li__booking"
                        >
                            {/* {detail.time}
                            {detail.column} */}
                          {detail.time}  {detail.column}
                        </li>
                    ))
               }
           </ul>
       
        <div className="form-group">
         <button className="Booking__submit" type="submit">
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
    }

    </div>
      
  )
      }
}

export default CreateForm

