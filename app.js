const express=require("express")
const app=express()

const userModel=require("./usermodel")


app.get("/",function(req,res)
{
     res.send("Hii prashant")
})


app.get("/create", async function(req,res)
{
      const userdata=await userModel.create({
        name:"Prashant",
        email:"prashant@gmail.com",
        username:"bhati"
      })


      res.send(userdata)
})

app.get("/update", async function(req,res)
{
      const updatedUserData=await userModel.findOneAndUpdate({name:"Prashant"},{email:"prashantbhati@gmail.com"}, {new:true})
      res.send(updatedUserData)
})


app.get("/read", async function(req,res)
{
      const allData=await userModel.find()    //find() saara data de deta hain and find({username:"Prashant"}) sirf wo particular dega
      res.send(allData)                       //findOne() object deta hain whereas find ek array deta hain
})

app.get("/delete", async function(req,res)
{
      const deletedData=await userModel.findOneAndDelete({username:"Prashant"})   
      res.send(deletedData)                       
})

app.listen(3000)