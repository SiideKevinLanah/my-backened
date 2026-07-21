require("dotenv").config();
const express = require("express");
const mongoose= require("mongoose");
const authRoutes = require("./routes/auth");
const userRoutes = require("./routes/users");
const favoriteRoutes = require("./routes/favorites")
const matchesRoutes = require("./routes/matches")
const leagueRoutes = require("./routes/league")
const teamRoutes = require("./routes/team");
const newsRoutes = require("./routes/news")
const app = express();
app.use(express.json());
// Connet to MongoDB
mongoose.connect(process.env.MONGO_URI)
.then(()=> console.log("Connected to MongoDB"))
.catch(err => console.log("Error:", err));
app.get("/", (req,res)=>{
    res.json({message:"One Sports"});
})
app.use("/api/auth", authRoutes);
app.use("/api/users",userRoutes);
app.use("/api/favorites",favoriteRoutes);
app.use("/api/matches", matchesRoutes);
app.use("/api/league", leagueRoutes);
app.use("/api/team",teamRoutes);
app.use("/api/news", newsRoutes);


app.listen(3000, () => {
    console.log("Server running on http://localhost:3000");
});