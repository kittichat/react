import React from 'react'
import Form from "react-validation/build/form"
import Input from "react-validation/build/input"
import CheckButton from "react-validation/build/button"
import { isEmail } from 'validator'

import AuthService from '../services/auth_service'

import './../css/Register.css';

const required = value => {
  if (!value){
    return (
      <div className="alert alert-danger" role="alert">
        This field is requried!
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

const vusername = value =>{
  if (value.length < 3 || value.length > 20){
    return (
      <div className="alert alert-danger" role="alert">
        the username must between 3 and 20 characters
      </div>
    )
  }
}

const vpassword = value => {
  if (value.length < 6 || value.length > 40){
    return (
      <div className="alert alert-danger" role="alert">
        the password must be between 6 and 40 characters
      </div>
    )
  }
}

const vconfirmpassword = value =>{
  if(value.length < 6 || value.length > 40){
    return (
      <div className="alert alert-danger" role="alert">
        the password must be between 6 and 40 characters
      </div>
    )
  }
}

const vfirstname = value =>{
  if (value.length === 0 || value.length > 40){
    return (
      <div className="alert alert-danger" role="alert">
        please fill in the firstname and don't let it more than 40
      </div>
    )
  }
}

const vlastname = value =>{
  if (value.length === 0 || value.length > 40){
    return (
      <div className="alert alert-danger" role="alert">
        please fill in the lastname and don't let it more than 40
      </div>
    )
  }
}



class Register extends React.Component {
  constructor(props){
    super(props)
    this.state = {
      username:"",
      firstname:"",
      lastname:"",
      passowrd:"",
      confirmpassword:"",
      email:"",
      successful:false,
    }
    this.handleRegister = this.handleRegister.bind(this);
    this.onChangeUsername = this.onChangeUsername.bind(this)
    this.onChangeFirstname = this.onChangeFirstname.bind(this)
    this.onChangeLastname = this.onChangeLastname.bind(this)
    this.onChangePassword = this.onChangePassword.bind(this)
    this.onChangeConfirmPass = this.onChangeConfirmPass.bind(this)
    this.onChangeEmail = this.onChangeEmail.bind(this)

  }

  onChangeUsername(e){
    this.setState({
      username : e.target.value
    })
  }

  onChangeFirstname(e){
    this.setState({
      firstname : e.target.value
    })
  }

  onChangeLastname(e){
    this.setState({
      lastname : e.target.value
    })
  }

  onChangePassword(e){
    this.setState({
      passowrd : e.target.value
    })
  }

  onChangeConfirmPass(e){
    this.setState({
      confirmpassword : e.target.value
    })
  }

  onChangeEmail(e){
    this.setState({
      email : e.target.value
    })
  }


  handleRegister(e){
    e.preventDefault()

    this.setState({
      message: "",
      successful: false
    })

    this.form.validateAll();

    if (this.checkBtn.context._errors.length === 0 ){
      AuthService.register(
        this.state.firstname,
        this.state.lastname,
        this.state.username,
        this.state.passowrd,
        this.state.confirmpassword,
        this.state.email,
        
      ).then(
        response => {
          this.setState({
            message: response.data.message,
            successful: true
          });
        },
        error => {
          const resMessage = 
            (error.response && 
              error.response.data &&
              error.response.data.message) ||
              error.message ||
              error.toString();

              this.setState({
                successful: false,
                message: resMessage
              })
        }
      )
    }
  }
  render(){
  return (  
    <div>
    <div className="Register__bg">
      <h1 className="Register__topic">Register</h1>
      <Form className="Register__form"
        onSubmit = {this.handleRegister} 
         ref = {c => {
           this.form = c;
         }}
        
      >

         {!this.state.successful && (
          <div>
            <div className="">
                <div className="Name">
                  {/* <label className="Firstname" action="" >First name</label> */}
                  <Input 
                    className="Register__firstname" 
                    type="text"
                    placeholder="First name" 
                    name="firstname"
                    value={this.state.firstname}
                    onChange={this.onChangeFirstname}
                    validations={[required, vfirstname]}
                   />
                  {/* <label className="Lastname">Last name</label> */}
                  <Input 
                    className="Register__lastname" 
                    type="text"
                    placeholder="Last name"
                    value={this.state.lastname}
                    onChange={this.onChangeLastname}
                    validations={[required, vlastname]}
                    />
                </div>
                {/* <label>Email</label> */}
                <Input 
                  className="Register__email" type="text"
                  placeholder="example@email.com"
                  name="email"
                  value={this.state.email}
                  onChage={this.onChangeEmail}
                  validations={[required, vemail]}
                  />

                <Input 
                  className="Register__username" 
                  type="text"
                  placeholder="Username"
                  name="username"
                  value={this.state.username}
                  onChangeLastname={this.onChamgeUsername}
                  validations={[required, vusername]}
                  />

                  <Input 
                  className="Register__password" 
                  type="text"
                  placeholder="Password" 
                  name="password"
                  value={this.state.password}
                  onChange={this.onChangePassword}
                  validations={[required, vpassword]}
                  />

                  <Input 
                  className="Register__confirmpassword" 
                  type="text"
                  placeholder="Confirm Password" 
                  name="confirmpassword"
                  value={this.state.confirmpassword}
                  onChange={this.onChangeConfirmPass}
                  validations={[required, vconfirmpassword]}

                  />
                
                <div className="Register__gender">
                    <label >Gender</label>
                </div>

                

                <div className="Gender">
                  <div className="Checkbox__male">
                    <input type="checkbox" />
                    <label className="Male" >Male</label>
                  </div>
                  <div className="Checkbox__female">
                    <input type="checkbox" />
                    <label className="Female" >Female</label>
                  </div>
                </div>

                <div className="Register__birthday__label">
                  <label >Birthday</label>
                </div>
                {/*this space for register component*/}

            </div>
          </div>
        )}
        
        <div className="Register__button__position">
          <button 
            // type="submit"
            className="Register__button__size" 
            
           >
             Submit
           </button>
        </div>
        {/* alert response message */}
        {this.state.message && (
          <div className="form-group">
            <div 
              className={
                this.state.successful ? "alert alert-succcess" : "alert alert-danger"} role="alert"
              >
              {this.state.message}
            </div>
          </div>
        )}

        <CheckButton 
            // type="submit"
            className="Register__button__size" 
            style={{display:"none"}}
            ref={c => {
              this.checkBtn = c;
            }}
           >
             
        </CheckButton>
      </Form>

    </div>
    </div>
  )

  }
}

export default Register
