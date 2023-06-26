import axios from 'axios';

const URL = "http://localhost:8000";

export const postData = (data) =>{
    try{
        console.log(data);
        console.log(`adduser api called, data send from client ${data}`);
        axios.post(`${URL}/add`, data);
    }catch(error){
        console.log(`error while callling AddUser Api : ${error}`);
    }
}