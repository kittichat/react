import React from 'react'
import CheckButton from "react-validation/build/button"
import Form from "react-validation/build/form"
import {isEmail} from 'validator'
import Input from 'react-validation/build/input'

// import BookingService from '../../services/booking_service'
import GroupBooking from '../../../services/groupBooking_service'


// import "../../css/CreateForm.css"

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
      bookingDetail3:[],
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
    // this.onChangename = this.onChangename.bind(this)
    // this.onChangeemail = this.onChangeemail.bind(this)
    // this.onChangephone = this.onChangephone.bind(this)
    this.memberCheck  = this.memberCheck.bind(this)
    this.bookingVerfify = this.bookingVerfify.bind(this)
  }



    componentDidMount(){
    
       this.bookingInformation();
       this.memberCheck()

    }

    memberCheck(){
      // let user = AuthService.getCurrentUser()
      let user = document.cookie
      if(user){
        this.setState({
          member : true
        })
      }
    }

    bookingInformation(){
    this.setState({
      bookingDetail2: this.props.bookingDetail,
      bookingDetail3:this.props.bookingDetail3  
    })
    }

    // onChangename(e){
    //   this.setState({
    //     name:e.target.value
    //   })
    // }

    // onChangeemail(e){
    //   this.setState({
    //     email:e.target.value
    //   })
    // }

    // onChangephone(e){
    //   this.setState({
    //     phone:e.target.value
    //   })
    // }

    

// **********************************************************************
    handleCreate(e){
      e.preventDefault()
      this.form.validateAll();


      if(this.checkBtn.context._errors.length === 0){
        GroupBooking.CourtBooking(
          this.state.bookingDetail2,
          // localStorage.getItem("date2"),
        )
        .then(
          response => {
            if(response.data.success == false){
              window.alert("Sorry, please check stage again")
              window.location.reload()}
            this.setState({
              message: response.data.message,
              uuid:response.data.bookingid, // change this line 
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
     
      this.setState({
        Successful:false
      })

      if(this.checkBtn.context._errors.length === 0){
        GroupBooking.BookingVerify(
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
      let test = this.state.bookingDetail2
      test.map(test1 => {
        console.log(test1.day)
      })
      // console.log("booknigDetail2",test[0].day)
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

       <h1>Booking Details</h1>
      
           <ul
            className ="ul__booking"
           >
               {this.state.bookingDetail2 && 
                    this.state.bookingDetail2.map(detail => (
                        <div>
                          {detail.dayTemp}
                        <li
                          className = "li__booking"
                        >
                        {/* {detail.courtandTime}   */}
                          {detail.day} {detail.time}  {detail.court}
                           {/* {detail.dayTemp} */}
                        </li>
                        </div>
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

