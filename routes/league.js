const express = require("express");
const router = express.Router();
const protect = require("../middleware/protect");
const League = require("../models/League");
const Team = require("../models/Team");
const Match = require("../models/Match")
// creating League
router.post("/", protect, async(req , res)=>{
    try{
        const {name} = req.body;
        const league = new League(
            {name:name,
            createdBy:req.user.id});
        await league.save();
        res.json({message: "League Created", league});
    }
    catch(err){
        res.status(500).json({error: err.message});
    }
});
// GEt the league 
router.get("/:id", async(req, res)=>{
    try{
  const league = await League.findById(req.params.id);
    res.json(league);
    }
    catch(err){
        res.status(500).json({error:err.message});
    }
  
});

// Match schedule 

router.post("/:id/matches" , protect , async(req , res)=>{
    try{
        const league = await League.findById(req.params.id);
        if(!league){
            return res.status(404).json({error:"League not fouund"});
        }
        if(league.createdBy.toString()!= req.user.id){
            return res.status(403).json({error:"Not your league"});
        }
        const {homeTeam, awayTeam , date} = req.body;
        const match = new Match({
            league:req.params.id,
            homeTeam,
            awayTeam,
            date
        });
        await match.save();
        res.json({message:"Match schedule successfully", match})

    }
    catch(err){
        res.status(500).json({error: err.message});
    }
})


router.put("/matches/:matchId/score", protect, async(req , res)=>{
    try{
          const match = await Match.findById(req.params.matchId);
          if(!match){
            return res.status(404).json({error:"Not found"});
          }
          const league = await League.findById(match.league);
          if (!league) {
    return res.status(404).json({ error: "League not found" });
}
         if(league.createdBy.toString() != req.user.id){
            return res.status(403).json({error: "Not your League"});
        }
          const {homeScore, awayScore}= req.body;
          const homeTeam = await Team.findById(match.homeTeam);
          const awayTeam = await Team.findById(match.awayTeam);
    if (homeScore > awayScore) {
    // home team won
    homeTeam.wins += 1;
    homeTeam.points += 3;
    awayTeam.losses += 1;
} 
else if (homeScore < awayScore) {
    // away team won
    awayTeam.wins += 1;
    awayTeam.points += 3;
    homeTeam.losses += 1;
} 
else {
    // draw
    homeTeam.draws += 1;
    awayTeam.draws += 1;
    homeTeam.points += 1;
    awayTeam.points += 1;
}
match.homeScore = homeScore;
match.awayScore = awayScore;
match.status="Completed";
await match.save();
await homeTeam.save();
await awayTeam.save();

res.json({message:"Score updated successfully", match});
    }
    catch(err){
        res.status(500).json({error:err.message});
    }
});

router.get("/:id/standings", async(req,res)=>{
    try{
        const teams = await Team.find({league:req.params.id}).sort({points:-1})
        res.json(teams);
    }
    catch(err){
        res.status(500).json({error:err.message});
    }
})
module.exports = router;