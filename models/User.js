const mongoose = require("mongoose");

const userSchema= new mongoose.Schema({
    name:String,
    email:{type: String, unique:true},
    password:String,
    city: String,
    favoriteTeams:[{type:String}],
    favoritePlayers:[{type:String}],
    favoriteLeague:[{type:String}],
   
},{timestamps:true});

const User = mongoose.model("User", userSchema);
module.exports= User;