const express = require('express');
const mongoose= require('mongoose');
const dotenv= require('dotenv').config;

const app=express();

app.use(express.json());

const PORT = process.env.PORT || 5500 ;

const todoRoutes=require('./routes/items');

mongoose.connect("mongodb+srv://zongon:zongon123@cluster0.cfvsiri.mongodb.net/?retryWrites=true&w=majority")
.then(()=>console.log("database connected")).catch(err => console.log(err))

app.use('/',todoRoutes)

app.listen(PORT,()=>console.log("server connected"));
