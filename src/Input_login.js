import React from 'react'
import './Input_login.css'



function Input_login({Icon , title}) {
    return (
        <div className="Input__login">
            <div className="Input__type">
                <Icon className="Input__icon"/>
                <input placeholder={title} className="Input__input" type="text" />
            </div>

            
        </div>

        
    )
}

export default Input_login
