const express = require('express');
// const router = express.Router();
const mongoose = require("mongoose");
const cors = require('cors');
const app = express();

// DB Connection
require('./database');

const PORT = process.env.PORT || 5000;

app.use(cors()); 

app.get('/', (req, res) => {
    res.send('Hello World');
});

const schema = mongoose.Schema({
        name: String,
        age: Number
    });
const Model = mongoose.model("model", schema, "myCollection");

app.get('/testDBInsert/:name', (req, res) => {
    const doc1 = new Model({ name: req.params.name, age: 21 });
    doc1.save(function(err, doc) {
        if (err) {
            res.send(err);
        }else {
            res.send(`Document inserted succussfully: ${req.params.name}`);
        }
    });
});

app.get('/testDBlookup/:name', async (req, res) => {
    const doc = await Model.findOne({ name: req.params.name }).exec();
    res.send(doc);
});

app.get('/testAPI', (req, res) => {
    res.send('API Works!');
});

app.listen(PORT, () => {
    console.log(`Listening on port ${PORT} at http://localhost:${PORT}`);
});