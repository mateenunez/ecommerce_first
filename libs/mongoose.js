import mongoose from "mongoose";

let con = {
    isConnected: false
}

export async function connectDB(){

    if (con.isConnected) return ;
    
    const database = await mongoose.connect(process.env.MONGODB_URI);
    con.isConnected = database.connections[0].readyState;
    
}

mongoose.connection.on('connected', () => {
    console.log('Mongoose connection successed ')
    
})

mongoose.connection.on('error', (err) => {
    console.log('Mongoose connection failed ' + err)
})