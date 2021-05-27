import axios from 'axios';

axios.defaults.withCredentials = true;

// const API_URL = "http://localhost:8000/";
const API_URL = "https://bcbproject.herokuapp.com/";

class Notification{

    get(){
        return axios
        .get(API_URL + 'request/')
        .then(response => {
            return response.data
        })
    }

    accept(id){
        return axios
        .post(API_URL + 'request/',{
            id,
            accept:true
        })
    }

    decline(id){
        return axios
        .post(API_URL + "request/",{
            id,
            accept:false
        })
    }
}

export default new Notification()