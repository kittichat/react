import axios from 'axios'

axios.defaults.withCredentials = true;

// const API_URL = 'http://localhost:8000/'
const API_URL = "https://bcbproject.herokuapp.com/";

class HistoryServices {
    payment() {
        return axios
            .get(API_URL + 'history/payment/',)
            .then(response => {

                return response.data
            })
    }

    booking() {
        return axios
            .get(API_URL + 'history/',)
            .then(response => {

                return response.data
            })
    }

    GroupBookingHistory(groupName){
        return axios
        .get(API_URL + 'group/'+ groupName + "/")
        .then(response => {
            return response.data;
        })
    }

    PayOrCancel_get(){
        return axios
        .get(API_URL + 'history/booking/')
        .then(response => {
            return response.data;
        })
    }

    PayOrCancel_post(action,bookingid){
        return axios
        .post(API_URL + 'history/booking/',{
            action,
            bookingid
        })
        .then(response => {
            return response.data;
        })
    }

    Refund_get(){
        return axios
        .get(API_URL + 'history/refund/')
        .then(response => {
            return response.data;
        })
    }

    Refund_post(bookingid,banking_id,banking_name){
        return axios
        .post(API_URL + 'history/refund/',{
            action:"refund",
            banking_id:banking_id,
            banking_name:banking_name,
            bookingid:bookingid,

        })
        .then(response => {
            return response.data;
        })
    }
}

export default new HistoryServices();