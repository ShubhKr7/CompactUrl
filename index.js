require('dotenv').config();

const express=require('express');
const path=require('path');
const app=express();
const PORT= process.env.PORT || 4567;
const {connectToMongoDB}=require('./connection');
const cookieParser = require('cookie-parser');
const {checkUserAuth, isValidUser}=require('./middlewares/auth');


//Middlewares
app.use(express.json());
app.use(cookieParser());
app.use(express.urlencoded({extended: false}));

//Routes
const urlRoute=require('./routes/url');
//Static Routes (All HTML frontend content of the website)
const staticRoutes=require("./routes/staticRouter");
const userRoutes = require('./routes/user');


app.set("view engine","ejs");
app.set("views", path.resolve("./views"));
app.use("/",isValidUser,staticRoutes);
app.use('/user',userRoutes);
app.use("/url",checkUserAuth,urlRoute);

//Connecting to mongoDB Server
connectToMongoDB("mongodb://localhost:27017/compacturl")
.then(()=>{console.log("Connected to Mongo DB!!!")})
.catch(()=>{console.log("Error Encountered while connecting to mongo DB ");});


//Listening to Port
app.listen(PORT,()=>{console.log(`Server running on port: ${PORT}`);});