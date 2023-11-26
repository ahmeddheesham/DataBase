const express = require('express')
const bodyParser = require("body-parser") 
const mongoose = require('mongoose')
const carSchema = require('./car.schema')
const URL = "mongodb+srv://ahmeddheesham:Ah12345@brngit.ba0zymo.mongodb.net/Brngit?retryWrites=true&w=majority"
const app = express()

app.use(bodyParser.json()) 

const connectDB = async () => {
    try {
        mongoose.set('strictQuery', false)
        mongoose.connect(URL)
        console.log("Connected to Monog DB")
    } catch (err) {
        console.log(err)
        process.exit()
    }

}
connectDB()






// let cars = [{"Model": 'BMW' , color: "red" , year: 2022} ]

app.get('/cars', async function(req,res){
    const cars = await carSchema.find()
    res.json({"cars": cars , "status":200})
})

app.post('/cars', async function(req,res){
    let car = await carSchema.create(req.body)
    res.json({status: 200, message: "Car added succsessfully" , car:car })
})

app.put('/cars/:id', async function(req,res){
    let id = req.params.id
    await carSchema.findByIdAndUpdate(id,req.body)
    res.json({message: "Car updated", status:200})
})


app.delete('/cars/:id', async function(req,res){
    let id = req.params.id
    await carSchema.findByIdAndDelete(id)
    res.json({message: "Car Deleted", status:200})
})








app.listen(3000)