import http from "./http_common"

const getAll = () => {
    return http.get("/listgroup/")
}

const get = (nameofgroup) => {
    return http.get(`/group/${nameofgroup}`)
}

const createGroupToServer = (arr,name) => {
    return http.post("/createpage/" + {
        arr,
        name
    })
}

export default {
    getAll,
    get,
    createGroupToServer,
}