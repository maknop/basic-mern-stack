const express = require('express');
const dotenv = require('dotenv');
const MongoClient = require('mongodb');
const app = express();

// Get environment variables
dotenv.config({path: '../.env'});

app.use(express.json());

app.listen(process.env.API_PORT, () => {
    console.log(`API listening at http://localhost:${process.env.API_PORT}`);
});

// Connect to Mongodb database 
MongoClient.connect(process.env.MONGODB_CONNECTION, {useNewUrlParser: true, useUnifiedTopology: true}, function(err, db) {
    if(!err) console.log("Database connection established.");
    else console.log("There was an error connecting.");

    const database = db.db("mydb");

    // Add collections within your db.
    const usersCollection = database.collection("Users");

    app.use('/api/users', require('./routes/users')(app, usersCollection, err));
    app.use('/api/user', require('./routes/users')(app, usersCollection, err)); 
});
