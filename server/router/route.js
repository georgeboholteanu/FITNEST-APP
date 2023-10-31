import { Router } from "express";
import dotenv from "dotenv";

dotenv.config()

/** import all controllers */
import * as controller from "../controllers/appController.js";

const router = Router();

/** POST Methods */
router.post("/register", controller.register);
router.post("/registerEmail", controller.registerEmail);
router.post("/authentificate", (req, res) => res.end());
router.post("/login", controller.login);


/** GET Methods */
router.get("/testServer", controller.testServer);
router.get("/users", controller.getUsers);
router.get("/", controller.serverWelcome);


export default router;
