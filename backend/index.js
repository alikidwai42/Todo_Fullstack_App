const express = require("express");
const { createTodo, updateTodo } = require("./types");

const app = express()
const {todo} = require("./db")
const cors = require("cors")
app.use(cors({origin:"http://localhost:5173"}));
app.use(express.json());


app.post("/todo", async function(req,res){
    const createPayload=req.body;
    const parsePayload =createTodo.safeParse(createPayload);
    if (!parsePayload.success){
        res.status(411).json({
            msg:"you sent the wrong input"
        })
        return;
    }
    //put in mongo db
    await todo.create({
        title:createPayload.title,
        description: createPayload.description,
        completed:false
    })
    res.json({
        msg:"todo created"
    })
    
})

app.get("/todos",async function(req,res){
    const todos =  await todo.find({});
    res.json({todos})

})

app.put("/completed", async function(req,res){
    const updatePayload = req.body;
    const parsePayload = updateTodo.safeParse(updatePayload)
    if (!parsePayload.success){
        res.status(411).json({
            msg:"wrong input"
        })
        return;
    }
    await todo.updateOne({
        _id:req.body.id 

    },{
        completed:true 
    })
    res.json({
        msg:"todo marked as completed"
    })

})
app.listen(3000);