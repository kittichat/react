import React,{useState} from 'react'
import './css/Login.css';
import Input_login from './Input_login';
import PersonIcon from '@material-ui/icons/Person';
import LockIcon from '@material-ui/icons/Lock';
import Avatar from '@material-ui/core/Avatar';
import { Link} from "react-router-dom";

function Login() {
    return (
        <div className="Login__part">

            <div className="Login__input">
                {/* <Avatar className="Login__avatar"/> */}
                <h1 className="Login__header">Sign In</h1>
                <form className="" >
                <Input_login Icon={PersonIcon} title={"username"} />
                <Input_login Icon={LockIcon} title={"password"}/>
                <button className="Login__button" type="submit" >Login</button>
                </form>
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

export default Login
