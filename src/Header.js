import React from 'react'
import {Link} from "react-router-dom"
import './css/Header.css';

import AuthService from './services/auth_service'

import HomeIcon from '@material-ui/icons/Home';


class Header extends React.Component {
    constructor(props){
        super(props)
        this.state = {
            currentUser :undefined,
           
        }

        this.logOut = this.logOut.bind(this)
    }

    componentDidMount(){
        const user = AuthService.getCurrentUser()

        if (user) {
            this.setState({
                currentUser: user,
                

            })
        }
    }

    logOut(){
        AuthService.logout();
    }
    render(){
        const { currentUser } = this.state
    
    return (
        <div>
            <nav className="Header__part" >
                    <div className="Header__home">
                        <Link to="/">
                            <HomeIcon title="Home"/>
                        </Link>
                    </div>
                    
                <div className="Header__bar">
                    <div className="Header__right">

                        <Link to = {`/beforebooking`} style={{textDecoration:'none'}}>
                            <a className="Header__text">Booking</a>
                        
                        </Link>

                        <Link to = {`/rule`} style={{textDecoration:'none'}}>
                            <a className="Header__text" >Rule</a>
                    
                        </Link>

                        <Link to = {`/contact`} style={{textDecoration:'none'}}>
                            <a className="Header__text">Contact</a>
                    
                        </Link>
                        
                    </div>
                    <div>
                        {currentUser ? (
                            <div className="Header__right">
                                {/* <li className="nav-item"> */}
                                    <Link to = {"/profile"} className="nav-link-login" >
                                        {/* it should be profile page */}
                                            {currentUser.username}
                                            {/* <button className="Header__login">Login</button> */}
                                    </Link>
                                {/* </li> */}
                                {/* <li className="nav-item"> */}
                                    <a href="/login" className="nav-link" onClick={this.logOut} className="nav-link-signup">
                                        LogOut
                                    </a>
                                {/* </li> */}
                            </div>
                        ) : (
                            <div className="Header__right">
                                {/* <li className="nav-item"> */}
                                    <Link to={"/login"} className="nav-link-login">
                                        Login
                                    </Link>
                                {/* </li> */}
                                {/* <li className="nav-item"> */}
                                    <Link to={"/register"} className="nav-link-signup">
                                        Sign up
                                    </Link>
                                {/* </li> */}
                            </div>
                        )
                        }
                    </div>
                </div>
            </nav>
        </div>
    )
    }
}

export default Header
