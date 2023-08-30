import { useState } from "react";
import { FormControl, FormGroup, InputLabel, Input, Typography, styled, Button } from "@mui/material";
import { addUser } from "../service/api";

// change raout on click or submit using useNavigate component
import { useNavigate } from 'react-router-dom';
   
// formgroup - to make form or group of form component 
// formcontrol - control each component in form
// inputlabel -> placeholder in mui
// input - input area 
// typography component used to change heading variant - tags h1, h2, etc
// by default mui gives <P> tag 

// change formgroup with container to imply mui style
const Container = styled(FormGroup)`
   width: 50%;
    ${'' /*top right bottom left  auto means centre */}
   margin: 5% auto 0 auto; 
   ${'' /* apply cssto child of container which is formcontrol but its actually a div */}
   & > div {
    margin-top: 20px;
   }
`

// create defaultValue as empty json to store adduser in useState hook
const defaultValue = {
    name: "",
    username: "",
    email: "",
    phone: ""
} 

const AddUser = () => {

    // make useState to store values of form in the json
    const [user, setUser] = useState(defaultValue); // passed initial state as defaultValue

     // make variable for usenavigate to use
     const navigate = useNavigate();




// e -> stands for event
    const onValueChange = (e) => {
        // console.log(e.target.name, e.target.value);
        // use here state-function setUser to update the values
        // ...user used to spread(append the list) the values not overwrite default values
        // as we know target.name and target.value are variable means value
        // and we know json accept and expect to give key:value 
        // to make value a enclose in [e.target.name]
        setUser({...user, [e.target.name] : e.target.value})
    }

    const addUserDetails = async () =>{
        // here we use api to take data from user
        // user array will be as data input 
        // our addUser is sync and awit in api file so make this function as that
        await addUser(user);
        navigate('/all');
    }

    return (
        // add form to store data from user
        <Container>
            <Typography variant="h4">Add User</Typography>
            <FormControl>
                <InputLabel>Name</InputLabel>
                <Input  onChange={(e) => onValueChange(e)} name="name" />
            </FormControl>
            <FormControl>
                <InputLabel>Username</InputLabel>
                <Input onChange={(e) => onValueChange(e)} name="username" />
            </FormControl>
            <FormControl>
                <InputLabel>Email</InputLabel>
                <Input onChange={(e) => onValueChange(e)} name="email" />
            </FormControl>
            <FormControl>
                <InputLabel>Phone</InputLabel>
                <Input onChange={(e) => onValueChange(e)} name="phone" />
            </FormControl>
            <FormControl>
            {/* varient use change color of button */}
                <Button variant="contained" onClick={() =>addUserDetails()}>Add</Button>
            </FormControl>
        </Container>
    )
}

export default AddUser;