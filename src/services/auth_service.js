import axios from 'axios' 
import { useCookies} from "react-cookie";

axios.defaults.withCredentials = true;

const API_URL = "http://localhost:8000/";

// window.localStorage.setItem('user','test');

class  AuthService {
    login(username,password){
        return axios
        .post(API_URL + 'login/',{
            username,
            password,
            
            
        })
    .then(response => {
        // if(response.data.accessToken)
         if (response.data){
              localStorage.setItem('user',JSON.stringify(response.data));
            //   document.cookie = `user = ${JSON.parse(localStorage.getItem('user')).accessToken}`;
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

   cookieremove(){
       return axios
       .get(API_URL + 'logout/',
        {withCredentials:true}
       )
   }
}


export default new AuthService();

