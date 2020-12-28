import axios from 'axios'
import http from './http_common'

// axios.defaults.withCredentials = true;

// const API_URL = 'http://localhost:8000'

// class MemberList {
//     member(){
//         return axios
//         .get(API_URL + 'member/',)
//         .then(response => {
//             return response.data
//         })
//     }
// }

// export default new MemberList();

const getAll = () => {
    return http.get("/creategroup/")
}

export default {
    getAll,

}