import React from 'react'
import { Link } from "react-router-dom"
import { Cookies } from "react-cookie";
import { typechecker } from "prop-types"

import './css/Header.css';

import Dropdown from './Dropdown'
import Notificate from './Notificate'

import AuthService from './services/auth_service'

import NotificationsIcon from '@material-ui/icons/Notifications';
import HomeIcon from '@material-ui/icons/Home';


class Header extends React.Component {
    constructor(props) {
        super(props)
        this.state = {
            currentUser: undefined,
            open: false,
            notificate_open: false,

        }

        this.logOut = this.logOut.bind(this)
        this.handleClick = this.handleClick.bind(this)
        this.handleClick_noticicate = this.handleClick_noticicate.bind(this)
    }

    componentDidMount() {
        const user = AuthService.getCurrentUser()

        if (user) {
            this.setState({
                currentUser: user,


            })
        }
    }

    handleClick() {
        this.setState(prevState => {
            return {
                open: !prevState.open
            }
        })
    }
    // I think handleClick and handleClick_noticate can sum to one function >> i will see it later
    handleClick_noticicate() {
        this.setState(prevState => {
            return {
                notificate_open: !prevState.notificate_open
            }
        })
    }

    logOut = () => {
        AuthService.logout();
        AuthService.cookieremove();
        window.location.reload();



    }
    render() {
        console.log(this.state.currentUser)
        const { currentUser } = this.state

        return (
            <div>
                <nav className="Header__part" >
                    <div className="Header__home">
                        <Link to="/">
                            <HomeIcon title="Home" />
                        </Link>
                    </div>

                    <div className="Header__bar">
                        <div className="Header__right">

                            <Link to={`/beforebooking`} >
                                <a className="Header__text">Booking</a>

                            </Link>

                            <Link to={`/rule`} style={{ textDecoration: 'none' }}>
                                <a className="Header__text" >Rule</a>

                            </Link>

                            <Link to={`/contact`} style={{ textDecoration: 'none' }}>
                                <a className="Header__text">Contact</a>

                            </Link>

                        </div>
                        <div>
                            {currentUser ? (
                                <div className="Header__button">
                                    <div className="Header__dropdown">                                            
                                            {/* <NotificationsIcon
                                                className="nav-link-notification"
                                                onClick={this.handleClick_noticicate}
                                            />
                                            {this.state.notificate_open && <Notificate />} */}

                                            <Link to={"/groupplayer"} className="nav-link-logined-group">
                                                Group
                                            </Link>
                                    
                                            <a className="nav-link-logined-username" onClick={this.handleClick} >
                                                {currentUser.username}
                                            </a>
                                            {this.state.open && <Dropdown />}

                                            <NotificationsIcon
                                                className="nav-link-notification"
                                                onClick={this.handleClick_noticicate}
                                            />
                                            {this.state.notificate_open && <Notificate />}

                                    </div>

                                {/* <div className="logout__hover"> */}
                                    <a href="/login" onClick={this.logOut} className="nav-link-logined-logout">
                                        LogOut
                                    </a>
                                {/* </div> */}

                                </div>
                            ) : (
                                <div className="Header__right">

                                    {/* <Link to={"/login"} className="nav-link-login">
                                        Login
                                    </Link> */}


                                    <Link to={"/register"} className="nav-link-signup">
                                        Sign up
                                    </Link>

                                    <Link to={"/login"} className="nav-link-login">
                                        Login
                                    </Link>

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
