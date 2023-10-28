import express from "express";
import UserX from "../models/UserX.js";
import jwt from "jsonwebtoken";
import bcrypt from "bcrypt"
import dotenv from 'dotenv';

// Load environment variables from .env file
dotenv.config();

const router = express.Router();
const JWT_SECRET_KEY = process.env.JWT_SECRET_KEY;

// Function to generate a JWT token
function createToken(user) {
	const payload = {
		userId: user.id,
		email: user.email,
	};

	return jwt.sign(payload, JWT_SECRET_KEY, { expiresIn: "1h" });
}

// Authentication route
router.post("/login", async (req, res) => {
	const { email, password } = req.body;

	try {
		const user = await UserX.findOne({ where: { email } });

		if (!user) {
			return res
				.status(401)
				.json({ message: "Authentication failed. User not found." });
		}

		// Use bcrypt to compare the password
		const isPasswordValid = await bcrypt.compare(password, user.password);

		if (!isPasswordValid) {
			return res
				.status(401)
				.json({
					message: "Authentication failed. Incorrect password.",
				});
		}

		// If the user and password are valid, create a token
		const token = createToken(user);

		// Respond with a success message and token
		res.status(200).json({
			message: "Authentication successful",
			user: user,
			token: token,
		});
	} catch (error) {
		console.error(error);
		res.status(500).json({ message: "Internal server error" });
	}
});

export default router;
