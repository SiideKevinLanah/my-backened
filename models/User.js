const mongoose = require("mongoose");

const userSchema= new mongoose.Schema({
    email:{type: String, unique:true , required:true},
    password:{type:String, select:false},
    favoriteTeams:[{type:String}],
    favoritePlayers:[{type:String}],
    favoriteLeagues:[{type:String}],
   
},{timestamps:true});

const User = mongoose.model("User", userSchema);
module.exports= User;