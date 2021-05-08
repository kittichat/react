import axios from 'axios';

axios.defaults.withCredentials = true;

const API_URL = "http://localhost:8000/";

class groupBooking {

    getDays() {
        return axios
            .get(API_URL + "groupbooking/")
            .then(response => {
                return response
            })

    }

    CourtBooking(arr,date) {
        return axios
            .post(API_URL + 'groupbooking/', {
                arr
            })
            .then(response => {
                return response;
            })

    }
    BookingVerify(bookingid) {
        return axios
            .post(API_URL + 'payment/', {
                bookingid
            })
    }

}

export default new groupBooking()