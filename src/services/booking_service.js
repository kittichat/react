import axios from 'axios'

axios.defaults.withCredentials = true;

const API_URL = "http://localhost:8000/";

class BookingService{
    AllBookingInformation(){
        return axios
        .get(API_URL + 'status/'
            // I think this place no need because server can know authorized by cookie and group is different location
        )
        .then(response => {
            return response;
        })
        
    }

    CourtBooking(arr,name,email,phone){
        return axios
        .post(API_URL + 'booking/',{
            arr,
            name,
            email,
            phone
        })
        .then(response => {
            return response;
        })
    
   }

   BookingVerify(receipt){
       return axios
       .post(API_URL + 'confirm/',{
           receipt
       })
   }
}

export default new BookingService();
// is export needs parenthese