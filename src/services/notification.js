import axios from 'axios';

axios.defaults.withCredentials = true;

const API_URL = "http://localhost:8000/";

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