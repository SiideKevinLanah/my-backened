const express = require("express");
const router = express.Router();
const protect = require("../middleware/protect");
const League= require("../models/League");
const Team = require("../models/Team");

// creating team in the local league
router.post("/:id/teams", protect, async(req , res)=>{
    try{
        const league = await League.findById(req.params.id);
        if(!league){
            return res.status(404).json({error:"League not found"})
        }
        if(league.createdBy.toString() != req.user.id){
            return res.status(403).json({error: "Not your League"});
        }
        const {name}= req.body;
        const team = new Team({
            name, league:req.params.id
        })
        await team.save();

        res.json({message: "Team Created successfully", team})
    }
    catch(err){
        res.status(500).json({error:err.message})
    }
});
router.get("/:id/teams", async(req,res)=>{
    try{
        const teams = await Team.find({league:req.params.id});
        res.json(teams);
    }
    catch(errr){
        res.status(500).json({error:err.message});
    }
});

module.exports=router;