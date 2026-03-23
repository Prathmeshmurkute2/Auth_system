import express from 'express'
import dotenv from 'dotenv'
import connectDB from './config/db.js'

dotenv.config();

const app = express();
app.use(express.json());

connectDB();


app.use((req,res,next)=>{
    console.log("Middleware");
    next();
})

app.get('/',(req,res)=>{
    res.send("Auth system!")
})

app.get("/user",(req,res)=>{
    res.send({name:"Prathmesh"})
})

app.post("/user",(req,res)=>{
    res.send("user created")
})

app.get("/user/:id",(req,res)=>{
    res.send(req.params.id)
})

const PORT = process.env.PORT;

app.listen(PORT,()=>{
    console.log("server is running on port : ",PORT);
});

