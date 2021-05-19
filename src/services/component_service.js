import axios from 'axios';

axios.defaults.withCredentials = true;

const API_URL = "http://localhost:8000/";

class component_service{


    Details(){
        return axios
        .get(API_URL)
    }
}

export default new component_service()