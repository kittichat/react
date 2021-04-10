import axios from 'axios'

axios.defaults.withCredentials = true;

const API_URL = "http://localhost:8000/";

class BookingService{
    AllBookingInformation(){
        return axios
        .get(API_URL + 'booking/'
            // I think this place no need because server can know authorized by cookie and group is different location
        )
        .then(response => {
            return response;
        })
        
    }

    GetBookingInformation(date){
        return axios
        .get(`${API_URL}booking/?d=${date}`)
        .then (response => {
            return response
        })
    }

    CourtBooking(arr,name,email,phone,date){
        return axios
        .post(API_URL + 'booking/',{
            date,
            arr,
            name,
            email,
            phone
        })
        .then(response => {
            return response;
        })
    
   }
// edit from confirm
   BookingVerify(bookingid){
       return axios
       .post(API_URL + 'payment/',{
           bookingid
       })
   }

   DateBooking(day,month,year){
       return axios
       .post(API_URL + 'checkrange/',{
           day,
           month,
           year
       })
       .then(response => {
           return response.data;
       })
   }
}

export default new BookingService();
// is export needs parenthese