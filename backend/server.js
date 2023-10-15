import express from "express";
import bodyParser from "body-parser";
import cors from "cors";
import authRoutes from "./routes/auth.js";
import usersRoutes from "./routes/users.js";

const app = express();
const port = process.env.PORT || 3000;
const host = process.env.HOST || "0.0.0.0";

app.use(cors());
app.use(bodyParser.json());

// Define routes
app.use("/api/auth", authRoutes);
// app.use("/api/register", usersRoutes);
app.use("/api/users", usersRoutes);

app.listen(port, host, (err) => {
	if (err) throw new Error();
	console.log("Express server listening on port " + port);
});
