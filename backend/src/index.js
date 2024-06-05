import express from 'express';
import dbConnection from './db/dbConnection.js';
import bodyParser from 'body-parser';
import cookieParser from 'cookie-parser';

// Database Connections
dbConnection("mongodb://localhost:27017")
.then(() => console.log("Database connection successfull!!!"))
.catch((error) => console.log("Database connection failed! ", error))

const app = express();


app.use(bodyParser.urlencoded({ extended: false }));
app.use(bodyParser.json())
app.use(cookieParser());


// Routes
import HomeRoute from './routes/home.route.js';
import userRoute from './routes/user.route.js';

app.use( '/api/v1/', HomeRoute );
app.use( '/api/v1/user', userRoute );

app.listen(4000, () => {
  console.log(`Example app listening on port ${4000}`)
})

