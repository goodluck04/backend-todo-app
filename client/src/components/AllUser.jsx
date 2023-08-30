import { useEffect, useState } from 'react';
import { Table, TableHead, TableBody, TableRow, TableCell, styled, Button } from '@mui/material';
// import the get api for all user
import { getUsers, deleteUser } from '../service/api';

// for button linking
import { Link } from 'react-router-dom';


const StyledTable = styled(Table)`
    width: 90%;
    margin: 50px auto 0 auto;
`
const THead = styled(TableRow)`
    background: #000;
    ${'' /* parent th */}
    & > th {
        color: #fff;
        font-size: 20px;
    }
`

const TBody = styled(TableRow)`
    & > td {
        font-size: 20px;
    }
`


const AllUser = () => {

    //store the and update the values of get api
    // so use state 
    const [users, setUsers] = useState([]) // initially empty array


    // read about useeffect , component mount
    // it takes two argument function and empty array
    useEffect(() => {
        getAllUsers();
    }, []);

    // make a functionto get all user
    const getAllUsers = async () => {
        // call the get api for all users
        let response = await getUsers();
        // store update values of useState
        setUsers(response.data); 
        // console.log(response.data); // data 
    }


    const deleteUserDetails= async (id) => {
        await deleteUser(id);
        getAllUsers();
    }

    return (
        <StyledTable>
            <TableHead>
                <THead>
                    <TableCell>ID</TableCell>
                    <TableCell>Name</TableCell>
                    <TableCell>UserName</TableCell>
                    <TableCell>Email</TableCell>
                    <TableCell>Phone</TableCell>
                    <TableCell></TableCell>
                </THead>    
            </TableHead>
            <TableBody>
                {
                        users.map(user => (      
                    <TBody key={user._id}>
                        <TableCell>{user._id}</TableCell>                
                        <TableCell>{user.name}</TableCell>                
                        <TableCell>{user.username}</TableCell>                
                        <TableCell>{user.email}</TableCell>                
                        <TableCell>{user.phone}</TableCell> 
                        <TableCell>
                            <Button variant='contained' style={{marginRight: 10}} component={Link} to={`/edit/${user._id}`}>Edit</Button>
                            <Button variant='contained'color='secondary' onClick={() => deleteUserDetails(user._id)}>Delete</Button>
                        </TableCell>           
                    </TBody>
                        ))
                    }
                </TableBody>
        </StyledTable>
        )
}

export default AllUser;