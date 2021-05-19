import React from 'react'
import CheckButton from "react-validation/build/button"
import Form from "react-validation/build/form"
import { isEmail } from 'validator'
import Input from 'react-validation/build/input'
import { isThisQuarter } from 'date-fns'
import { ThumbUpSharp } from '@material-ui/icons'

// import HistoryServices from '../../services/history_servies'
import GroupList from '../../services/groupservices'

// import '../../css/RefundForm'
import '../../css/RefundForm.css'

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
      accountID:undefined,
      accountName:undefined,
      group:undefined,


    }

    this.handleCreate = this.handleCreate.bind(this)
    this.memberCheck = this.memberCheck.bind(this)
    this.RefundInformation = this.RefundInformation.bind(this)
    this.onChangeID = this.onChangeID.bind(this)
    this.onChangeName = this.onChangeName.bind(this)
  }



  componentDidMount() {
    this.RefundInformation()

  }

  memberCheck() {
    let user = document.cookie
    if (user) {
      this.setState({
        member: true
      })
    }
  }

  onChangeName(e){
    this.setState({
      accountName : e.target.value
    })
  }

  onChangeID(e){
    this.setState({
      accountID : e.target.value
    })
  }

  RefundInformation() {
    this.setState({
      refundDetail: this.props.GrouprefundDetail,
      group:this.props.group
    })
  }

  handleChange(detail) {
    this.state.refundDetail.map(member => {
      let memberBookingDetail = {weekday:member.weekday,court:member.court,time:member.time}
      let detailBookingDetail = {weekday:detail.weekday,court:detail.court,time:detail.time} 
      if ( JSON.stringify(memberBookingDetail) === JSON.stringify(detailBookingDetail)) {
        if (this.state.refunding.includes(memberBookingDetail) === false) {
          this.state.refunding.push(
            memberBookingDetail,
          )
        } else {
          let position = this.state.refunding.indexOf(memberBookingDetail)
          this.state.refunding.splice(position, 1)
        }
     
      }
     
    })

    this.setState({
      arr: this.state.refunding
    })
  }

  // **********************************************************************
  handleCreate(e) {
    e.preventDefault()
    this.form.validateAll();


    if (this.checkBtn.context._errors.length === 0) {
      GroupList.refund(
        this.state.group,
        this.state.arr,
        this.state.accountID,
        this.state.accountName
        
      )
      .then( response => {
        if (response.data.success == true){
        window.alert("Your refunding is successfuly");
        window.location.reload();
        

        }
        console.log(response)
        
      })

    


  }
}

  render() {

    console.log("refund ",this.state.arr)
    // console.log("arr ",this.state.arr)

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
          <div
          //  className="list_row"
           >
            <Form
              onSubmit={this.handleCreate}
              ref={c => {
                this.form = c
              }}

            >

              <h1 className="Refund__header">Refunding Details</h1>
              <div
               className="form-refund"
               >

                {/* <label className="Group__label">Group Name</label> */}
                <div className="Refund__accountDetailID">
                <h1 className="Refund__inputDetail">Account ID: </h1>
                <Input
                  className="Refund__accountID"
                  id="id"
                  onChange={this.onChangeID}
                  value={this.state.accountID}
                  validations={[required]}
                />
                </div>
                <div className="Refund__accountDetailName">
                <h1 className="Refund__inputDetail">Account Name: </h1>
                <Input
                  className="Refund__accountName"
                  id="name"
                  onChange={this.onChangeName}
                  value={this.state.accountName}
                  validations={[required]}
                />
                </div>
              </div>
              <ul
                className="ul__booking"
              >
                {this.state.refundDetail &&
                  this.state.refundDetail.map(detail => (
                    <div>

                      <li
                        className="Refund__li"
                      >
                        {/* {detail.number} */}
                        <input
                          type="checkbox"
                          className="Refund__checkbox"
                          // checked = {item.completed}
                          onChange={() => this.handleChange(detail)}
                        />
                        <pre>{detail.weekday}  {detail.time}  {detail.court}</pre>
                      </li>
                    </div>
                  ))
                }
              </ul>

              <div className="form-group">
                <button className="Refund__submit" type="submit">
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

