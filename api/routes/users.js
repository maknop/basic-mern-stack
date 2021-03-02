const express = require('express');

//const app = express();
const usersRouter = express.Router();

module.exports = function(app, usersCollection, err) {
    // Add a user
    usersRouter.post('/api/user', (req, res) => {
        usersCollection.insertOne((req.body), () => {
            if (err) return res.status(500).send(err);

            res.send(JSON.stringify(req.body));
            const newUser = JSON.stringify(req.body);
            console.log('Adding user: ', newUser);
        })
    });

    // Retrieve all users
    usersRouter.get('/api/users', (req, res) => {
        usersCollection.find().toArray(function(result) {
            if (err) throw err;
            console.log(res.json(result));
            console.log('All users retrieved from api/users');
        })
    });

    // Delete a user
    usersRouter.delete('/api/user', function (req, res) {
        res.send('Got a DELETE request at /api/user')
    })

    app.use(usersRouter);

    return usersRouter;
}
