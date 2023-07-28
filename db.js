const mongoose = require('mongoose');

const mongoURI = process.env.mongoURI

const connectToMongo = ()=>{
    mongoose.connect(mongoURI, ()=>{
        console.log("Connected to Mongo Successfully");
    })
}

module.exports = connectToMongo;