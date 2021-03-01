import express, { response } from 'express';
import dotenv from 'dotenv';
import MongoClient from 'mongodb';

const app = express();

dotenv.config({path: '../.env'});

app.use(express.json());

app.listen(process.env.API_PORT, () => {
    console.log(`API listening at http://localhost:${process.env.API_PORT}`);

    MongoClient.connect(process.env.MONGODB_CONNECTION, {useNewUrlParser: true, useUnifiedTopology: true}, function(err, client) {
        if(!err) console.log("Database connection established.");
        else console.log("There was an error connecting.");
    
        const database = client.db("mydb");
        const collection = database.collection("Users");
        
        app.post('/api/user', (req, res) => {
            collection.insertOne((req.body), () => {
                if (err) return res.status(500).send(err);

                res.send(req.body);
                const newUser = req.body;
                console.log('Adding user: ', newUser);
            })
        });

        app.get('/api/users', (req, res) => {
            collection.find({}).toArray(function(result) {
                if (err) throw err;
                console.log(res.json(result));
                console.log('All users retrieved from api/users');
            })
        });
          
        app.get('/', (req,res) => {
            res.send('App Works!');
        });
    });
});
