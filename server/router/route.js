import { Router } from "express";
import UserModelFn from "../models/UserModel.js";
import jwt from "jsonwebtoken";
import bcrypt from "bcrypt";
import basicAuth from "basic-auth";
import dotenv from "dotenv";

// Load environment variables from .env file
dotenv.config();

const router = Router();
const JWT_SECRET_KEY = process.env.JWT_SECRET_KEY;
const BASIC_AUTH_USERNAME = process.env.BASIC_AUTH_USERNAME
const BASIC_AUTH_PASSWORD = process.env.BASIC_AUTH_PASSWORD


// Generate a JWT token
function createToken(user) {
	const payload = {
		userId: user.user_id,
		email: user.email,
	};

	return jwt.sign(payload, JWT_SECRET_KEY, { expiresIn: "1h" });
}

/** POST Methods */

/** Login route */
router.post("/login", async (req, res) => {
	const { email, password } = req.body;

	try {
		const UserModel = await UserModelFn(); // Call the function to get the model
		const user = await UserModel.findOne({ where: { email } });

		if (!user) {
			return res
				.status(401)
				.json({ message: "Authentication failed. User not found." });
		}

		// Use bcrypt to compare the password
		const isPasswordValid = await bcrypt.compare(password, user.password);

		if (!isPasswordValid) {
			return res.status(401).json({
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

/** Register route */
router.post("/register", async (req, res) => {
	const { first_name, last_name, email, password } = req.body;

	try {
		const UserModel = await UserModelFn(); // Call the function to get the model
		const existingUser = await UserModel.findOne({ where: { email } });

		if (existingUser) {
			return res.status(400).json({ message: "Email already exists" });
		}

		// Hash the user's password
		const hashedPassword = await bcrypt.hash(password, 10);

		// Create a new user
		try {
			const UserModel = await UserModelFn();
			const newUser = await UserModel.create({
				first_name,
				last_name,
				email,
				password: hashedPassword,
			});
			return res.status(201).json({
				message: "User registered successfully",
				user: newUser,
			});
		} catch (error) {
			console.error("User registration error:", error);
			if (error.name === "SequelizeUniqueConstraintError") {
				return res
					.status(400)
					.json({ message: "Email already exists" });
			} else {
				return res.status(500).json({ message: "Registration failed" });
			}
		}
	} catch (error) {
		console.error(error);
		res.status(500).json({ message: "Internal server error" });
	}
});

/** GET Methods */
router.get("/", async (req, res) => {
	// Use basic-auth to extract username and password from request headers
	const credentials = basicAuth(req);
  
	if (!credentials || credentials.name !== BASIC_AUTH_USERNAME || credentials.pass !== BASIC_AUTH_PASSWORD) {
	  // If the provided username and password do not match, send a 401 Unauthorized response
	  res.setHeader("WWW-Authenticate", 'Basic realm="Secure Area"');
	  return res.status(401).send("Authentication required");
	}
  
	try {
	  const UserModel = await UserModelFn(); // Call the function to get the model
	  const users = await UserModel.findAll();
	  res.status(200).json(users);
	} catch (error) {
	  console.error(error);
	  res.status(500).json({ message: "Internal server error" });
	}
  });

export default router;
