import express from 'express';
import cors from 'cors';
import data from './data.js'
import mongoose from 'mongoose';
import config from './config.js';
import userRouter from './routers/userRouter.js'
import orderRouter from './routers/orderRouter.js';

// const express = require('express');
// const cors = require('cors');
// const data = require('./data.js');

mongoose
  .connect(config.MONGODB_URL, {
    useNewUrlParser: true,
    useUnifiedTopology: true,
    //useCreateIndex: true,
  })
  .then(() => {
    console.log('Connected to mongodb.');
  })
  .catch((error) => {
    console.log("Error connecting to MongoDB");
    //console.log(error);
  });
const app = express();
const port = 5000;


app.use(cors());
app.use(express.json());
app.use('/api/users', userRouter);
app.use('/api/orders', orderRouter);
app.get('/api/paypal/clientId', (req, res) => {
  res.send({ clientId: config.PAYPAL_CLIENT_ID });
});
app.get("/api/products", (req, res) =>{
 res.send(data.products);
});
app.get('/api/products/:id', (req, res) => {
    const product = data.products.find((x) => x._id === req.params.id);
    if(product){
        res.send(product);
    }else {
        res.status(404).send({ message: 'Product Not Found!' });
    }
    
});
app.use((err, req, res, next) => {
 const status = err.name && err.name === 'ValidationError'? 400: 500;
 res.status(status).send({ message: err.message });
});
app.listen(port, ()=>{
    console.log("Server is listening at http://localhost:" + port);
});