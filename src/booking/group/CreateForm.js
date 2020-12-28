// import React from 'react'
// import Form from "react-validation/build/form"
// import Input from "react-validation/build/input"


// import AddCircleIcon from '@material-ui/icons/AddCircle';

// export function CreateForm() {
//     return (
//         <div>

//             <h1 className="Create__header">Create Group</h1>
//             <Form className="Create__form"
//              onSubmit = {this.handleCreate}
//              >
//                <Input 
//                  className="Create__groupname"
//                  type="text"
//                  placeholader="Group name"
//                 //  value={}
//                 //  onChange={}
//                 //  validation={}
//                  />

//                 <AddCircleIcon
//                  className="Create__add"
//                 //  onClick={}
//                  />

//                  <button
//                  >
//                      Submit
//                  </button>

//             </Form>
//         </div>
//     )
// }

// export default CreateForm


// import React from 'react';

// export const Form = ({ onSubmit }) => {
//   return (
//     <form onSubmit={onSubmit}>
//       <div className="form-group">
//         <label htmlFor="name">Name</label>
//         <input className="form-control" id="name" />
//       </div>
//       <div className="form-group">
//         <label htmlFor="email">Email address</label>
//         <input
//           type="email"
//           className="form-control"
//           id="email"
//           placeholder="name@example.com"
//         />
//       </div>
//       <div className="form-group">
//         <button className="form-control btn btn-primary" type="submit">
//           Submit
//         </button>
//       </div>
//       <h1>fetch data</h1>
//       <h1>fetch data</h1>
//       <h1>fetch data</h1>
//       <h1>fetch data</h1>
//       <h1>fetch data</h1>

//     </form>
//   );
// };
// export default Form;



import React , {useState, useEffect} from 'react'
import { Link } from "react-router-dom"
import Memberlist from '../../services/memberlist_service'


function CreateForm(props) {

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
       <div className="form-group">
         <button className="form-control btn btn-primary" type="submit">
           Submit
         </button>
       </div>

       <ul className="list-group" >
            {Listofmember &&
                Listofmember.map((group, index) => (
                    <Link to={"/detail/" + group.title} >
                        < li 
                            // className={
                            //     "list-group-item " + (index === currentIndex ? "actice" : "")
                            // }
                            >
                                
                                {group.title}
                        </li>
                    </Link>
                ))}
        </ul>

       {/* <h1>fetch data</h1>
       <h1>fetch data</h1>
       <h1>fetch data</h1>
       <h1>fetch data</h1>
       <h1>fetch data</h1> */}
      </form>
    </div>
  )
}

export default CreateForm
