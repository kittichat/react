import axios from 'axios'
import Profile from '../component/Profile';

axios.defaults.withCredentials = true;

const API_URL = 'http://localhost:8000/'

class UserService {
    profile(){
        return axios
        .get(API_URL + 'profile/',)
        .then(response => {
            
             return response.data
        })
    } 
}

export default new UserService();