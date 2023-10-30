import { Sequelize } from "sequelize";
import dotenv from "dotenv";

dotenv.config();

const db = new Sequelize(process.env.DB_URI, {
	dialect: "mysql",
});

async function connect() {
	try {
		await db.authenticate();
		console.log("Database connected");
	} catch (err) {
		console.error("Error connecting to the database:", err);
	}
	return db;
}

export default connect;
