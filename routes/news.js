const express = require("express");
const router = express.Router();
const axios = require("axios");

router.get("/",async (req , res)=>{
    try{const team = req.query.team;

    // build search term 

    const searchTerm = team ? team +"football":"football";

    // call News API
    const response = await axios.get()

    res.json(response.data.aricles);
    }
    catch(err){
        res.status(500).json({error:err.message});
    }
});

module.exports=router;
