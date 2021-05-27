import axios from 'axios';

axios.defaults.withCredentials = true;

// const API_URL = "http://localhost:8000/";
const API_URL = "https://bcbproject.herokuapp.com/";

class groupBooking {

    getDays() {
        return axios
            .get(API_URL + "groupbooking/")
            .then(response => {
                return response
            })

    }

    CourtBooking(arr,year_month) {
        return axios
            .post(API_URL + 'groupbooking/', {
                arr,
                year_month
            })
            .then(response => {
                return response;
            })

    }
    BookingVerify(bookingid) {
        return axios
            .post(API_URL + 'payment/', {
                group:true,
                bookingid
            })
    }

}

export default new groupBooking()