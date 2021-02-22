import express from 'express';
import dotenv from 'dotenv';
import MongoClient from 'mongodb';

const app = express();
const users = [];

dotenv.config({path: '../.env'});

MongoClient.connect(process.env.MONGODB_CONNECTION, {useNewUrlParser: true, useUnifiedTopology: true}, function(err, db) {
    if(!err) {
        console.log("Database Connection Established.");
    } else {
        console.log("There was an error connecting.");
    }
});

app.use(express.json());

app.get('/api/users', (req, res) => {
  console.log('api/users called!')
  res.json(users);
});

app.post('/api/user', (req, res) => {
  const newUser = req.body.user;
  console.log('Adding user: ', newUser);
  users.push(newUser);
  res.json("user added");
});

app.get('/', (req,res) => {
    res.send('App Works!');
});

app.listen(process.env.API_PORT, () => {
    console.log(`API listening at http://localhost:${process.env.API_PORT}`);
});
