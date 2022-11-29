const express = require("express")
const cors = require('cors');
const connection=require("../database/index.js")

const app=express();

app.use(express.json())
app.use(cors())

PORT=5000;
///////////       methodsssss

app.get("/allPosts",(req,res)=>{
    const q="SELECT post.content ,  user.nameuser , post.idpost FROM post INNER JOIN user ON user.iduser=post.user_iduser";
    connection.query(q,(err,response)=>{
        if(err) throw err;
        else res.send(response)
    })
})


app.get("/allUsers",(req,res)=>{
    const q="SELECT * FROM user";
    connection.query(q,(err,response)=>{
        if(err) throw err;
        else res.send(response)
    })
})


app.post("/createAccount",(req,res)=>{
    const q=`INSERT INTO user (nameuser,hobbiesuser) VALUES ("${req.body.nameuser}","${req.body.hobbiesuser}")`;
    connection.query(q,(err,response)=>{
        if(err) throw (err);
        res.status(201).send("YEEEEYY USER ADDED")
    })
})


app.post("/createPost",(req,res)=>{
    const q=`INSERT INTO post (content,user_iduser) VALUES ("${req.body.content}","${req.body.user_iduser}")`;
    connection.query(q,(err,response)=>{
        if(err) throw (err);
        res.status(201).send("YEEEEYY post ADDED")
    })
})

app.get("/getIdUser/:nameuser",(req,res)=>{
    const q=`SELECT iduser FROM user WHERE nameuser=${req.params.nameuser}`
    connection.query(q,(err,response)=>{
        res.status(200).send(response)
    })
})

app.delete("/deletePost/:idPost",(req,res)=>{
    const q=`DELETE FROM post WHERE idpost=${req.params.idPost}`
    connection.query(q,(err,response)=>{
        res.status(200).send("yesss deletedd")
    })
})

app.get("/getPostFilter/:hobbies",(req,res)=>{
    const q=`SELECT * FROM user WHERE hobbiesuser="${req.params.hobbies}"`
    connection.query(q,(err,response)=>{
        res.status(200).send(response)
    })
})

app.put("/updateUser/:nameuser",(req,res)=>{
    const q=`UPDATE user SET hobbiesuser="${req.body.hobbies}" WHERE nameuser="${req.params.nameuser}"`
    connection.query(q,(err,response)=>{
        if (err) throw err;
        res.status(200).send("yesss UPDATED")
    })
})


app.listen(PORT,()=>{
    console.log(`http://localhost:${PORT}`);
})