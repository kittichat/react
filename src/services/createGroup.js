import axios from 'axios';

axios.defaults.withCredentials = true;

const API_URL = "http://localhost:8000/";

class createGroup{

    create(member,group_name){
        return axios
        .post(API_URL + 'creategroup/',{
            member,
            group_name
        })
    }
}

export default new createGroup()