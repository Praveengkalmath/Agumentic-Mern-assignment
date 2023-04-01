const express = require('express')
const cors = require('cors')
const app = express()
const PORT = 4000

//require database models
const user= require ('./models/users')


const mongoose = require('mongoose')
mongoose.set('strictQuery', false)

//middlewears
app.use(express.json())
app.use(express.urlencoded({ extended: false }))
app.use(cors())  //cross origin  resourse sharing


const dbURL = "mongodb://localhost:27017/maldeevs"
mongoose.connect(dbURL).then(() => {
    console.log("connected to database")
})

app.post('/addpost',async(req,res)=>{
    let postData = new Post({
        author:req.body.author,
        title:req.body.title,
        summery:req.body.summery,
        image:req.body.image,
       location:req.body.location
    })
    try {
        await postData.save()
        res.send({message:"Post added successfully"})
    } catch (err) {
        res.send({message:"Failed to post the data"})
    }
})
app.get('/posts',async (req,res)=>{
    try {
        const posts =await Post.find()
        res.json(posts)
    } catch (err) {
        console.log(err)
    }
})

//fetching single post based on the id 
app.get('/posts/:id', async (req,res)=>{
    const {id}=req.params
    try {
        const singlePost =await Post.findById(id)
        res.send(singlePost)
    } catch (err) {
        res.send(err)
    }
})


app.listen(PORT, () => {
    console.log(`listening to server ${PORT}`)
})