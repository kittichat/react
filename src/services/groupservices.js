import http from "./http_common"

const getAll = () => {
    return http.get("/group/")
}

const get = (nameofgroup) => {
    return http.get(`/group/${nameofgroup}`)
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
return http.get(`/group/${presentGroup}`)
 .then(response => {
     return response
 })
}

const joinGroup = (group) => {
    return http.post(`/group/${group}` ,{
    group        

    })
}

const leaveGroup = (group) => {
    return http.get(`/group/${group}` + {
        group
    })
}

const cancel = () => {
    return http.post("/cancelpage/" ,{

    })
}

const privacy = (status) => {
    return http.post("/privacypage/" ,{
        public:status
    })
}

// const acceptMember = (username) => {
//     return http.post("/acceptgrouppage/" + {
//         username,
//     })
// }

// const deleteMember = (username) => {
//     return http.post("/deletememberpage/" + {
//         username,
//     })
// }

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
    // deleteMember,
    cancel,
    privacy,

}