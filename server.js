const express = require('express')
const app = express()
const fetch = require('node-fetch');
var bodyParser = require('body-parser');
var cors = require('cors')
var mongodb = require('mongodb');
const port = 3000
const path = require('path')
const Json2csvParser = require("json2csv").Parser;
const fs = require("fs");

app.use(bodyParser.json())
app.use(cors())
app.use(bodyParser.urlencoded({ extended: true }));
app.use(express.static(path.join(__dirname, './quiz2/dist/quiz2')))

const { MongoClient } = require("mongodb");

// atlas connection string                                                                                                                                        
const url = "mongodb+srv://dbUserAnya:Zrv3X27vB2XtHHIA@cluster0.nxqx9.mongodb.net/myFirstDatabase?retryWrites=true&w=majority";

// app.get('/', (req, res) => {
//     // res.send('Hello world!')
// })

// Code reused from what I wrote for lab6 (I didn't want to reinvent the wheel lol)
function dbjson2csv(file, query, collection) {
    mongodb.connect(
        url,
        { useNewUrlParser: true, useUnifiedTopology: true },
        (err, client) => {
            if (err) throw err;
            client
                .db("WebSci")
                .collection(collection)
                .find({}).project(query)
                .toArray((err, data) => {

                    if (err) throw err;

                    console.log(data);
                    const json2csvParser = new Json2csvParser({ header: true });
                    const csvData = json2csvParser.parse(data);

                    fs.writeFile("quiz2/src/assets/csv-files/" + file, csvData, function (error) {
                        if (error) throw error;
                        console.log("Write to " + file + " successfully!");
                    });

                    client.close();
                });
        }
    );
}

app.get('/solar-viz', function (req, res) {
    dbjson2csv("solar.csv", {}, "solar");
    console.log("solar eclipse data file has been created and is downloading!");
    const file = 'quiz2/src/assets/csv-files/solar.csv';
    res.download(file);
});

app.get('/lunar-viz', function (req, res) {
    dbjson2csv("lunar.csv", {}, "lunar");
    console.log("lunar eclipse data file has been created and is downloading!");
    const file = 'quiz2/src/assets/csv-files/lunar.csv';
    res.download(file);
});

app.post('/recommendation', function (req, res) {
    MongoClient.connect(url, function (err, db) {
        if (err) throw err;
        var dbo = db.db("WebSci");

        dbo.collection("recommendation").insertOne(req.body, function (err) {
            if (err) throw err;
            //console.log(result[0].customDefinitions);
            console.log("data recieved");
            db.close();
        });
        // res.send('Data received:\n' + JSON.stringify(req.body));
        res.redirect("http://localhost:3000")
    });
});

app.get('/view-recommendation', function (req, res) {
    MongoClient.connect(url, function (err, db) {
        if (err) throw err;
        var dbo = db.db("WebSci");

        dbo.collection("recommendation").find({}).toArray(function (err, recommendation) {
            if (err) throw err;
            console.log(recommendation);
            db.close();
            // res.status(200).json(recommendation);
            res.redirect("http://localhost:3000/")
        })
    })
});
app.listen(port, () => {
    console.log('Listening on *:3000')
})