import React,{useState} from 'react'
import { withRouter,Link} from "react-router-dom";
import Form from "react-validation/build/form"
import Input from "react-validation/build/input"
import CheckButton from "react-validation/build/button"

import './../css/Login.css'

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

                <h1 className="Login__header">Sign In</h1>

                <Form 
                className=""
                 onSubmit={this.handleLogin}
                 ref={c => {
                     this.form = c;
                 }}  
                >

                    <div className="Input__login">
                        <div className="Input__type">
                            <PersonIcon className="Input__icon"/>
                            <Input
                                type="text"
                                placeholder="Username"
                                className="Input__input"
                                name="username"
                                value={this.state.username}
                                onChange={this.onChangeUsername}
                                validations={[required]}
                            />
                        </div>

                        <div className="Input__type">
                            <LockIcon className="Input__icon"/>
                            <Input
                                type="password"
                                placeholder="Password"
                                className="Input__input"
                                name="password"
                                value={this.state.password}
                                onChange={this.onChangePassword}
                                validations={[required]}
                            />    
                        </div>
                    </div>
                    
                    <button 
                        className="Login__button" 
                        type="submit"
                        disabled={this.state.loading}
                    >
                        {this.state.loading && (<span className=""/>)}
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

export default withRouter(Login)

