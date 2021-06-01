import axios from 'axios';

axios.defaults.withCredentials = true;

// const API_URL = "http://localhost:8000/";
const API_URL = "https://bcbproject.herokuapp.com/";

class getAllgroup_service{


    getAll(){
        return axios
        .get(API_URL + "group/")
        .then(response => {
            return response;
        })
    }

    createGroupToServer(member,group_name){
        return axios
        .post(API_URL + "creategroup/",{
            member,
            group_name
        })
        .then(response => {
            return response;
        })
    }
    
    setGroup(group){
        localStorage.setItem("group",group.group_name)
    }
    
    getCurrentGroup(){
        return localStorage.getItem("group")
    }

    getMembers(presentGroup){
        return axios
        .get(API_URL + "group/" + presentGroup)
        .then(response => {
            return response;
        })
    }

    joinGroup(group){
        return axios
        .post(API_URL + "group/" + group)

    }
    
    leaveGroup(group){
        return axios
        .delete(API_URL + "group/" + group)
    }
    
    cancel(group){
        return axios
        .post(API_URL + "group/" + group)

    }

    privacy(group,status){
        return axios
        .put(API_URL + "group/" + group,{
            public:status
        })

    }

    deleteMember(group,id){
        return axios
        .delete(API_URL + `group/${group}/?id=${id}`)
    }

    refund(group,group_booking,banking_id,banking_name){
        return axios
        .post(API_URL + "group/" + group + "/refund/",{
            banking_id:banking_id,
            banking_name:banking_name,
            group_booking,
        })

    }
}

export default new getAllgroup_service()