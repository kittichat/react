
import React , {useState, useEffect} from 'react'
import { Link } from "react-router-dom"
import Memberlist from '../../services/memberlist_service'

import "../../css/CreateForm.css"
import { checkPropTypes } from 'prop-types'

  const HandleChecked = (props) => {

    const [Change,setChange] = useState(props)

    setChange({})
    return (

      // Some problem here it is how to send props in hooks
      <div>
        <input 
          type="checkbox"
          // checked={test.username}
           onchange={console.log(test.username)}
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

    // const handleChecked = () => {
    //   console.log(group.username)
    // }


  return (
    <div className="list_row">
      <form onSubmit={props.onSubmit}>
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
      </form>
    </div>
  )
}

export default CreateForm
