import express from 'express';
import UserX from '../models/UserX.js';

const router = express.Router();

router.post('/register', async (req, res) => {
    const { first_name, last_name, email, password } = req.body;

    try {
        const user = await UserX.findOne({ where: { email } })

        if (user) {
            return res.status(401).json({ message: 'Registration failed. Email already registered.' });
        }
    }
});
