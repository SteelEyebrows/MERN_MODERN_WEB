const express = require('express');
const morgan = require('morgan');
const bodyParser = require('body-parser'); 
const cors = require('cors');
const connectDB = require('./config/db');

require('dotenv').config({
    path: './config/config.env'
})

connectDB();

const app =express();
app.use(bodyParser.json());

const authRouter = require('./routes/auth.route');
app.use(cors({
    origin:'http://localhost:3000'
}));
app.use(morgan('dev'));

app.use('/api',authRouter);

app.use((req,res,next)=>{
    res.status(404).json({
        success:false,
        message:"Page not Found"
    })
})
const PORT = 5000;

app.listen(PORT,()=>{
    console.log('app listening');
})