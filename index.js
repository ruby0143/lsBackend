var express = require('express');
var cors = require('cors');
const mongoose = require("mongoose");
const bodyParser = require("body-parser");

mongoose.connect("mongodb+srv://ruby07:8074662205s@cluster0.97u8x.mongodb.net/hostelDb",{useNewUrlParser:true});

let app = express();
app.use(bodyParser.urlencoded({ extended: true }));
app.use(express.json());
app.use(cors());

const resultSchema  = {
    name : String,
    email : String,
    results : Array
}

const Results = new mongoose.model("Result",resultSchema);

app.post("/assess",(req,res)=>{
    console.log(req.body.results,"ok");
    // res.send(req.body.results[0].value);
    const body = {
        name : req.body.name,
        email : req.body.email,
        results : req.body.results
    }
    console.log(body,"ok");
    const newItem = new Results(body);
    newItem.save().then(doc=>res.status(200).json({message : doc}));
})

app.get('/',function(req,res){
    res.send("Server is running...")
})



app.listen(3000 || process.env.PORT, function(){
    console.log("Server started on port 3000");
});
// 216.24.57.253