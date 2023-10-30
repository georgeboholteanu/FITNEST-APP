import express from "express";
import cors from "cors";
import morgan from "morgan";
import bodyParser from "body-parser";
import connect from "./database/connect.js";
import router from "./router/route.js";
import basicAuth from "basic-auth";
import dotenv from "dotenv";

dotenv.config();

/** Create an instance of Express */
const app = express();
const port = process.env.PORT || 8000;

/** middlewares */
app.use(express.json());
app.use(morgan("tiny"));
app.disable("x-powered-by"); // Less hackers know about current stack
app.use(bodyParser.json());
app.use(cors(
	{
		origin: ["fitnest.vercel.app"],
		methods: ["POST", "GET"],
		credentials: true
	}
));

// Middleware to extract basic authentication credentials
const requireBasicAuth = (req, res, next) => {
	const credentials = basicAuth(req);

	if (
		!credentials ||
		credentials.name !== process.env.BASIC_AUTH_USERNAME ||
		credentials.pass !== process.env.BASIC_AUTH_PASSWORD
	) {
		res.setHeader("WWW-Authenticate", 'Basic realm="Secure Area"');
		return res.status(401).send("Authentication required");
	}

	// If the credentials match, continue to the next middleware
	next();
};

/** API routes */
// Apply basic authentication middleware for the /api/users endpoint and sub-routes
app.use("/api/users", requireBasicAuth);
app.use("/api", router);

/** Start server */
connect() // Call the connect function to establish database
	.then(() => {
		// Start the server only when the database is connected
		app.listen(port, (err) => {
			if (err) {
				console.error("Error starting the server:", err);
			} else {
				// console.log("Current Working Directory:", process.cwd());
				console.log(`Server running on http://localhost:${port}`);
			}
		});
	})
	.catch((err) => {
		console.error("Error connecting to the database:", err);
	});
