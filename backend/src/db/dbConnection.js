// import mongoose from "mongoose";

// // const dbConnection = async (url) => {
// //     console.log("hello");
// //     return await mongoose.connect(`${url}/Todo-App`);
// // }

// async function dbConnection(url)
// {
//     return await mongoose.connect(`${url}/Task-Manager`);
// }

// export default dbConnection;



import mongoose from "mongoose";

async function dbConnection(url) {
    console.log(url);
    try {
        console.log(`Connecting to database at ${url}/Task-Manager`);
        await mongoose.connect(`${url}`, {
            useNewUrlParser: true,
            useUnifiedTopology: true,
        });
        console.log("Database connection successful");
    } catch (error) {
        console.error("Database connection failed! here in dbconnection file", error);
        process.exit(1); // Exit the process with a failure code
    }
    console.log("At the end of dbconnection.js file")
}

export default dbConnection;
