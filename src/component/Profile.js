import React from 'react'
import '../css/Profile.css'

import UserService from '../services/user_service'



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

        
    }


    componentDidMount(){

         const profile_detail = UserService.profile();

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
            <div className="background__colorfillin"></div>
            <div className="profile__body">
                <h1 className="profile_username">{this.state.username}</h1>
                <hr/>
                <h1 className="profile_topic_name">Name</h1>
                <h1 className="profile_firstname"><pre>First Name:       {this.state.firstname}</pre></h1>
                <h1 className="profile_firstname"><pre>Last Name:        {this.state.lastname}</pre></h1>
                <hr/>
                <h1 className="profile_topic_contact">Contact Information</h1>
                <h1 className="profile_email"><pre>Email:        {this.state.email}</pre></h1>
                <h1 className="profile_tel"><pre>Tel:          {this.state.tel}</pre></h1>
                <hr/>
                <h1 className="profile_topic_basic">Basic Information</h1>
                <h1 className="profile_gender"><pre>Gender:      {this.state.gender}</pre></h1>
                <h1 className="profile_birthday"><pre>birthday:    {this.state.birthday}</pre></h1>
                
                <h1 >{this.state.groupname}</h1>                              
            </div>
        </div>
    )
    }
}

export default Profile
