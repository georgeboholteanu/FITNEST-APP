import express from 'express';
import UserX from '../models/UserX.js';

const router = express.Router();

// Route to get all users
router.get('/', async (req, res) => {
    try {
      const users = await UserX.findAll();
      res.status(200).json(users);
    } catch (error) {
      console.error(error);
      res.status(500).json({ message: 'Internal server error' });
    }
  });

router.post('/', (req, res) => {
  // Implement user creation logic here
  res.send('User created')
});

export default router;
