//packages
import express from "express";
import bodyParser from "body-parser";
import axios from "axios";
import {dirname} from "path";
import {fileURLToPath} from "url";
import env from "dotenv";
import pg from "pg";

env.config();
//constants 
const app = express();
var port = 3000;
const __dirname = dirname(fileURLToPath(import.meta.url)) ;
const db = new pg.Client({
     user : process.env.PG_USER ,
     host: process.env.PG_HOST ,
     database : process.env.PG_DATABASE ,
     port : process.env.PG_PORT ,
     password: process.env.PG_PASSWORD ,
})


//middleware
app.use(bodyParser.urlencoded({extended:true}));
app.use(express.static("public"));
db.connect();

//home page route


//listening to application
app.listen(port,()=>{
     console.log(`Server is runnig on port ${port}`)
})
