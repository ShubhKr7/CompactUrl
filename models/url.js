const mongoose=require('mongoose');

const urlSChema=new mongoose.Schema({
    shortId:{
        required: true,
        unique: true,
        type: String
    },
    redirectURL:{
        type: String,
        required: true
    },
    visitHistory:[{
        timestamp: {type: Number}
    }],
    origin:{
        type: mongoose.Schema.Types.ObjectId,
        ref: 'user'
    }
}, {timestamps:true});

const URL=mongoose.model("url", urlSChema);
module.exports=URL;