import { Router } from "express";
import UserSchema from "../models/UserModel.js";
import jwt from "jsonwebtoken";
import bcrypt from "bcrypt";
import dotenv from "dotenv";

/** import all controllers */
import * as controller from "../controllers/appController.js"

/** Load environment variables from .env file */
dotenv.config();

const router = Router();
const JWT_SECRET_KEY = process.env.JWT_SECRET_KEY;
const BASIC_AUTH_USERNAME = process.env.BASIC_AUTH_USERNAME;
const BASIC_AUTH_PASSWORD = process.env.BASIC_AUTH_PASSWORD;

/** Generate a JWT token */
function createToken(user) {
	const payload = {
		userId: user.user_id,
		email: user.email,
	};

	return jwt.sign(payload, JWT_SECRET_KEY, { expiresIn: "1h" });
}

/** POST Methods */
router.post("/register", controller.register);
router.post("/registerEmail", controller.registerEmail);
router.post("/authentificate", (req, res) => res.end());
router.post("/login", controller.login);

/** GET Methods */
// router.get("/user/:username", controller.getUser);
// router.get("/generateOTP", controller.generateOTP);
// router.get("/verifyOTP", controller.verifyOTP);
// router.get("/createResetSession", controller.createResetSession);

// /** PUT Methods */
// router.put("updateuser", controller.updateuser);
// router.put("resetPassword", controller.resetPassword);


/** GET Methods */
// router.get("/users", async (req, res) => {
// 	try {
// 		const UserModel = await UserSchema();
// 		const users = await UserModel.findAll();
// 		res.status(200).json(users);
// 	} catch (error) {
// 		console.error(error);
// 		res.status(500).json({ message: "Internal server error" });
// 	}
// });

export default router;
