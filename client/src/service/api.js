import axios from 'axios';

const URL = "http://localhost:8000";

export const postData = (data) =>{
    try{
        axios.post(`${URL}/add`, data);
    }catch(error){
        console.log(`error while callling AddUser Api : ${error}`);
    }
}

export const getUsers = async() =>{
    try{
        return await axios.get(`${URL}/all`);
    }catch(error){
        console.log(`error while calling getUser API: ${error}`);
    }
}