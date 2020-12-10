import React from 'react'
import {Link} from "react-router-dom"
import Dropdown from './Dropdown'
import './css/Header.css';

import AuthService from './services/auth_service'

import HomeIcon from '@material-ui/icons/Home';


class Header extends React.Component {
    constructor(props){
        super(props)
        this.state = {
            currentUser :undefined,
            open : false,  
           
        }

        this.logOut = this.logOut.bind(this)
        this.handleClick = this.handleClick.bind(this)
    }

    componentDidMount(){
        const user = AuthService.getCurrentUser()

        if (user) {
            this.setState({
                currentUser: user,
                

            })
        }
    }

    handleClick(){
        this.setState(prevState => {
            return{
            open : !prevState.open
            }
        })

    
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
                                
                                    <ul className="Header__dropdown">
                                        <li>
                                            <Link to={"./groupplayer"} className="nav-link-signup">
                                                Group
                                            </Link>
                                        </li>
                                        <li>
                                            <a href='#' className="nav-link-login" onClick={this.handleClick} >
                                                {currentUser.username}
                                            </a>
                                            {this.state.open && <Dropdown />}
                                        </li>
                                     
                                    </ul>
                                    
                                        <a href="/login" onClick={this.logOut} className="nav-link-signup">
                                            LogOut
                                        </a>
                                    
                                
                            </div>
                        ) : (
                            <div className="Header__right">
                                    <Link to={"/login"} className="nav-link-login">
                                        Login
                                    </Link>
                                                           
                                    <Link to={"/register"} className="nav-link-signup">
                                        Sign up
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
