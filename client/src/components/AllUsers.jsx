import { Table, TableHead, TableBody, TableRow, TableCell } from "@mui/material";
import { useEffect, useState } from "react";
import { getUsers } from "../service/api";
import axios from "axios";



const AllUsers = () =>{
    const [ users, setUsers ] = useState([]);

    useEffect(()=>{
        const fetchData = async () => {
            try {
              const response = await axios.get('http://localhost:8000/all');
              console.log(response);
              setUsers(response.data);
            } catch (error) {
              console.error('Error fetching data:', error);
            }
          };
          fetchData();
    },[])

    return (
        <Table>
            <TableHead>
            <TableRow>
                <TableCell>S No</TableCell>
                <TableCell>Name</TableCell>
                <TableCell>User Name</TableCell>
                <TableCell>Email</TableCell>
                <TableCell>Phone Number</TableCell>
            </TableRow>
            </TableHead>
            <TableBody>
            {users.map((item, index) => (
                <TableRow key={index}>
                <TableCell>{index+1}</TableCell>
                <TableCell>{item.name}</TableCell>
                <TableCell>{item.userName}</TableCell>
                <TableCell>{item.email}</TableCell>
                <TableCell>{item.phoneNumber}</TableCell>
                </TableRow>
            ))}
            </TableBody>
        </Table>
    )
}

export default AllUsers;