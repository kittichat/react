
import React , {useState, useEffect} from 'react'
import { Link } from "react-router-dom"
import CheckButton from "react-validation/build/button"
import Form from "react-validation/build/form"

import Memberlist from '../../services/memberlist_service'

import "../../css/CreateForm.css"
import { checkPropTypes } from 'prop-types'

  const HandleChecked = (props) => {

    const [Change,setChange] = useState(props)

    return (

      // Some problem here it is how to send props in hooks
      <div>
        <input 
          type="checkbox"
          checked={Change.isCheck}
          onChange={() => setChange(!Change.isCheck)}
        />
      </div>
    )
  }



 function CreateForm(props) {
//  const CreateForm = (props) => {
  // const [memberlist, setMemberlist] = useState({})

  // useEffect(() => {
  //   const member_list = Memberlist.member();
  //   member_list.then((response) => {
  //     setMemberlist(response.map())
  //   })
  // })

  const [Listofmember , setListofmember] = useState([])
  const [Successful , setSuccessful] = useState(false)
    useEffect(() => {
       retrieveAllmember() 
    }, [])


    const retrieveAllmember = () =>{
        Memberlist.getAll()
            .then(response => {
                setListofmember(response.data)   // data is list of name of group
                console.log(response.data)
            })
            .catch(e => {
                console.log(e)
            })
    }

    const handleCreate = (e) => {
      e.preventDefault()

      setSuccessful(false)

      if(this.checkBtn.context._errors.length === 0){
        Memberlist.createRequire(Listofmember)
        .then(
          response => {
            setSuccessful({
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

  return (
    <div className="list_row">
      <Form 
        onSubmit={handleCreate}
        ref = {c => {
          this.form = c
        }}
      
      >
       <div className="form-group">
         <label htmlFor="name">Name</label>
         <input className="form-control" id="name" />
       </div>
       <div className="form-group">
         <label htmlFor="email">Email address</label>
         <input
           type="email"
           className="form-control"
           id="email"
           placeholder="name@example.com"
         />
       </div>
       

       <ul className="list-group" >
            {Listofmember &&
                Listofmember.map((group, index) => (
                    //  <Link to={"/detail/" + group.username} >
                        
                        < li 
                            // className={
                            //     "list-group-item " + (index === currentIndex ? "actice" : "")
                            // }
                            >
                                <HandleChecked {...group} />
                                {group.username}
                        </li>
                    //  </Link>
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

export default CreateForm
