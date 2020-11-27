import React from 'react'
import './../css/Input_login.css'



function Input_login({Icon , title, type}) {
    return (
        <div className="Input__login">
            <div className="Input__type">
                <Icon className="Input__icon"/>
                <input placeholder={title} className="Input__input" type={type} />
            </div>

            
        </div>

        
    )
}

export default Input_login
