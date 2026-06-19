const express= require("express");
const protect= require("../middleware/protect.js");
const router= express.Router();
const User= require("../models/User.js");

router.post("/team/teamId",protect ,async(req, res)=>{
   
   try{
    const user= await User.findByIdAndUpdate(
        req.user.id,
        {$push:{favoriteTeams: req.params.teamId}},
        {new:true}
    ).select("-password");
    res.json({message:"Team added to favorites!:",user})

   }catch (err){
    res.status(500).json({error:err.message});
   }
});

// Unfollow 
router.delete("/team/teamId",protect ,async(req, res)=>{
   
   try{
    const user= await User.findByIdAndUpdate(
        req.user.id,
        {$pull:{favoriteTeams: req.params.teamId}},
        {new:true}
    ).select("-password");
    res.json({message:"Team rermoved from favorites!:",user})

   }catch (err){
    res.status(500).json({error:err.message});
   }

});

router.get("/", protect, async(req,res)=>{
    try{
        const user = await User.findById(req.user.id).select(
            "favoriteTeams favoritePlayers favoriteLeagues"
        )
        res.json(user);
    }
    catch(err){
        res.status(500).json({error:err.message});
    }
});

router.post("/player/playerId", protect, async(req,res)=>{
    try{
        const user= await User.findByIdAndUpdate(
            req.user.id,
            {$push:{favoritePlayers: req.params.playerId}},
            {new:true}
        ).select("-password");
        res.json({message:"Player added to favorites!:", user})
    }
    catch(err){
        res.status(500).json({error: err.message});
    }
});

router.delete("/player/playerId", protect, async(req, res)=>{
    try{
        const user= await User.findByIdAndUpdate(
            req.user.id,
            {$pull:{favoritePlayers: req.params.playerId}},
            {new:true}
        ).select("-password");
        res.json({message:"Player removed from favorite:", user})
    }
    catch(err){
        res.status(500).json({error:err.message});
    }
});

router.post("/league/leagueId",protect, async(req,res)=>{
    try{const user= await User.findByIdAndUpdate(
        req.user.id,
        {$push:{favoriteLeague:req.params.leagueId}},
        {new:true}
    ).select("-password");
    res.json({message:"League added to favorite:", user});

}catch(err){
    res.status(500).json({error:err.message});
}
    
});

router.delete("/league/leagueId",protect, async(req,res)=>{
    try{
        const user= await User.findByIdAndDelete(
              req.user.id,
              {$pull:{favoriteLeague:req.params.leagueId}},
              {new: true}
        ).select("-password");
        res.json({message:"League added to favorite:", user});
} 
catch(err){
res.status(500).json({error:err.message});
}
});

module.export = router;