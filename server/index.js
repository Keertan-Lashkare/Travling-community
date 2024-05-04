import express from 'express';
import {config} from 'dotenv';
config({
    path:"./data/config.env"
})
import db from './data/db.js';
import login_route from './routers/login.js';
import sing_route from './routers/singup.js';
import bodyParser from 'body-parser';
import auth from './midder/auth.js';
import cookieParser from 'cookie-parser';
import cors from 'cors';
import user_profile from './routers/profile.js';
import place from './routers/psuggetion.js';

const app=express();
db();

app.use(bodyParser.json());
app.use(express.urlencoded({extended: true})); 
app.use(cookieParser());
app.use(cors());


app.get("/",auth,(req,res)=>{
    res.send("home page");
})
app.use('/login',login_route);
app.use('/sing',sing_route);
app.use('/profile',user_profile);
app.use('/place',place);



app.listen(5000,()=>{
    
    console.log("server is working");
})