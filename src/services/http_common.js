import axios from "axios"

export default axios.create({
    // baseURL: "http://localhost:8000/",
    API_URL : "https://bcbproject.herokuapp.com/",
    // headers: {
    //     "Content-type": "application/json"
    // },
    withCredentials:true
})