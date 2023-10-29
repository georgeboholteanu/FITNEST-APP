import express from "express";
import cors from "cors";
import morgan from "morgan";
import bodyParser from "body-parser";
import connect from "./database/database.js"; 
import router from "./router/route.js";
import basicAuth from "basic-auth";

/** Create an instance of Express */
const app = express();

/** middlewares */
app.use(express.json());
app.use(cors());
app.use(morgan("tiny"));
app.disable("x-powered-by"); // Less hackers know about current stack

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

const port = process.env.PORT;
const host = process.env.HOST;

app.use(bodyParser.json());

/** HTTP GET Request */
app.get("/", (req, res) => {
	res.status(201).json("Home GET Request");
});

/** API routes */
// Apply basic authentication middleware for the /api/users endpoint and sub-routes
app.use("/api/users", requireBasicAuth);
app.use("/api", router);

/** Start server */
connect() // Call the connect function to establish database
	.then((db) => {
		// Start the server only when the database is connected
		app.listen(port, (err) => {
			if (err) {
				console.error("Error starting the server:", err);
			} else {
				// console.log("Current Working Directory:", process.cwd());
				console.log(`Server running on http://${host}:${port}`);
			}
		});
	})
	.catch((err) => {
		console.error("Error connecting to the database:", err);
	});
