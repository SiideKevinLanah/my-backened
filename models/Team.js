const mongoose = require("mongoose")
const League = require("./League")

const teamSchema = new mongoose.Schema({
    name:{type:String},
    league :{type:mongoose.Schema.Types.ObjectId , ref:League},
   wins: { type: Number, default: 0 },
draws: { type: Number, default: 0 },
losses: { type: Number, default: 0 },
points: { type: Number, default: 0 },
},{timestamps:true});

const Team = mongoose.model("Team", teamSchema)

module.exports= Team;