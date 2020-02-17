import express from 'express';

const userController = express.Router();

userController.get('/', (res, req) => {
  res.status(200).json({
    status:'user controller API call successful'
  });
});

export default userController;
