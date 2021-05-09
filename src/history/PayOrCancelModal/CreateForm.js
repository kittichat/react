import React from 'react'
import CheckButton from "react-validation/build/button"
import Form from "react-validation/build/form"
import { isEmail } from 'validator'
import Input from 'react-validation/build/input'
import { isThisQuarter } from 'date-fns'
import { ThumbUpSharp } from '@material-ui/icons'

import HistoryServices from '../../services/history_servies'

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
      name: "",
      email: "",
      phone: "",
      member: false,
      isSubmit: false,
      refundDetail: [],
      refunding: [],
      arr: [],
      // accountID:undefined,
      // accountName:undefined,
      pocDetail: [],
      POC:[],

    }

    // this.retrieveAllmember = this.retrieveAllmember.bind(this)
    // this.bookingInformation = this.bookingInformation.bind(this)
    this.handleCreate = this.handleCreate.bind(this)
    // this.onChangename = this.onChangename.bind(this)
    // this.onChangeemail = this.onChangeemail.bind(this)
    // this.onChangephone = this.onChangephone.bind(this)
    this.memberCheck = this.memberCheck.bind(this)
    // this.bookingVerfify = this.bookingVerfify.bind(this)
    this.RefundInformation = this.RefundInformation.bind(this)
    this.onChangeID = this.onChangeID.bind(this)
    this.onChangeName = this.onChangeName.bind(this)
    this.POCInformation = this.POCInformation.bind(this)
    this.handlePay = this.handlePay.bind(this)
    this.handleCancel = this.handleCancel.bind(this)
  }



  componentDidMount() {

    //  this.bookingInformation();
    //  this.memberCheck()

    // this.RefundInformation()
    this.POCInformation()

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

  // bookingInformation(){
  // this.setState({
  //   bookingDetail2: this.props.bookingDetail,
  //   bookingDetail3:this.props.bookingDetail3  
  // })
  // }

  onChangeName(e) {
    this.setState({
      accountName: e.target.value
    })
  }

  onChangeID(e) {
    this.setState({
      accountID: e.target.value
    })
  }

  RefundInformation() {
    this.setState({
      refundDetail: this.props.refundDetail
    })
  }

  POCInformation() {
    this.setState({
      pocDetail: this.props.pocDetail
    })
  }

  handlePay(){
    HistoryServices.PayOrCancel_post(
      "pay",
      this.state.arr,
    )
    .then(
      window.alert("Your payment is successfully"),
      window.location.reload()
      )
  }

  handleCancel(){
    HistoryServices.PayOrCancel_post(
      "cancel",
      this.state.arr,
    )
    .then(
      window.alert("Your cancelation is successfully"),
      window.location.reload()
      )
  }

  handleChange(bookingid) {
    this.state.pocDetail.map(member => {
      if (member.bookingid === bookingid) {
        if (this.state.POC.includes(member.bookingid) === false) {
          this.state.POC.push(
            member.bookingid,
          )
        } else {
          let position = this.state.POC.indexOf(member.username)
          this.state.POC.splice(position, 1)
        }
      }
    })

    this.setState({
      arr: this.state.POC
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
  handleCreate(e) {
    e.preventDefault()
    this.form.validateAll();


    if (this.checkBtn.context._errors.length === 0) {
      HistoryServices.PayOrCancel_post(
        this.state.arr,


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

  // bookingVerfify(e){
  //   e.preventDefault()
  //   this.form.validateAll();

  //   this.setState({
  //     Successful:false
  //   })

  //   if(this.checkBtn.context._errors.length === 0){
  //     GroupBooking.BookingVerify(
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

  render() {

    console.log("POC ",this.state.POC)
    console.log(this.state.arr)

    const { member, isSubmit } = this.state
    return (
      <div>
        { isSubmit ?
          <div>
            <Form
              // onSubmit={this.bookingVerfify}
              ref={c => {
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
                style={{ display: "none" }}
                ref={c => {
                  this.checkBtn = c
                }}
              >

              </CheckButton>

            </Form>

          </div>

          :
          <div className="list_row">
            {/* <Form
              onSubmit={this.handleCreate}
              ref={c => {
                this.form = c
              }}

            > */}

              <h1>Refunding Details</h1>
              <div className="form-refund">

                {/* <label className="Group__label">Group Name</label> */}
{/* 
                <Input
                  className="accountID"
                  id="id"
                  onChange={this.onChangeID}
                  value={this.state.accountID}
                  validations={[required]}
                />
                <Input
                  className="accountName"
                  id="name"
                  onChange={this.onChangeName}
                  value={this.state.accountName}
                  validations={[required]}
                /> */}
              </div>
              <ul
                className="ul__booking"
              >
                {this.state.pocDetail &&
                  this.state.pocDetail.map(detail => (
                    <div>

                      <li
                        className="li__booking"
                      >
                        {/* {detail.number} */}
                        <input
                          type="checkbox"
                          // checked = {item.completed}
                          onChange={() => this.handleChange(detail.bookingid)}
                        />
                        {detail.date} {detail.time} {detail.court}
                      </li>
                    </div>
                  ))
                }
              </ul>

              <div className="form-group">
                <button 
                className="Booking__submit"
                type="submit"
                onClick = {() => this.handlePay()} 
                 >
                  Pay
                </button>
                <button 
                className="Booking__submit"
                 type="submit"
                 onClick = {() => this.handleCancel()}
                 >
                  Cancel
                </button>
              </div>

              {/* <CheckButton
                className=""
                style={{ display: "none" }}
                ref={c => {
                  this.checkBtn = c
                }}
              >

              </CheckButton> */}
            {/* </Form> */}
          </div>
        }

      </div>

    )
  }
}

export default CreateForm

