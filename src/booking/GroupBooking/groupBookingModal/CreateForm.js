import React from 'react'
import CheckButton from "react-validation/build/button"
import Form from "react-validation/build/form"
import { isEmail } from 'validator'
import Input from 'react-validation/build/input'

import '../../../css/CreateFormForGroupBk.css'

// import BookingService from '../../services/booking_service'
import GroupBooking from '../../../services/groupBooking_service'


// import "../../css/CreateForm.css"

const required = value => {
  if (!value) {
    return (
      <div className="alert alert-danger" role="alert">
        This field is required!
      </div>
    );
  }
};

const vemail = value => {
  if (!isEmail(value)) {
    return (
      <div className="alert alert-danger" role="alert">
        This is not a valid email;
      </div>
    )
  }
}

const name = value => {
  if (value.length === 0 || value.length > 40) {
    return (
      <div className="alert alert-danger" role="alert">
        please fill in your name
      </div>
    )
  }
}

const phone = phoneno => {
  // const check = /^\d{10}$/;
  if (phoneno.length === 0 || phoneno.length > 10) {
    return (
      <div className="alert alert-danger" role="alert">
        please fill in your phone number
      </div>
    )
  }
}
class CreateForm extends React.Component {
  constructor(props) {
    super(props)
    this.state = {
      bookingDetail2: [],
      bookingDetail3: [],
      name: "",
      email: "",
      phone: "",
      member: false,
      isSubmit: false,
      uuid: undefined,
      isSuccess: false,
      price: {},
      date: undefined,

    }

    this.bookingInformation = this.bookingInformation.bind(this)
    this.handleCreate = this.handleCreate.bind(this)
    this.memberCheck = this.memberCheck.bind(this)
    this.bookingVerfify = this.bookingVerfify.bind(this)
  }



  componentDidMount() {

    this.bookingInformation();
    this.memberCheck()

  }

  memberCheck() {
    // let user = AuthService.getCurrentUser()
    let user = document.cookie
    if (user) {
      this.setState({
        member: true
      })
    }
  }

  bookingInformation() {
    this.setState({
      bookingDetail2: this.props.bookingDetail,
      bookingDetail3: this.props.bookingDetail3,
      date: this.props.date,
    })
  }

  // **********************************************************************
  handleCreate(e) {
    e.preventDefault()
    this.form.validateAll();


    if (this.checkBtn.context._errors.length === 0) {
      GroupBooking.CourtBooking(
        this.state.bookingDetail3,
        this.state.date.year_month
        // localStorage.getItem("date2"),
      )
        .then(
          response => {
            if (response.data.success == false) {
              window.alert("Sorry, please check stage again")
              window.location.reload()
            }
            this.setState({
              message: response.data.message,
              uuid: response.data.bookingid, // change this line 
              price: response.data.price,
              isSubmit: true,

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

  bookingVerfify(e) {
    e.preventDefault()
    this.form.validateAll();

    this.setState({
      Successful: false
    })

    if (this.checkBtn.context._errors.length === 0) {
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

  render() {
    const { isSubmit } = this.state
    return (
      <div>
        { isSubmit ?
          <div>
            <Form
              onSubmit={this.bookingVerfify}
              ref={c => {
                this.form = c
              }}

            >
              <div className="price__details">
                <h1>Please send your receipt to admin's LINE application</h1>
                <h1>Total price</h1>
                <h1><pre>Normal price          {this.state.price.normal_price}</pre></h1>
                <h1><pre>Discount        </pre></h1>
                <h1><pre> Promotion Time      -{this.state.price.discount_time}</pre></h1>
                <h1><pre> Group               -{this.state.price.discount_group}</pre></h1>
                <hr></hr>
                <h1><pre>TOTAL                 {this.state.price.pay}</pre></h1>
              </div>
              <div className="form-group">
                <button className="price__submit" type="submit">
                  Submit
         </button>
              </div>

              <CheckButton
                className=""
                style={{ display: "none" }}
                ref={c => {
                  this.checkBtn = c
                }}
              >

              </CheckButton>

            </Form>

          </div>

          :
          <div
          //  className="list_row"
           >
            <Form
              onSubmit={this.handleCreate}
              ref={c => {
                this.form = c
              }}

            >

              <h1>Booking Details</h1>

              <ul
                className="ul__booking"
              >
                {this.state.bookingDetail2 &&
                  this.state.bookingDetail2.map(detail => (
                    <div>
                      {detail.dayTemp}
                      <li
                        className="li__booking"
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
                style={{ display: "none" }}
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

