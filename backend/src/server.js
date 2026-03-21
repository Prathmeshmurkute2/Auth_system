import express from 'express'

const app = express();
app.use(express.json());

const port=2304;

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

app.listen(port,()=>{
    console.log("server is running on port : ",port);
});

