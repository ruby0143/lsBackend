var express = require('express');
var cors = require('cors');
const mongoose = require("mongoose");
const bodyParser = require("body-parser");
const QuickChart = require('quickchart-js');
const nodemailer = require("nodemailer");

mongoose.connect("mongodb+srv://ruby07:8074662205s@cluster0.97u8x.mongodb.net/hostelDb", { useNewUrlParser: true });

let app = express();
app.use(bodyParser.urlencoded({ extended: true }));
app.use(express.json());
app.use(cors());


const resultSchema = {
    name: String,
    email: String,
    results: Array
}

const Results = new mongoose.model("Result", resultSchema);

app.post("/assess", (req, res) => {
    console.log(req.body.results, "ok");
    // res.send(req.body.results[0].value);
    const body = {
        name: req.body.name,
        email: req.body.email,
        results: req.body.results
    }
    console.log(body, "ok");
    const newItem = new Results(body);
    newItem.save().then(doc => res.status(200).json({ message: doc }));
})

app.get('/', function (req, res) {


    const myChart = new QuickChart();
    myChart
        .setConfig({
            type: 'bar',
            data: { labels: ['Hello world', 'Foo bar'], datasets: [{ label: 'Foo', data: [1, 2] }] },
        })
        .setWidth(200)
        .setHeight(200)
        .setBackgroundColor('transparent');

    const chartImageUrl = myChart.getUrl();

    const message =
        `Hello, please see the chart below:
        <br><br>
        <img src=${chartImageUrl} />
        `;

    const transporter = nodemailer.createTransport({
        host: "smtp.gmail.com",
        port: 465,
        secure: true,
        auth: {
            // TODO: replace `user` and `pass` values from <https://forwardemail.net>
            user: 'mysoresriharsha07@gmail.com',
            pass: 'ctojvwubeyqflxmz'
        }
    });

    const options = {
        from: 'mysoresriharsha07@gmail.com', // sender address
        to: "mysoresriharsha07@gmail.com", // list of receivers
        subject: "NxGen Personality Assessment", // Subject line
        text: "Hello world?", // plain text body
        html: message,
    }

    transporter.sendMail(options, function (err, info) {
        if (err) {
            console.log(err);
            return;
        }
        console.log(info);
    })

    res.send(message);
})



app.listen(3000 || process.env.PORT, function () {
    console.log("Server started on port 3000");
});
// 216.24.57.253