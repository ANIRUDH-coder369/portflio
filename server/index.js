require('dotenv').config({})

const express = require('express')
const mongoose = require('mongoose')
const cors = require('cors')
const cookie = require('cookie-parser')

const app = express()

if (process.env.MONGO_URL) {
    mongoose.connect(process.env.MONGO_URL)
}

app.use(express.json())
app.use(cookie())

const allowedOrigins = [
    'http://localhost:3000',
    'https://portflio-6pt8.vercel.app',
    process.env.CLIENT_URL
].filter(Boolean)

app.use(cors({
    origin: (origin, callback) => {
        if (!origin || allowedOrigins.includes(origin)) {
            return callback(null, true)
        }
        return callback(null, true)
    },
    credentials: true
}))

// Root route to prevent "Cannot GET /" on Vercel
app.get('/', (req, res) => {
    res.status(200).json({
        message: 'Portfolio Backend API is running successfully!',
        status: 'online',
        clientUrl: 'https://portflio-6pt8.vercel.app',
        endpoints: {
            adminLogin: 'POST /api/admin/adminLogin',
            adminLogout: 'POST /api/admin/adminLogout'
        }
    })
})

app.use('/api/admin', require('./routes/admin.routes.js'))

const PORT = process.env.PORT || 5000

if (process.env.MONGO_URL) {
    mongoose.connection.once('open', () => {
        console.log('db connected')
        app.listen(PORT, () => {
            console.log(`server running on http://localhost:${PORT}`)
        })
    })
} else {
    app.listen(PORT, () => {
        console.log(`server running on http://localhost:${PORT}`)
    })
}

module.exports = app

