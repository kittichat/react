import axios from 'axios' 

const API_URL = "http://localhost:8000/";

class  AuthService {
    login(username,password){
        return axios
        .post(API_URL + 'login/',{
            username,
            password
        })
    .then(response => {
        if (response.data.accessToken){
            localStorage.setItem('user',JSON.stringify(response.data));
        }

        return response.data;
    });
    }

    logout(){
        window.localStorage.removeItem("user");
        
    }

    register(firstname,lastname,username,password,confirmpass,email){
        return axios.post(API_URL + 'register/',{
            firstname,
            lastname,
            username,
            email,
            password,
            confirmpass,
        });
    }

    getCurrentUser(){
        return JSON.parse(localStorage.getItem("user"));
        
    }
}


export default new AuthService();

