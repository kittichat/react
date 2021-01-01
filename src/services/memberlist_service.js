import axios from 'axios'
import http from './http_common'

const getAll = () => {
    return http.get("/creategroup/")
}

export default {
    getAll,

}