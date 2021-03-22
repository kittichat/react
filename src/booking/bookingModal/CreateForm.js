
// import React , {useState, useEffect} from 'react'
// import { Link } from "react-router-dom"
// import CheckButton from "react-validation/build/button"
// import Form from "react-validation/build/form"

// import Memberlist from '../../services/memberlist_service'

// import "../../css/CreateForm.css"
// import { checkPropTypes } from 'prop-types'

//   const HandleChecked = (props) => {

//     const [Change,setChange] = useState(props)

//     return (

//       // Some problem here, it is how to send props in hooks
//       <div>
//         <input 
//           type="checkbox"
//           checked={Change.isCheck}
//           onChange={() => setChange(!Change.isCheck)}
//         />
//       </div>
//     )
//   }



//  function CreateForm(props) {
// //  const CreateForm = (props) => {
//   // const [memberlist, setMemberlist] = useState({})

//   // useEffect(() => {
//   //   const member_list = Memberlist.member();
//   //   member_list.then((response) => {
//   //     setMemberlist(response.map())
//   //   })
//   // })

//   const [Listofmember , setListofmember] = useState([])
//   const [Successful , setSuccessful] = useState(false)
//   const [bookingDetail2, setBookingDetail] = useState([])
//     useEffect(() => {
//        retrieveAllmember();
//        bookingInformation();
//     }, [])


//     const retrieveAllmember = () =>{
//         Memberlist.getAll()
//             .then(response => {
//                 setListofmember(response.data)   // data is list of name of group
//                 console.log(response.data)
//             })
//             .catch(e => {
//                 console.log(e)
//             })
//     }

//     const bookingInformation = () => {
//         const test = props.bookingDetail
//     setBookingDetail(props.bookingDetail)
//     }

//     const handleCreate = (e) => {
//       e.preventDefault()

//       setSuccessful(false)

//       // if(this.checkBtn.context._errors.length === 0){
//       //   Memberlist.createRequire(Listofmember)
//       //   .then(
//       //     response => {
//       //       setSuccessful({
//       //         message: response.data.message,
//       //         Successful: true
//       //       })
//       //     },
//       //     error => {
//       //       const resMessage = 
//       //       (error.response && 
//       //         error.response.data &&
//       //         error.response.data.message) ||
//       //         error.message ||
//       //         error.toString();

//       //         this.setState({
//       //           successful: false,
//       //           message: resMessage
//       //         })
//       //     }
//       //   )
//       // }


//     }

//   return (
//     <div className="list_row">
//       <Form 
//         // onSubmit={handleCreate}
//         // ref = {c => {
//         //   this.form = c
//         // }}
      
//       >
//        <div className="form-group">
//          <label htmlFor="name">Name</label>
//          <input className="form-control" id="name" />
//        </div>
//        <div className="form-group">
//          <label htmlFor="email">Email address</label>
//          <input
//            type="email"
//            className="form-control"
//            id="email"
//            placeholder="name@example.com"
//          />
//        </div>

//            <ul>
//                {bookingDetail2 && 
//                     bookingDetail2.map(detail => (
//                         <li>
//                             {/* {detail.time}
//                             {detail.column} */}
//                           {detail.time}  {detail.column}
//                         </li>
//                     ))
//                }
//            </ul>
       
//         <div className="form-group">
//          <button className="form-control btn btn-primary" type="submit">
//            Submit
//          </button>
//        </div>

//        <CheckButton
//         // className=""
//         // style={{display:"none"}}
//         // ref={c => {
//         //   this.checkBtn = c
//         // }}
//        >

//        </CheckButton>
//       </Form>
//     </div>
//   )
// }

// export default CreateForm


import React , {useState, useEffect}from 'react'
import ReactDom from 'react-dom'
import { Link } from "react-router-dom"
import CheckButton from "react-validation/build/button"
import Form from "react-validation/build/form"
import {isEmail} from 'validator'

import BookingService from '../../services/booking_service'
import AuthService from '../../services/auth_service'

import "../../css/CreateForm.css"
import { checkPropTypes } from 'prop-types'

  const HandleChecked = (props) => {

    const [Change,setChange] = useState(props)

    return (

      // Some problem here, it is how to send props in hooks
      <div>
        <input 
          type="checkbox"
          checked={Change.isCheck}
          onChange={() => setChange(!Change.isCheck)}
        />
      </div>
    )
  }

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
          This is not a valid emai;
        </div>
      )
    }
  }

  const name = value =>{
    if (value.length === 0 || value.length > 40){
      return (
        <div className="alert alert-danger" role="alert">
          please fill in the firstname and don't let it more than 40
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
     
      // this.setState({
      //   Successful:false
      // })

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
              uuid:response.data.something, // change this line 
              isSubmit : true,
              // Successful: true
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
                // successful: false,
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
              // Successful: true
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
                // successful: false,
                message: resMessage
              })
          }
        )
      }

      

    }

    render(){
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
        <h1>test something</h1>

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
         <label htmlFor="name">Name</label>
         <input 
          className="form-control"
          id="name" 
          value={this.state.name}
          onChange={this.onChangename}
          />

       </div>

       <div className="form-group">
         <label htmlFor="email">Email address</label>
         <input
           type="text"
           className="form-control"
           id="email"
           placeholder="name@example.com"
           value={this.state.email}
           onChange={this.onChangeemail}
           validations= {[required,vemail]}
         />
       </div>

       <div className="form-group">
          <label>Phone number</label>
          <input
            className="form-control"
            id="phone"
            placeholder="012-345-6789"
            value={this.state.phone}
            onChange={this.onChangephone}
          />
       </div>
       </div>
       : null
      }
           <ul>
               {this.state.bookingDetail2 && 
                    this.state.bookingDetail2.map(detail => (
                        <li>
                            {/* {detail.time}
                            {detail.column} */}
                          {detail.time}  {detail.column}
                        </li>
                    ))
               }
           </ul>
       
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
    }

    </div>
      
  )
      }
}

export default CreateForm

