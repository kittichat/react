
import React , {useState, useEffect} from 'react'
import { Link } from "react-router-dom"
import CheckButton from "react-validation/build/button"
import Form from "react-validation/build/form"
import Input from 'react-validation/build/input'

import Memberlist from '../../services/memberlist_service'
import groupService from '../../services/groupservices'
import createGroup from '../../services/createGroup'

import '../../css/CreateFormGroup.css'
// import "../../css/CreateForm.css"
import { checkPropTypes } from 'prop-types'

  // const handleChange = (group, {setListofmember}) => {

  //   // {setListofmember(
  //   //   const updated = 
  //   // )}

  //   // return (

  //   //   // Some problem here, it is how to send props in hooks
  //   //   <div>
  //   //     <input 
  //   //       type="checkbox"
  //   //       checked={Change.isCheck}
  //   //       onChange={() => setChange(!Change.isCheck)}
  //   //     />
  //   //   </div>
  //   // )
  // }

  const required = value => {
    if (!value){
      return (
        <div className="alert alert-danger" role="alert">
          This field is required!
        </div>
      );
    }
  };
  

 class CreateFormGroup extends React.Component {
   constructor(props){
     super(props)
     this.state =  {
       Listofmember : [],
       Successful : false,
       createGroup : [],
       arr : [],
       name:"",
     }

     this.retrieveAllmember = this.retrieveAllmember.bind(this)
     this.handleChange = this.handleChange.bind(this)
     this.handleCreate = this.handleCreate.bind(this)
     this.onChangeName = this.onChangeName.bind(this)
   }
//  const CreateForm = (props) => {
  // const [memberlist, setMemberlist] = useState({})

  // useEffect(() => {
  //   const member_list = Memberlist.member();
  //   member_list.then((response) => {
  //     setMemberlist(response.map())
  //   })
  // })

  // const [Listofmember , setListofmember] = useState([])
  // const [Successful , setSuccessful] = useState(false)
  // const [createGroup, setCreateGroup]  = useState([])

    // useEffect(() => {
    //    retrieveAllmember() 
    // }, [])

    onChangeName(e){
      this.setState({
        name : e.target.value
      })
    }

    componentDidMount(){
      this.retrieveAllmember()
    }


    retrieveAllmember(){
      Memberlist.getAll()
            .then(response => {
                // setListofmember(response.data)   // data is list of name of group
                this.setState({
                  Listofmember : response.data
                })

                console.log("data from an api")
                console.log(response.data.message)
            },
            )
            .catch(e => {
                console.log(e)
            })
        // Memberlist.getAll()
        //     .then(response => {
        //         // setListofmember(response.data)   // data is list of name of group
        //         if (!("Error" in response.data.message)){
        //         this.setState({
        //           Listofmember : response.data
        //         })
        //       }else{
        //         this.setState({
        //           Listofmember : []
        //         })
        //       }
              
        //         console.log("data from an api")
        //         console.log(response.data.message)
        //     },
        //     )
        //     .catch(e => {
        //         console.log(e)
        //     })
    }

    handleCreate(e){
      e.preventDefault()
      this.form.validateAll()

      if(this.checkBtn.context._errors.length === 0){
        createGroup.create(
          this.state.arr,
          this.state.name,
          )
        .then(
          response => {
            this.setState({
              message: response.data.message,
              Successful: true
            })
            window.location.reload()
          },
          error => {
            const resMessage = 
            (error.response && 
              error.response.data &&
              error.response.data.message) ||
              error.message ||
              error.toString();

              this.setState({
                successful: false,
                message: resMessage
              })
          }
        )
      }


    }

    
  handleChange(virtualid){
      this.state.Listofmember.map(member => {
        if(member.virtualid === virtualid){
          if(this.state.createGroup.includes(member.virtualid) === false){
            this.state.createGroup.push(
              member.virtualid,
            )
        }else{
          let position = this.state.createGroup.indexOf(member.username)
          this.state.createGroup.splice(position,1)
        }
        }
      })

      this.setState( {
        arr : this.state.createGroup
      })
  }
  

  render(){

    console.log("crew was here")
  console.log(this.state.createGroup)
  console.log(this.state.arr)

    const {Listofmember} = this.state
  return (
    <div >
      <Form 
        onSubmit={this.handleCreate}
        ref = {c => {
          this.form = c
        }}
      
      >
       <div className="form-group">

         <label className="Group__label">Group Name</label>

         <Input 
           className="Groupname"
           id="name" 
           onChange = {this.onChangeName}
           value={this.state.name}
           validations={[required]}
           />
       </div>
      
       <ul className="list-group" >
            {Listofmember &&
                Listofmember.map((group, index) => (
                        < li 
                            
                            >
             
                                <input 
                                  type= "checkbox"
                                  // checked = {item.completed}
                                  onChange={() => this.handleChange(group.virtualid)}
                                />
                                {group.first_name}
                                
                        </li>
                   
                ))}
        </ul>

        {/* <div className="form-group">
         <button className="form-control btn btn-primary" type="submit">
           Submit
         </button>
       </div> */}

        <div className="form-group">
         <button className="Group__submit" type="submit">
           Submit
         </button>
        </div>


       <CheckButton
        className=""
        style={{display:"none"}}
        ref={c => {
          this.checkBtn = c
        }}
       >

       </CheckButton>
      </Form>
    </div>
  )
      }
}

export default CreateFormGroup
