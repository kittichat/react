import http from "./http_common"

const getAll = () => {
    return http.get("/groups")
}

const get = (nameofgroup) => {
    return http.get(`/group/${nameofgroup}`)
}

export default {
    getAll,
    get,
}