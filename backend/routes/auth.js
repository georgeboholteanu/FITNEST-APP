
import express from 'express';
import UserX from '../models/UserX.js';

const router = express.Router();

// Authentication route
router.post('/login', async (req, res) => {
  const { email, password } = req.body;

  try {
    const user = await UserX.findOne({ where: { email } });

    if (!user) {
      return res.status(401).json({ message: 'Authentication failed. User not found.' });
    }

    // Implement your password comparison logic here, you might use a library like bcrypt
    const isPasswordValid = user.password === password;

    if (!isPasswordValid) {
      return res.status(401).json({ message: 'Authentication failed. Incorrect password.' });
    }

    // If the user and password are valid, create a token or set a session here
    // const token = createToken(user);

    // Respond with a success message or token
    res.status(200).json({ message: 'Authentication successful', user: user });
  } catch (error) {
    console.error(error);
    res.status(500).json({ message: 'Internal server error' });
  }
});

export default router;
