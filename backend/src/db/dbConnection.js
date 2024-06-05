import mongoose from "mongoose";

// const dbConnection = async (url) => {
//     console.log("hello");
//     return await mongoose.connect(`${url}/Todo-App`);
// }

async function dbConnection(url)
{
    return await mongoose.connect(`${url}/Task-Manager`);
}

export default dbConnection;
