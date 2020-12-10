import React from 'react'
import '../css/Profile.css'

import value from '../api/profile_data'

import AuthService from '../services/auth_service'
import UserService from '../services/user_service'


class Profile extends React.Component {
    constructor(){
        super()
        this.state = {
            accessToken : undefined,
            firstname:"",
            lastname:"",
            username:"",
            password:"",
            email:"",
            gender:"",
            birthday:0,

            acceptObj: {}
            
        }

        // this.fetchdata = this.fetchdata.bind(this)

    }


    componentDidMount(){
        // UserService.profile().then(
        //     () => {

        //         window.location.reload();
        //     }
        // )

        this.setState({ 
            firstname : value.firstname,
            lastname : value.lastname,
            username : value.username,
            password : value.password,
            email : value.email,
            gender : value.gender,
            birthday : value.birthday,

        })
    }

    // fetchdata(){
    //     const test = AuthService.getCurrentUser()
    //     this.setState({accessToken : test.accessToken})
    // }

    render(){
    return (

        

        <div className="profile__background">
            <div className="profile__body">
                {/* <h1 onClick={this.fetchdata}>Profile Page</h1>
                <hr/>
                {this.state.accessToken} */}


                <h1>{this.state.firstname}</h1>
                <h1>{this.state.lastname}</h1>
                <h1>{this.state.username}</h1>
                <h1>{this.state.password}</h1>
                <h1>{this.state.email}</h1>
                <h1>{this.state.gender}</h1>
                <h1>{this.state.birthday}</h1>

                {/* <h1>{this.state.firstname}</h1> */}
            </div>
        </div>
    )
    }
}

export default Profile
