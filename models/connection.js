require("dotenv").config()
const mongoose = require('mongoose')

//////////////////////////////
// Database connection
//////////////////////////////
const DATABASE_URL = process.env.DATABASE_URL
const CONFIG = {
    useNewUrlParser: true,
    useUnifiedTopology: true
}

// Establish connection
mongoose.connect(DATABASE_URL, CONFIG)

mongoose.connection
    .on('open', () => console.log('We are in the building'))
    .on('close', () => console.log('Closed connection'))
    .on('error', (error) => console.log(error))

module.exports = mongoose