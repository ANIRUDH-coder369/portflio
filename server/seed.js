require('dotenv').config({ path: './../.env' })

const mongoose = require('mongoose')
const Admin = require('./model/admin.model.js')
const bcrypt = require('bcryptjs')

exports.seedadmin = async () => {
    try {
        await mongoose.connect(process.env.MONGO_URL)
        console.log('db connected');

        const result = await Admin.findOne({ role: 'admin' })

        if (result) {
            console.log('admin already present');
            process.exit(1)
        }

        const hash = await bcrypt.hash(process.env.ADMIN_PASS, 10)
        await Admin.create({
            email: process.env.ADMIN_EMAIL,
            password: hash
        })
        console.log('admin seed success');
        process.exit(1)
    } catch (error) {
        console.log(error);
        process.exit(1)
    }
}