const mongoose = require("mongoose");

const matchSchema = new mongoose.Schema({
    league :{type:mongoose.Schema.Types.ObjectId , ref : "League"},
    homeTeam:{type:mongoose.Schema.Types.ObjectId , ref:"Team"},
    awayTeam:{type:mongoose.Schema.Types.ObjectId , ref:"Team"},
    date:{type: Date},
    homeScore:{type:Number , default:0},
    awayScore:{type:Number , default:0},
    status: {type:String , default:"scheduled"}
}, {timestamps:true});

const Match = mongoose.model("Match",matchSchema)
module.exports= Match;