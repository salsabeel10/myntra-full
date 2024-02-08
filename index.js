const port = 4000

const express = require('express')
const app = express()
const mongoose = require('mongoose')
const jwt = require('jsonwebtoken')
const multer = require('multer')
const path = require('path')
const cors = require('cors')

app.use(express.json())
app.use(cors())

// DataBase Connection
mongoose.connect(
  'mongodb+srv://salsabeel:8456@cluster0.tcp3er7.mongodb.net/E-Commerce'
)
// Api Creation
app.get('/',(req,res)=>{
    res.send("Express App Is Running")

})


app.listen(port,(err)=>{
    if(!err){
        console.log("Server Running on "+port);
    }else{
        console.log(err);
    }
})