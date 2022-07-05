//Mongo DB Atlas connection

const mongoose = require("mongoose");
const db_uri = process.env.db_uri;

mongoose.connect(db_uri, (err) => {
    err ? console.log(err) : console.log("Mongo Atlas Connected");
})