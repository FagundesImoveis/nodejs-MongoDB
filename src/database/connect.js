const mongoose = require('mongoose');

const connectDB = async ()=>{
    await mongoose.connect(process.env.CONNECT_MONGO, (e)=>{
        if(e){
            console.log("Error: " + e)
        }else{
            console.log("OK!")
        }
    }
    )
}

module.exports = connectDB;