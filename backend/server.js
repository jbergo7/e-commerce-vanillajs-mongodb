import express from 'express';
import cors from 'cors';
import data from './data.js'
// const express = require('express');
// const cors = require('cors');
// const data = require('./data.js');
const app = express();
const port = 5000;


app.use(cors());
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