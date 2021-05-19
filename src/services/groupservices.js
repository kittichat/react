import http from "./http_common"

const getAll = () => {
    return http.get("/group/")
}

const get = (nameofgroup) => {
    return http.get(`/group/${nameofgroup}/`)
}

const createGroupToServer = (member,group_name) => {
    return http.post("/creategroup/" + {
        member,
        group_name
    })
    // .then(response => {
    //     return response.data
    // })
}

const setGroup = (group) => {
    localStorage.setItem("group",group.group_name)
}

const getCurrentGroup = () =>{
    return localStorage.getItem("group")
}

// this function should gives authorized to browser 0 o  r 1
const getMembers = (presentGroup) => {
//  return http.post("/membersdetail/" + {
//      presentGroup
//  })
return http.get(`/group/${presentGroup}/`)
 .then(response => {
     return response
 })
}

const joinGroup = (group) => {
    return http.post(`/group/${group}/` ,{
            

    })
}

const leaveGroup = (group) => {
    return http.delete(`/group/${group}/`)
}

const cancel = (group) => {
    return http.post(`/group/${group}/` ,{
            

    })
}

const privacy = (group,status) => {
    return http.put(`/group/${group}/` ,{
        public:status
    })
}

const deleteMember = (group,id) => {
    return http.delete(`/group/${group}/?id=${id}`)
}

const refund = (group,group_booking,banking_id,banking_name) => {
    return http.post(`/group/${group}/refund/`,{
        banking_id:banking_id,
        banking_name:banking_name,
        group_booking,
    })
}

export default {
    getAll,
    get,
    createGroupToServer,
    setGroup,
    getCurrentGroup,
    getMembers,
    joinGroup,
    leaveGroup,
    // acceptMember,
    deleteMember,
    cancel,
    privacy,
    refund,

}