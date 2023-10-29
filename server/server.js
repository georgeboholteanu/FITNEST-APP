import express from "express";
import cors from "cors";
import morgan from "morgan";
import bodyParser from "body-parser";
import connect from "./database/database.js"; // Import the connect function
import router from "./router/route.js";

// import authRoutes from "./routes/auth.js";
// import usersRoutes from "./routes/users.js";

const app = express();

/** middlewares */
app.use(express.json());
app.use(cors());
app.use(morgan("tiny"));
app.disable("x-powered-by"); // Less hackers know about our stack

const port = process.env.PORT;
const host = process.env.HOST;

app.use(bodyParser.json());

/** Defining routes */
// app.use("/api/auth", authRoutes);
// app.use("/api/users", usersRoutes);

/** HTTP GET Request */
app.get("/", (req, res) => {
	res.status(201).json("Home GET Request");
});

/** API routes */
app.use("/api", router);

/** start server */
connect() // Call the connect function to establish database
	.then((db) => {
		// Start the server only when the database is connected
		app.listen(port, (err) => {
			if (err) {
				console.error("Error starting the server:", err);
			} else {
				console.log(`Server running on http://${host}:${port}`);
			}
		});
	})
	.catch((err) => {
		console.error("Error connecting to the database:", err);
	});
