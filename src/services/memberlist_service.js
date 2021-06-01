// import axios from 'axios'
// import http from './http_common'

// const getAll = () => {
//     return http.get("/creategroup/")
// }


// const createRequire = (arr,name) => {
//     return http.post("/creategroup/", {
//         arr,
//         name
//     }) //may be edit later
// }


// export default {
//     getAll,
//     createRequire,
// }


import axios from 'axios';

axios.defaults.withCredentials = true;

// const API_URL = "http://localhost:8000/";
const API_URL = "https://bcbproject.herokuapp.com/";

class memberlist_service{


    getAll(){
        return axios
        .get(API_URL + "creategroup/")
    
    }

    createRequire(arr,name){
        return axios
        .post(API_URL + "creategroup/",{
            arr,
            name
        })

    }

}
export default new memberlist_service()