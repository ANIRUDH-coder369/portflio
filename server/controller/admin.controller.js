const bcrypt = require('bcryptjs');
const jwt = require('jsonwebtoken');
const Admin = require('../model/admin.model.js')

exports.adminLogin = async (req, res) => {
    try {
        const { email, password } = req.body;

        // 1. Validate input
        if (!email || !password) {
            return res.status(400).json({
                success: false,
                message: 'Email and password are required'
            });
        }

        // 2. Find admin
        const result = await Admin.findOne({ email });

        if (!result) {
            return res.status(401).json({
                success: false,
                message: 'Invalid email or password'
            });
        }

        // 3. Verify password
        const verify = await bcrypt.compare(
            password,
            result.password
        );

        if (!verify) {
            return res.status(401).json({
                success: false,
                message: 'Invalid email or password'
            });
        }

        // 4. Generate JWT token
        const token = jwt.sign(
            { _id: result._id },
            process.env.JWT_KEY,
            { expiresIn: '1d' }
        );

        // 5. Store token in secure cookie
        res.cookie('ADMIN_TOKEN', token, {
            httpOnly: true,
            secure: process.env.NODE_ENV === 'production',
            sameSite: 'lax',
            maxAge: 1000 * 60 * 60 * 24,
            path: '/'
        });

        // 6. Send success response
        return res.status(200).json({
            success: true,
            message: 'Login successful',
            result: {
                email: result.email
            }
        });

    } catch (error) {
        console.error('Admin login error:', error);

        return res.status(500).json({
            success: false,
            message: 'Admin login failed'
        });
    }
};

exports.adminLogout = async (req, res) => {
    try {
        res.clearCookie('ADMIN_TOKEN')
        res.status(200).json({ message: "admin logout success" })
    } catch (error) {
        console.log(error);
        res.status(400).json({ message: 'admin logout fail' })
    }
}