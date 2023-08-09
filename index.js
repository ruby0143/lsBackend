var express = require('express');
var cors = require('cors');
const mongoose = require("mongoose");
const bodyParser = require("body-parser");

// mongoose.connect("mongodb+srv://ruby07:8074662205s@cluster0.97u8x.mongodb.net/hostelDb",{useNewUrlParser:true});

let app = express();
app.use(bodyParser.urlencoded({ extended: true }));
app.use(express.json());
app.use(cors());

app.post("/assess",(req,res)=>{
    console.log(req.body.results[0].value);
    res.send(req.body.results[0].value);
})

app.get('/',function(req,res){
    res.send("Server is running...")
})



app.listen(3000 || process.env.PORT, function(){
    console.log("Server started on port 3000");
});