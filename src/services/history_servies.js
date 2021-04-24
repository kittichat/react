import axios from 'axios'

axios.defaults.withCredentials = true;

const API_URL = 'http://localhost:8000/'

class HistoryServices {
    payment() {
        return axios
            .get(API_URL + 'payment/',)
            .then(response => {

                return response.data
            })
    }

    booking() {
        return axios
            .get(API_URL + 'bookinghistory/',)
            .then(response => {

                return response.data
            })
    }
}

export default new HistoryServices();