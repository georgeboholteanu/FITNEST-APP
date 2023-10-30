import { Router } from "express";
import "dotenv/config";

/** import all controllers */
import * as controller from "../controllers/appController.js";

const router = Router();

/** POST Methods */
router.post("/register", controller.register);
router.post("/registerEmail", controller.registerEmail);
router.post("/authentificate", (req, res) => res.end());
router.post("/message", controller.login);

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
