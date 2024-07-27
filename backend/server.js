import express from 'express';
import cors from 'cors';
import data from './data.js'
import mongoose from 'mongoose';
import config from './config.js';
import userRouter from './routers/userRouter.js'

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
app.use('/api/users', userRouter)
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

app.listen(port, ()=>{
    console.log("Server is listening at http://localhost:" + port);
});