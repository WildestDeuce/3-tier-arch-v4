import express from 'express';
import { User } from '../database/models';
import sha256 from 'sha256';

const userController = express.Router();

//Get to retrieve and display all Users in the User model

userController.get('/', (req, res) => {
  User.find({}, (err, result) => {
    res.status(200).json({
      data:result
    });
  });
});

//Post Add a new user to database
userController.post('/add-user', (req, res) => {
  const { email, password } = req.body;
  console.log('Post received');

  const userData = {
    email,
    hashedPassword: sha256(password)
  };
  const newUser = new User(userData);
  newUser
  .save()
  .then(data => {
    res.status(200).send(data);
  })
  .catch(err => {
    res.status(400).send('unable to save to database');
  });
});


export default userController;
