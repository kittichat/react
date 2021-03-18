import axios from 'axios'

axios.defaults.withCredentials = true;

const API_URL = "http://localhost:8000/";

class BookingService{
    booking(){
        return axios
        .get(API_URL + 'bookingtablepage/'
            // I think this place no need because server can know authorized by cookie and group is different location
        )
        .then(response => {
            return response.something;
        })
    }

    bookingCourts(arr){
        return axios
        .post(API_URL + 'choosethecourt/',{
            arr
        })
    }
}

export default BookingService;
// is export needs parenthese