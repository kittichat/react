import axios from 'axios';

axios.defaults.withCredentials = true;

const API_URL = "http://localhost:8000/";

class groupBooking{

    getDays(week){
        return axios
        .get(API_URL + week + "/")
    }
}

export default new groupBooking()