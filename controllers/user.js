const User = require('../models/user');
const {v4:uuidv4} = require('uuid');
const {setUser} = require('../service/auth');
const bcrypt = require('bcrypt');

async function handleUserSignUp(req,res){
    const hashedPass = await bcrypt.hash(req.body.password, 9);
    const {name, email}=req.body;
    await User.create({
        name,
        email,
        password: hashedPass
    });
    return res.render("login");
}

async function handleUserLogin(req,res){
    const Email=req.body.email; Password=req.body.password;
    //const hashedPass = await bcrypt.hash(Password, 9);
    const user= await User.findOne({
        email:Email
    });
    if(!user) return res.redirect('https://compact-url.vercel.app/user/signup');
    if(await bcrypt.compare(Password, user.password)){
        const sessionId=uuidv4();
        setUser(sessionId, user);
        res.cookie("uid", sessionId);
        return res.redirect('https://compact-url.vercel.app/user/home');
    }
   
    return res.redirect("https://compact-url.vercel.app/user/login");
   
}

module.exports={handleUserSignUp, handleUserLogin};