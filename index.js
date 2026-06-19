require("dotenv").config();
const express = require("express");
const mongoose= require("mongoose");
const authRoutes = require("./routes/auth");
const userRoutes = require("./routes/users");
const favoriteRoutes = require("./routes/favorites")
const app = express();
app.use(express.json());
// Connet to MongoDB
mongoose.connect(process.env.MONGO_URI)
.then(()=> console.log("Connected to MongoDB"))
.catch(err => console.log("Error:", err));
app.get("/", (req,res)=>{
    res.json({message:"One Sports"});
})
app.use("/", authRoutes);
app.use("/users",userRoutes);
app.user("/api/favorites",favoriteRoutes);




app.listen(3000, () => {
    console.log("Server running on http://localhost:3000");
});