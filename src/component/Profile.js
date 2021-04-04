import React from 'react'
import '../css/Profile.css'

import value from '../api/profile_data'

import AuthService from '../services/auth_service'
import UserService from '../services/user_service'
import { Link } from 'react-router-dom'


class Profile extends React.Component {
    constructor(props){
        super(props)
        this.state = {
            accessToken : undefined,
            firstname:"",
            lastname:"",
            username:"",
            password:"",
            email:"",
            gender:"",
            birthday:undefined,
            tel:undefined,
            groupname:"",

            acceptObj: {}
            
        }

        this.gotogroup = this.gotogroup.bind(this)
    }

    gotogroup(){
        // <Link to={'/individualgroup'} />
    }


    componentDidMount(){
         //const test = AuthService.getCurrentUser()
        // this.setState({accessToken : test.accessToken})

         const profile_detail = UserService.profile();
         //console.log(profile_detail)
         profile_detail.then((response) => {
            this.setState({
                firstname : response.first_name,
                lastname :  response.last_name,
                username :  response.username,
                password :  response.password,
                email :     response.email,
                gender :    response.gender,
                birthday :  response.birthday,
                tel :       response.tel,
                groupname:  response.group_name

            })
             
            })

    }

    render(){
        
    return (

        <div className="profile__background">
            <div className="profile__body">
                {/* <h1 >{this.state.accessToken}</h1>
                <hr/> */}
                {/* {this.state.accessToken} */}

                <h1>{this.state.firstname}</h1>
                <h1>{this.state.lastname}</h1>
                <h1>{this.state.username}</h1>
                <h1>{this.state.password}</h1>
                <h1>{this.state.email}</h1>
                <h1>{this.state.gender}</h1>
                <h1>{this.state.birthday}</h1>
                <h1>{this.state.tel}</h1>
                <h1 >{this.state.groupname}</h1>  
               <Link to={'/individualgroup'}> <h1 style={{textDecorationLine:'none'}}>crew</h1></Link>                
                            
            </div>
        </div>
    )
    }
}

export default Profile
