import React,{useState} from 'react'
import { Link} from "react-router-dom";
import Form from "react-validation/build/form"
import Input from "react-validation/build/input"
import CheckButton from "react-validation/build/button"

import './../css/Login.css'

import Input_login from './Input_login';
import AuthService from "../services/auth_service"

import PersonIcon from '@material-ui/icons/Person';
import LockIcon from '@material-ui/icons/Lock';
import Avatar from '@material-ui/core/Avatar';

const required = value => {
    if (!value){
        return (
            <div className="alert ... " role="alert">
                This field is required
            </div>
        )
    }
} 



class Login extends React.Component {
    constructor(props){
        super(props)
        this.state = {
            username:"",
            password:"",
            loading:false,
            message:"",
        }
        this.handleLogin = this.handleLogin.bind(this)
        this.onChangeUsername = this.onChangeUsername.bind(this)
        this.onChangePassword = this.onChangePassword.bind(this)

    }

    onChangeUsername(e) {
        this.setState({
            username : e.target.value 
        });
    }

    onChangePassword(e) {
        this.setState({
            password: e.target.value
        })
    }

    handleLogin(e) {
        e.preventDefault();
        
       this.setState({
           message:'',
           loading:true
       });
       
        // this.form.validateAll();

    if (this.checkBtn.context._errors.length === 0){
        AuthService.login(this.state.username, this.state.password).then(
            () => {
                this.props.history.push("/profile");
                window.location.reload();
            },
            error => {
                const resMessage = 
                (error.response && 
                    error.response.data && 
                    error.response.data.message) ||
                    error.message ||
                    error.toString();
                
                this.setState({
                    loading: false,
                    message:resMessage
                });
                
            }
        );
    } else {
        this.setState({
            loading:false
        });
    }
}

    render(){
    return (
        <div className="Login__part">

            <div className="Login__input">
                {/* <Avatar className="Login__avatar"/> */}
                <h1 className="Login__header">Sign In</h1>


                <Form 
                className=""
                 onSubmit={this.handleLogin}
                 ref={c => {
                     this.form = c;
                 }}  
                >

                <Input_login 
                Icon={PersonIcon} 
                title={"username"}
                name="username"
                value={this.state.username}
                onChange={this.onChangeUsername}
                validations={[required]}
                type={"text"}
                />

                <Input_login 
                    Icon={LockIcon}
                    title={"password"}
                    name='password'
                    value={this.state.password}
                    onChange={this.onChangePassword}
                    validations={[required]}
                    type={"password"}
                 />

                {/* <Input
                type="text"
                className="form-control"
                name="username"
                value={this.state.username}
                onChange={this.onChangeUsername}
                validations={[required]}
                 />
           

              <Input
                type="password"
                className="form-control"
                name="password"
                value={this.state.password}
                onChange={this.onChangePassword}
                validations={[required]}
                  /> */}
                
                    <button 
                        className="Login__button" 
                        type="submit"
                        disabled={this.state.loading}
                        >
                            {this.state.loading && (<span className=""></span>)}
                        <span>Login</span> 
                    </button>
                
                    <CheckButton
                    style={{ display:"none" }}
                    ref={c => {
                        this.checkBtn = c;
                    }}
                    >

                </CheckButton>
                </Form>
                 {/* this.state.message */}
           

                <div className="Input__checkbox">
                    
                        <input type="checkbox" />
                        <h4 className="Input__rememberme">rememberme</h4>
                        <Link className="Input__forgotpass" to="https://google.com">Forgot Password</Link>
                    
                    
                </div>

              
            </div>
            <hr className="Login__line"></hr>
            <div className="Login__regis">
                <h4>Don't have a account</h4>
                <Link to="/register" >Register Here!</Link>
            </div>
        </div>

    )
    }
}


export default Login
