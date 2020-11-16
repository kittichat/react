import React from 'react'
import './css/Header.css';
import HomeIcon from '@material-ui/icons/Home';
import {Link} from "react-router-dom"


function Header() {
    return (
        <div className="Header__part">
                <div className="Header__home">
                    <Link to="/">
                        <HomeIcon title="Home"/>
                    </Link>
                </div>
                
            <div className="Header__bar">
                <div className="Header__right">
                    <Link to = {`/beforebooking`} style={{textDecoration:'none'}}>
                        <a className="Header__text">Booking</a>
                        {/* <button className="Header__booking">Booking</button> */}
                    </Link>
                    <Link to = {`/rule`} style={{textDecoration:'none'}}>
                        <a className="Header__text" >Rule</a>
                        {/* <button className="Header__rule">Rule</button> */}
                    </Link>
                    <Link to = {`/contact`} style={{textDecoration:'none'}}>
                        <a className="Header__text">Contact</a>
                        {/* <button className="Header__contact">Contact</button> */}
                    </Link>
                    
                </div>
                <div>
                <Link to = {`/login`} >
                        {/* <h3 className="Header__right">Login</h3> */}
                        <button className="Header__login">Login</button>
                    </Link>
                </div>
            </div>
        </div>
    )
}

export default Header
