import axios from 'axios'
import http from './http_common'

const getAll = () => {
    return http.get("/creategroup/")
}

const createRequire = (members) => {
    return http.post("/complete/", {
        members
    }) //may be edit later
}


export default {
    getAll,
    createRequire,
}