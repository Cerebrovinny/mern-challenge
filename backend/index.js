const express = require('express');
const mongoose = require('mongoose');
const cors = require('cors');
const morgan = require('morgan');

require('dotenv').config();

const app = express();
const port = process.env.PORT || 8080;

app.use(cors());
app.use(express.json());
app.use(express.urlencoded({ extended: true }));
app.use(morgan('dev'));

app.use(require('./routes'));

const uri = process.env.ATLAS_URI;

mongoose.connect(uri, {
    useNewUrlParser: true
});

const connection = mongoose.connection;
connection.once("open", () =>
    console.log("MongoDB connection established successfully!")
)

app.listen(port, () => console.log(`The app is running on Port: ${port}`))