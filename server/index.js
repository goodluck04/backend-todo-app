import  Express  from "express";
import dotenv from "dotenv";
import cors from 'cors';
import bodyParser from "body-parser";
const PORT = 8000;
import Connection from './database/db.js';
import Routes from './routes/route.js'


const app = Express();
dotenv.config();

// use body paser

// parse json file
app.use(bodyParser.json({extended: true}));
// decode the url 
app.use(bodyParser.urlencoded({extended: true}));



// use cors
app.use(cors());

// use router here
app.use('/', Routes);


Connection();





app.listen(PORT, () => console.log(`Sever is running successfully on PORT ${PORT}`));