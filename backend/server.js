import mysql from "mysql";
import express from "express";
import cors from "cors";
import fs from "fs";
import process from "process";

const app = express();
// app.use(cors());
app.use(express.json());
app.set("port", process.env.PORT || 3000);
app.set("host", process.env.HOST || "0.0.0.0");

const db = mysql.createConnection({
	host: "localhost",
	user: "root",
	password: "",
	database: "mydb",
});

const createTable = () => {
	db.query(
		`CREATE TABLE IF NOT EXISTS users (
		id INT AUTO_INCREMENT not NULL PRIMARY KEY,
		name VARCHAR(100),
		surname VARCHAR(100),
		email VARCHAR(100)
	)`,
		(err) => {
			if (err) throw new Error(err);
			console.log("TABLE created/exists");
		}
	);
};

db.connect((err) => {
	if (err) throw new Error(err);
	console.log("Connected");
	db.query("CREATE DATABASE IF NOT EXISTS mydb", (err) => {
		if (err) throw new Error(err);
		console.log("Database created/exists");
		db.changeUser({ database: "mydb" }, (err) => {
			if (err) throw new Error(err);
			createTable();
		});
	});
});

app.get("/users", (req, res) => {
	const sql_query = "SELECT * FROM users";
	db.query(sql_query, (err, data) => {
		if (err) return res.json("Error");
		return res.json(data);
	});
});

app.post("/users", (req, res) => {
	const sql_query =
		"INSERT INTO users (`name`, `surname`, `email`) VALUES (?)";
	const values = ["test name", "test surname", "test email"];

	db.query(sql_query, [values], (err, data) => {
		if (err) return res.json(err);
		return res.json("User has been created");
	});
});

app.put("/users", (req, res) => {
	const sql_query = "UPDATE users SET name = ? WHERE id = 2";
	const value = "Rachel";

	db.query(sql_query, value, (err, data) => {
		if (err) return res.json(err);
		return res.json("1 record updated");
	});
});

// Define a function to clear duplicates
const clearDuplicates = (callback) => {
	// Create temporary table
	const createTempTableSQL =
		"CREATE TEMPORARY TABLE temp_table AS (SELECT * FROM users WHERE 1=0)";

	// Insert unique records into the temporary table
	const insertUniqueRecordsSQL = `
	  INSERT INTO temp_table
	  SELECT *
	  FROM users
	  GROUP BY name, surname, email
	`;

	// Truncate the original 'users' table
	const truncateUsersTableSQL = "TRUNCATE TABLE users";

	// Copy data from temporary table back to the original 'users' table
	const copyDataSQL = "INSERT INTO users SELECT * FROM temp_table";

	// Execute the SQL statements one by one
	db.query(createTempTableSQL, (err) => {
		if (err) {
			console.error("Error creating temporary table:", err);
			callback(err);
		} else {
			db.query(insertUniqueRecordsSQL, (err) => {
				if (err) {
					console.error("Error inserting unique records:", err);
					callback(err);
				} else {
					db.query(truncateUsersTableSQL, (err) => {
						if (err) {
							console.error(
								"Error truncating 'users' table:",
								err
							);
							callback(err);
						} else {
							db.query(copyDataSQL, (err) => {
								if (err) {
									console.error(
										"Error copying data back:",
										err
									);
									callback(err);
								} else {
									console.log("Cleared duplicates");
									callback(null); // Indicate success
								}
							});
						}
					});
				}
			});
		}
	});
};

// Define your PUT route
// app.post("/users", (req, res) => {
// 	clearDuplicates((err) => {
// 		if (err) {
// 			res.status(500).send("Error clearing duplicates");
// 		} else {
// 			res.status(200).send("Cleared duplicates");
// 		}
// 	});
// });

app.listen(app.get("port"), app.get("host"), (err) => {
	if (err) throw new Error();
	console.log("Express server listening on port " + app.get("port"));
});
