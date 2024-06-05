import express from 'express';
import dbConnection from './db/dbConnection.js';
import bodyParser from 'body-parser';
import cookieParser from 'cookie-parser';
import cors from 'cors';
import mongoose from "mongoose";

// Database Connections
// const url='mongodb+srv://admin:admin@stack-overflow-colne.n4gekxe.mongodb.net/?retryWrites=true&w=majority'
const DATABASE_URL='mongodb+srv://pjapan54:ltyDzctaosoRSR75@japan07.bvevwnu.mongodb.net/?retryWrites=true&w=majority'
const PORT="27017 ";
mongoose.connect(DATABASE_URL,{useNewUrlParser:true ,useUnifiedTopology:true})
    .then(()=>app.listen(PORT,()=>{
        console.log(`mongodb server is running on ${PORT}`);
    }))
    .catch((err)=>console.log(err.message));//if there is any error from database then it will show to server terminal

// dbConnection("mongodb://127.0.0.1:27017")
// .then(() => console.log("Database connection successfull!!!"))
// .catch((error) => console.log("Database connection failed! from index.js file ", error))

const app = express();


app.use(bodyParser.urlencoded({ extended: false }));
app.use(bodyParser.json())
app.use(cookieParser());
app.use(cors());


// Routes
import HomeRoute from './routes/home.route.js';
import userRoute from './routes/user.route.js';

app.use( '/api/v1/', HomeRoute );
app.use( '/api/v1/user', userRoute );

app.listen(4000, () => {
  console.log(`Example app listening on port ${4000}`)
})

