import express from "express";
import UserX from "../models/UserX.js";
import { Op } from "sequelize";
import bcrypt from "bcrypt"

const router = express.Router();

// Route to get all users
router.get("/", async (req, res) => {
	try {
		res.json("Welcome")
		const users = await UserX.findAll();
		res.status(200).json(users);
	} catch (error) {
		console.error(error);
		res.status(500).json({ message: "Internal server error" });
	}
});

// Route to get users by REGEX
router.get("/regex", async (req, res) => {
	try {
		const selectedUsers = await UserX.destroy({
			where: {
				email: {
					[Op.regexp]: "jsnow",
				},
			},
		});
		res.status(200).json(selectedUsers);
	} catch (error) {
		console.error(error);
		res.status(500).json({ message: "Failed to retrieve users by regex" });
	}
});

// Route to register new user
router.post("/register", async (req, res) => {
	const { first_name, last_name, email, password } = req.body;

	// Check if the email already exists
	const existingUser = await UserX.findOne({ where: { email } });

	if (existingUser) {
		return res.status(400).json({ message: "Email already exists" });
	}

	// Hash the user's password
	const hashedPassword = await bcrypt.hash(password, 10);

	// Create a new user
	try {
		const newUser = await UserX.create({
			first_name,
			last_name,
			email,
			password: hashedPassword, 
		});
		return res
			.status(201)
			.json({ message: "User registered successfully", user: newUser });
	} catch (error) {
		console.error("User registration error:", error);
		if (error.name === "SequelizeUniqueConstraintError") {
			return res.status(400).json({ message: "Email already exists" });
		} else {
			return res.status(500).json({ message: "Registration failed" });
		}
	}
});

// Route to remove users in db by REGEX
router.delete("/regex", async (req, res) => {
	try {
		const deletedUsers = await UserX.destroy({
			where: {
				email: {
					[Op.regexp]: "jsnow",
				},
			},
		});

		res.status(200).json({
			message: `Deleted ${deletedUsers} users matching the regex pattern`,
		});
	} catch (error) {
		console.error(error);
		res.status(500).json({ message: "Failed to delete users by regex" });
	}
});

// Route to create/reset database - for testing purposes
router.post("/reset", async (req, res) => {});

export default router;
