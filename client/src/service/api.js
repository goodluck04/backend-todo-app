import axios from 'axios';
// this is api
// now import this file in addUser file

const URL = 'http://localhost:8000';

// await used with asynchronous function
// so make your function async

// post method to send data into database
export const addUser = async (data) => {
    try {
        // .post(URL endpoint, data) as input
       await axios.post(`${URL}/add`, data);
    } catch (error) {
        console.log('Error while calling addUser api ', error);
    }
}

// retriving data from data base

export const getUsers = async () => {
    try {
        return await axios.get(`${URL}/all`);
    } catch (error) {
        console.log('Error while calling get API ', error);
    }
} 


export const getUser = async (id) => {
    try {
            return await axios.get(`${URL}/${id}}`)
    } catch(error) {
        console.log('Error while calling getUser api ', error);
    }
}   

export const editUser = async (user, id) => {
    try {
        // you can use put here
        return await axios.put(`${URL}/${id}`, user);
    } catch(error) {
        console.log('Error while calling editUser api ', error);
    }
} 

export const deleteUser = async (id) => {
    try {
        return await axios.delete(`${URL}/${id}`);
    } catch(error) {
        console.log('Error while calling deleteUser api ', error);   
    }
} 

