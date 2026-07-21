const mongoose = require("mongoose");
const leagueSchema= new mongoose.Schema({
   name:{type:String},
   createdBy:{type:mongoose.Schema.Types.ObjectId , ref:"User"}
},{timestamps:true});

const League = mongoose.model("League", leagueSchema);

module.exports = League;