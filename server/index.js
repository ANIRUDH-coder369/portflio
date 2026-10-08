require('dotenv').config({})

const express = require('express')
const mongoose = require('mongoose')
const cors = require('cors')
const cookie = require('cookie-parser')

const app = express()

mongoose.connect(process.env.MONGO_URL)

app.use(express.json())
app.use(cookie())

app.use(cors({
    origin: 'http://localhost:3000',
    credentials: true
}))


app.use('/api/admin', require('./routes/admin.routes.js'))


const PORT = process.env.PORT || 5000

mongoose.connection.once('open', () => {
    console.log('db connected');
    app.listen(PORT, () => {
        console.log(`server running on http://localhost:${PORT}`);
    })
})

module.exports = app
