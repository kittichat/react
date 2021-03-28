import http from "./http_common"

const getAll = () => {
    return http.get("/listgroup/")
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
 return http.post("/membersdetail/" + {
     presentGroup
 })
//  .then(response => {
//      return response.data
//  })
}

export default {
    getAll,
    get,
    createGroupToServer,
    setGroup,
    getCurrentGroup,
    getMembers,
}