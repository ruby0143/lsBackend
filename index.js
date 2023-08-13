var express = require('express');
var cors = require('cors');
const mongoose = require("mongoose");
const bodyParser = require("body-parser");
const QuickChart = require('quickchart-js');
const nodemailer = require("nodemailer");
const dotenv = require('dotenv');
const utils = require("./utils") 
dotenv.config()

const mongoUrl = `mongodb+srv://${process.env.MONGO_USER}:${process.env.MONGO_PASS}@cluster0.97u8x.mongodb.net/hostelDb`

mongoose.connect(mongoUrl, { useNewUrlParser: true });

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
    const resultant = req.body.results;
    const xAxis = parseInt(resultant[0].value.pts) + parseInt(resultant[1].value.pts) ;
    const yAxis = parseInt(resultant[2].value.pts) + parseInt(resultant[3].value.pts);
    const toEmail = req.body.email;
    const recName = req.body.name;

    // console.log(req.body.results, "ok");
    // res.send(req.body.results[0].value);
    // const body = {
    //     name: req.body.name,
    //     email: req.body.email,
    //     results: resultant
    // }
    // console.log(body, "ok");
    // const newItem = new Results(body);
    // newItem.save().then(doc => res.status(200).json({ message: doc }));
    // console.log(xAxis,yAxis);

    const myChart = new QuickChart();
    myChart
        .setConfig({
            type: 'scatter',
            data: {
                labels: [0, 5, 10, 15, 20],
                datasets: [
                    {
                        data: [{ x: xAxis, y: yAxis }],
                        pointBackgroundColor: '#D70040',
                        pointBorderColor: '#D70040',
                    }]
            },
            options: {
                legend: {
                    display: false,
                },
                scales: {
                    yAxes: [
                        {
                            ticks: {
                                min: 0,
                                max: 20,
                                stepSize: 5,
                            },
                            scaleLabel: {
                                display: true,
                                fontSize: 10,
                                fontStyle: 'bold',
                                labelString: 'Visualization',
                            },
                        },
                    ],
                    xAxes: [
                        {
                            ticks: {
                                min: 0,
                                max: 20,
                                stepSize: 5,
                            },
                            scaleLabel: {
                                display: true,
                                fontSize: 10,
                                fontStyle: 'bold',
                                labelString: 'Actualization',
                            },
                        },

                    ],

                }
            }
        })
        .setWidth(200)
        .setHeight(200)

    const chartImageUrl = myChart.getUrl();

    const message = utils.constructMailBody(recName,xAxis,yAxis,chartImageUrl);

    const transporter = nodemailer.createTransport({
        host: "smtp.gmail.com",
        port: 465,
        secure: true,
        auth: {
            // TODO: replace `user` and `pass` values from <https://forwardemail.net>
            user: `${process.env.GMAIL_USER}`,
            pass: `${process.env.GMAIL_PASS}`
        }
    });

    const options = {
        from: 'mysoresriharsha07@gmail.com', // sender address
        to: toEmail, // list of receivers
        subject: "NxGen Personality Assessment", // Subject line
         // plain text body
        html: message,
    }

    transporter.sendMail(options, function (err, info) {
        if (err) {
            console.log(err);
            return;
        }
        console.log(info);
    })

})

app.get('/', function (req, res) {

    res.send("Sever is running");
})



app.listen(3000 || process.env.PORT, function () {
    console.log("Server started on port 3000");
});
// 216.24.57.253