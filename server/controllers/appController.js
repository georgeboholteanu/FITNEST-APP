import UserSchema from "../models/UserModel.js";
import bcrypt from "bcrypt";
import jwt from "jsonwebtoken";
import dotenv from "dotenv";

/** Load environment variables from .env file */
dotenv.config();

/** POST: http://localhost:8000/api/register
 * @param : {
 * "first_name" : "user",
 * "last_name" : "123",
 * "email" : "user123@gmail.com",
 * "password" : "user123"
 * }
 */
export async function register(req, res) {
	try {
		const { first_name, last_name, email, password } = req.body;

		const UserModel = await UserSchema(); // Call the function to get the model
		const existingUser = await UserModel.findOne({ where: { email } });

		if (existingUser) {
			return res.status(400).json({ message: "Email already exists" });
		}

		// Hash the user's password
		const hashedPassword = await bcrypt.hash(password, 10);

		// Create a new user
		try {
			const UserModel = await UserSchema();
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

		// // check for existing email
		// const existEmail = new Promise((resolve, reject) => {
		// 	UserModel.findOne(where: { email }, function (err, email) {
		// 		if (err) reject(new Error(err));
		// 		if (email) reject({ error: "Please use unique email" });

		// 		resolve();
		// 	});
		// });

		// Promise.all([existEmail])
		// 	.then(() => {
		// 		if (password) {
		// 			bcrypt
		// 				.hash(password, 10)
		// 				.then((hashedPassword) => {
		//                     const UserModel = new UserSchema();

		// 					const newUser = new UserModel.create({
		// 						first_name,
		// 						last_name,
		// 						email,
		// 						password: hashedPassword,
		// 					});

		// 					// return saved result as a response
		// 					return res
		// 						.status(201)
		// 						.json({
		// 							message: "User registered successfully",
		// 							user: newUser,
		// 						})
		// 						.catch((error) =>
		// 							res.status(500).send({ error })
		// 						);
		// 				})
		// 				.catch((error) => {
		// 					return res.status(500).send({
		// 						error: "Enable to hashed password",
		// 					});
		// 				});
		// 		}
		// 	})
		// 	.catch((error) => {
		// 		return res.status(500).send({ error });
		// 	});
	} catch (error) {
		return res.status(500).send(error);
	}
}

/** POST: http://localhost:8000/api/registerEmail
 * @param : {
 * "first_name" : "user",
 * "last_name" : "123",
 * "email" : "user123@gmail.com",
 * "password" : "user123"
 * }
 */
export async function registerEmail(req, res) {
	res.json("register email route");
}

/** POST: http://localhost:8000/api/login
 * @param : {
 * "email" : "user123@gmail.com",
 * "password" : "user123"
 * }
 */
export async function login(req, res) {
	const { email, password } = req.body;

	try {
		// Function to generate a JWT token
		const createToken = (user) => {
			const payload = {
				userId: user.id,
				email: user.email,
			};

			return jwt.sign(payload, process.env.JWT_SECRET_KEY, {
				expiresIn: "1h",
			});
		};

		const UserModel = await UserSchema(); // Call the function to get the model
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
		res.status(500).json(error);
	}
}

/** GET: http://localhost:8000/api/generateOTP */
export async function generateOTP(req, res) {
	res.json("generateOTP route");
}

/** GET: http://localhost:8000/api/verifyOTP */
export async function verifyOTP(req, res) {
	res.json("verifyOTP route");
}

// successfully redirect user when OTP is valid otherwise redirect to reset password
/** GET: http://localhost:8000/api/createResetSession */
export async function createResetSession(req, res) {
	res.json("createResetSession route");
}

// update the password when we have a valid session
/** PUT: http://localhost:8000/api/resetPassword */
export async function resetPassword(req, res) {
	res.json("resetPassword route");
}
