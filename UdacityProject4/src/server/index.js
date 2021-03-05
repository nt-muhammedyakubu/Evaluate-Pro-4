const dotenv = require('dotenv');
dotenv.config();

var path = require('path')
const express = require('express');
const mockAPIResponse = require('./mockAPI.js');
const bodyParser = require('body-parser')
const cors = require('cors');
const { handleSubmitForMeaningCloud } = require('../client/js/formHandler.js');

// Credentials for the api
var textAPI = new meaningcloud({
    application_key: process.env.API_Key
});

// Creating an instance of the app
const app = express();

app.use(cors());
app.use(bodyParser.json())

app.use(bodyParser.urlencoded({ extended: false }))
app.use(express.static('dist'));

// Request
app.get('/', function(req, res) {
    // res.sendFile('dist/index.html')
    res.sendFile('dist/index.html');
});

// designates what port the app will listen to for incoming requests
const port = 8080;
app.listen(port, function() {
    console.log(`Evaluate NLP app's server listening on port ${port}!`);
});

// Post
app.post('/api', (req, res) => {
    const text = req.body;
    console.log("Request to '/api' endpoint", text);
    textAPI.sentiment(text, (error, result, remaining) => {
        if (error) console.log(error);
        console.log("MeaningCloud callback Response and Remaining request available", result, remaining);
        res.send(result);
    });
});