const express = require("express");
const router = express.Router();
const axios = require("axios");

router.get("/live", async(req,res)=>{
    try{
    //   const response = await axios.get(
    //   `https://www.thesportsdb.com/api/v1/json/${process.env.SPORTSDB_KEY}/livescore.php?s=Soccer`
    // );

    const dummydata=[
    {
      matchId: "1",
      homeTeam: { name: "Arsenal", logo: "", score: 2 },
      awayTeam: { name: "Chelsea", logo: "", score: 1 },
      minute: 67,
      league: "Premier League",
      status: "LIVE"
    },
    {
      matchId: "2",
      homeTeam: { name: "Real Madrid", logo: "", score: 0 },
      awayTeam: { name: "Barcelona", logo: "", score: 0 },
      minute: 23,
      league: "La Liga",
      status: "LIVE"
    }
  ];

    res.json(dummydata);
    }
    catch(err){
        res.status(500).json({error:err.message})
    }
});

module.exports=router;