import axios from 'axios'
import http from './http_common'

const getAll = () => {
    return http.get("/creategroup/")
}

const createRequire = (arr,name) => {
    return http.post("/creategroup/", {
        arr,
        name
    }) //may be edit later
}


export default {
    getAll,
    createRequire,
}