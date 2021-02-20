import express from 'express';
import dotenv from 'dotenv';

const app = express();
const users = [];

dotenv.config();

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
    console.log(`Server listening at http://localhost:${process.env.API_PORT}`);
});
