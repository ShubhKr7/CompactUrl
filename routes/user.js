const express=require('express');
const {handleUserSignUp, handleUserLogin}=require('../controllers/user');
const router=express.Router();

//All post routes
router.post('/signup',handleUserSignUp);
router.post('/login',handleUserLogin);


//All get routes
router.get('/signup',(req,res)=>{
    return res.render('signup');        
});

router.get('/login',(req,res)=>{
    return res.render('login');        
})


module.exports=router;