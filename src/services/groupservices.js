// import http from "./http_common"

// const getAll = () => {
//     return http.get("/group/")
// }

// const createGroupToServer = (member,group_name) => {
//     return http.post("/creategroup/" + {
//         member,
//         group_name
//     })
// }

// const setGroup = (group) => {
//     localStorage.setItem("group",group.group_name)
// }

// const getCurrentGroup = () =>{
//     return localStorage.getItem("group")
// }

// const getMembers = (presentGroup) => {
// return http.get(`/group/${presentGroup}/`)
//  .then(response => {
//      return response
//  })
// }

// const joinGroup = (group) => {
//     return http.post(`/group/${group}/` ,{
            

//     })
// }

// const leaveGroup = (group) => {
//     return http.delete(`/group/${group}/`)
// }

// const cancel = (group) => {
//     return http.post(`/group/${group}/` ,{
            

//     })
// }

// const privacy = (group,status) => {
//     return http.put(`/group/${group}/` ,{
//         public:status
//     })
// }

// const deleteMember = (group,id) => {
//     return http.delete(`/group/${group}/?id=${id}`)
// }

// const refund = (group,group_booking,banking_id,banking_name) => {
//     return http.post(`/group/${group}/refund/`,{
//         banking_id:banking_id,
//         banking_name:banking_name,
//         group_booking,
//     })
// }

// export default {
//     getAll,
//     // get,
//     createGroupToServer,
//     setGroup,
//     getCurrentGroup,
//     getMembers,
//     joinGroup,
//     leaveGroup,
//     // acceptMember,
//     deleteMember,
//     cancel,
//     privacy,
//     refund,

// }

import axios from 'axios';

axios.defaults.withCredentials = true;

// const API_URL = "http://localhost:8000/";
const API_URL = "https://bcbproject.herokuapp.com/";

class groupservices{


    getAll(){
        return axios
        .get(API_URL + "group/")
        .then(response => {
            return response;
        })
    }

    createGroupToServer(member,group_name){
        return axios
        .post(API_URL + "creategroup/",{
            member,
            group_name
        })
        .then(response => {
            return response;
        })
    }
    
    setGroup(group){
        localStorage.setItem("group",group.group_name)
    }
    
    getCurrentGroup(){
        return localStorage.getItem("group")
    }

    getMembers(presentGroup){
        return axios
        .get(API_URL + "group/" + presentGroup)
        .then(response => {
            return response;
        })
    }

    joinGroup(group){
        return axios
        .post(API_URL + "group/" + group)

    }
    
    leaveGroup(group){
        return axios
        .delete(API_URL + "group/" + group)
    }
    
    cancel(group){
        return axios
        .post(API_URL + "group/" + group)

    }

    privacy(group,status){
        return axios
        .put(API_URL + "group/" + group,{
            public:status
        })

    }

    deleteMember(group,id){
        return axios
        .delete(API_URL + `group/${group}/?id=${id}`)
    }

    refund(group,group_booking,banking_id,banking_name){
        return axios
        .post(API_URL + "group/" + group + "/refund/",{
            banking_id:banking_id,
            banking_name:banking_name,
            group_booking,
        })

    }
}

export default new groupservices()