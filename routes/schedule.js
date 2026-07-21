const express = require("express");
const router = express.Router();
const protect = require("../middleware/protect");
const League= require("../models/League");
const Match = require("../models/Match");

router.post("/:id/matches", protect, async(req , res)=>{
    try{
        const league = await League.findById(req.params.id);
        if(!league){
            return res.status(404).json({error : "League not found"});
        }
        if(league.createdBy.toString()!=req.user.id){
            return res.status(403).json({error:"Not your League"});

        }
        const {homeTeam, awayTeam}= req.body;
        const match= new Match({
            league: req.params.id,
            homeTeam,
            awayTeam,
            date
        });
        await match.save();
    }
    catch(err){
        res.status(500).json({error:err.message});
    }
});

module.exports = router;