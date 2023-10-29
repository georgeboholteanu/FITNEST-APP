import { Sequelize } from "sequelize";
import "dotenv/config";

const db = new Sequelize(
	process.env.DB_DBNAME,
	process.env.DB_USERNAME,
	process.env.DB_PASSWORD,
	{
		host: process.env.DB_HOST,
		dialect: "mysql",
	}
);

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
