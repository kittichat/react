import React from 'react'
import '../css/Profile.css'

import AuthService from '../services/auth_service'

class Profile extends React.Component {
    constructor(){
        super()
        this.state = {
            accessToken : undefined
        }

        this.fetchdata = this.fetchdata.bind(this)
    }

    // componentDidMount(){
    //     const test = AuthService.getCurrentUser()
    //     this.setState({accessToken : test.accessToken})
        
    // }

    fetchdata(){
        const test = AuthService.getCurrentUser()
        this.setState({accessToken : test.accessToken})
    }
    render(){
    return (
        <div className="profile__background">
            <div className="profile__body">
                <h1 onClick={this.fetchdata}>Profile Page</h1>
                <hr/>
                {this.state.accessToken}
                
            </div>
        </div>
    )
    }
}

export default Profile
