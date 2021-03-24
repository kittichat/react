
// import React , {useState, useEffect} from 'react'
// import { Link } from "react-router-dom"
// import CheckButton from "react-validation/build/button"
// import Form from "react-validation/build/form"


// import Memberlist from '../../services/memberlist_service'

// import "../../css/CreateForm.css"
// import { checkPropTypes } from 'prop-types'

//   // const handleChange = (group, {setListofmember}) => {

//   //   // {setListofmember(
//   //   //   const updated = 
//   //   // )}

//   //   // return (

//   //   //   // Some problem here, it is how to send props in hooks
//   //   //   <div>
//   //   //     <input 
//   //   //       type="checkbox"
//   //   //       checked={Change.isCheck}
//   //   //       onChange={() => setChange(!Change.isCheck)}
//   //   //     />
//   //   //   </div>
//   //   // )
//   // }



//  function CreateForm(props) {
// //  const CreateForm = (props) => {
//   // const [memberlist, setMemberlist] = useState({})

//   // useEffect(() => {
//   //   const member_list = Memberlist.member();
//   //   member_list.then((response) => {
//   //     setMemberlist(response.map())
//   //   })
//   // })

//   const [Listofmember , setListofmember] = useState([])
//   const [Successful , setSuccessful] = useState(false)
//   const [createGroup, setCreateGroup]  = useState([])

//     useEffect(() => {
//        retrieveAllmember() 
//     }, [])


//     const retrieveAllmember = () =>{
//         Memberlist.getAll()
//             .then(response => {
//                 setListofmember(response.data)   // data is list of name of group
//                 console.log(response.data)
//             })
//             .catch(e => {
//                 console.log(e)
//             })
//     }

//     const handleCreate = (e) => {
//       e.preventDefault()

//       setSuccessful(false)

//       // if(this.checkBtn.context._errors.length === 0){
//       //   Memberlist.createRequire(Listofmember)
//       //   .then(
//       //     response => {
//       //       setSuccessful({
//       //         message: response.data.message,
//       //         Successful: true
//       //       })
//       //     },
//       //     error => {
//       //       const resMessage = 
//       //       (error.response && 
//       //         error.response.data &&
//       //         error.response.data.message) ||
//       //         error.message ||
//       //         error.toString();

//       //         this.setState({
//       //           successful: false,
//       //           message: resMessage
//       //         })
//       //     }
//       //   )
//       // }


//     }

    
//   const handleChange = (id) => {
//     Listofmember.map(member => {
//       if(member.id === id){
//         if(createGroup.includes(member.username) == false){
//             createGroup.push(
//               member.username
//             )
//         }else{
//           let position = createGroup.indexOf(member.username)
//           createGroup.splice(position,1)
//         }
//       }
//     })
    
    
//   }
//   console.log("crew was here")
//   console.log(createGroup)

//   return (
//     <div className="list_row">
//       <form 
//         onSubmit={handleCreate}
//         // ref = {c => {
//         //   this.form = c
//         // }}
      
//       >
//        <div className="form-group">
//          <label htmlFor="name">Name</label>
//          <input className="form-control" id="name" />
//        </div>
//        <div className="form-group">
//          <label htmlFor="email">Email address</label>
//          <input
//            type="email"
//            className="form-control"
//            id="email"
//            placeholder="name@example.com"
//          />
//        </div>
       

//        {/* <ul className="list-group" >
//             {Listofmember &&
//                 Listofmember.map((group, index) => (
                   
                        
//                         < li 
                            
//                             >
             
//                                 <input 
//                                   type= "checkbox"
//                                   // checked = {item.completed}
//                                   onChange={() => handleChange(group.id)}
//                                 />
//                                 {group.username}
//                         </li>
                   
//                 ))}
//         </ul> */}

//         <div className="form-group">
//          <button className="form-control btn btn-primary" type="submit">
//            Submit
//          </button>
//        </div>

//        <CheckButton
//         className=""
//         style={{display:"none"}}
//         // ref={c => {
//         //   this.checkBtn = c
//         // }}
//        >

//        </CheckButton>
//       </form>
//     </div>
//   )
// }

// export default CreateForm


import React , {useState, useEffect} from 'react'
import { Link } from "react-router-dom"
import CheckButton from "react-validation/build/button"
import Form from "react-validation/build/form"

import Memberlist from '../../services/memberlist_service'
import groupService from '../../services/groupservices'

import "../../css/CreateForm.css"
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



 class CreateForm extends React.Component {
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
     this.handleCreate = this.handleChange.bind(this)
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
                console.log(response.data)
            })
            .catch(e => {
                console.log(e)
            })
    }

    handleCreate(e){
      e.preventDefault()

      // setSuccessful(false)

      if(this.checkBtn.context._errors.length === 0){
        groupService.createGroupToServer(
          this.state.arr,
          this.state.name,
          )
        .then(
          response => {
            this.setState({
              message: response.data.message,
              Successful: true
            })
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

    
  handleChange(id){
    // this.state.Listofmember.map(member => {
    //   if(member.id === id){
    //     if(this.state.createGroup.includes(member.username) == false){
    //         this.state.createGroup.push(
    //           member.username
    //         )
    //     }else{
    //       let position = this.state.createGroup.indexOf(member.username)
    //       this.state.createGroup.splice(position,1)
    //     }
    //   }
    // })
    // this.setState((prevState) => {
      // const arr = this.state.createGroup
      this.state.Listofmember.map(member => {
        if(member.id === id){
          if(this.state.createGroup.includes(member.username) === false){
            this.state.createGroup.push(
              member.username,

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
    <div className="list_row">
      <Form 
        onSubmit={this.handleCreate}
        ref = {c => {
          this.form = c
        }}
      
      >
       <div className="form-group">
         <label htmlFor="name">Group Name</label>
         <input 
           className="form-control"
           id="name" 
           onChange = {this.onChangeName}
           value={this.state.name}
           />
       </div>
       {/* <div className="form-group">
         <label htmlFor="email">Email address</label>
         <input
           type="email"
           className="form-control"
           id="email"
           placeholder="name@example.com"
         />
       </div> */}
       

       <ul className="list-group" >
            {Listofmember &&
                Listofmember.map((group, index) => (
                        < li 
                            
                            >
             
                                <input 
                                  type= "checkbox"
                                  // checked = {item.completed}
                                  onChange={() => this.handleChange(group.id)}
                                />
                                {group.username}
                        </li>
                   
                ))}
        </ul>

        <div className="form-group">
         <button className="form-control btn btn-primary" type="submit">
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

export default CreateForm
