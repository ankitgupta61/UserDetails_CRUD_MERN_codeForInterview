import { FormGroup, InputLabel, Input, FormControl, Button, styled } from "@mui/material";
import { useState } from 'react';
import { postData } from "../service/api"

const Container = styled(FormGroup)`
    width : 50%;
    margin : 5% auto 0 auto;
    & > div {
        margin-top : 20px;
    }
`

const initialUserData = {
    name : '',
    userName : '',
    email : '',
    phoneNumber : ''
}

const AddUsers = () =>{
    const [ userData, setUserData] = useState(initialUserData);
    const changeHandler = (e) =>{
        // console.log(e.target.name, e.target.value);
        setUserData({...userData,[e.target.name] : e.target.value});
        // console.log(userData);
    }
    const addUserDetails = () =>{
        console.log(userData);
        postData(userData);
    }
    return (
        <Container>
            <FormControl>
                <InputLabel>Name</InputLabel>
                <Input onChange={(e)=>{changeHandler(e)}} name="name" />
            </FormControl>
            <FormControl>
                <InputLabel>UserName</InputLabel>
                <Input onChange={(e)=>{changeHandler(e)}} name='userName' />
            </FormControl>
            <FormControl>
                <InputLabel>Email</InputLabel>
                <Input onChange={(e)=>{changeHandler(e)}} name='email' type="email" />
            </FormControl>
            <FormControl>
                <InputLabel>PhoneNumber</InputLabel>
                <Input onChange={(e)=>{changeHandler(e)}} name='phoneNumber' type="number" />
            </FormControl>
            <FormControl>
                <Button variant = "contained" onClick={addUserDetails}>Add User</Button>
            </FormControl>
        </Container>
    )
}

export default AddUsers;