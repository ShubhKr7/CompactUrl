const {getUser} = require('../service/auth');

async function checkUserAuth(req,res,next){
   const userUid= req.cookies?.uid;
    if(!userUid) return res.render('login');
    const user=  getUser(userUid);
    if(!user) return res.render('login');
    req.user=user;
    next();
}

async function isValidUser(req,res,next){
    const userUid= req.cookies?.uid;
    const user=  getUser(userUid);
    req.user=user;
    next();
}

module.exports={
    checkUserAuth, isValidUser
};