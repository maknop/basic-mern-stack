// Retrieve
import MongoClient from 'mongodb';
import dotenv from 'dotenv';

dotenv.config();
//import '../config.js';

MongoClient.connect(process.env.MONGODB_CONNECTION, {useNewUrlParser: true, useUnifiedTopology: true}, function(err, db) {
    if(!err) {
        console.log("We are connected.");
    } else {
        console.log("There was an error connecting.");
    }
});