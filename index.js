const express = require("express");
const mongoose= require("mongoose");
const authRoutes = require("./routes/auth");
const userRoutes = require("./routes/users");

const app = express();
app.use(express.json());
// Connet to MongoDB
mongoose.connect("mongodb+srv://siidelanahcr_db_user:kevin123@cluster0.mkmu0uv.mongodb.net/myapp?appName=Cluster0")
.then(()=> console.log("Connected to MongoDB"))
.catch(err => console.log("Error:", err));

app.use("/", authRoutes);
app.use("/users",userRoutes);

//post- create 
// app.post("/users", async(req, res) => {
//     try{
//         const user = new User(req.body);
//     await user.save();
//     res.json({ message: "User saved!", user});
//     }
//     catch(err){
//         res.status(500).json({error:err.message });
//     }
// });

// app.get("/users", async(req,res)=>{
//     const users= await User.find();
//     res.json(users);

// });
// //get- fetch data
// app.get("/users/:id", async(req, res)=>{
//     try{
//  const user= await User.findById(req.params.id);
//     res.json(user);
//     }
//    catch(err){
//     res.status(500).json({error:err.message});
//    }
// });

// //put= update
// app.put("/users/:id", async(req, res)=>{
//     try{const user= await User.findByIdAndUpdate(
//     req.params.id,
//     req.body,
//     {new:true}
//   );
//  res.json({message:"User Update!", user})
// }catch(err){
//     res.status(500).json({error:err.message});
// }
// });

// app.delete("/users/:id", async(req, res)=>{
//    try{    await User.findByIdAndDelete(req.params.id);
//     res.json({message: "User deleted!"});}
// catch(err){
// res.status(500).json({error:err.message});
// }
// });




app.listen(3000, () => {
    console.log("Server running on http://localhost:3000");
});