import UserX from "../models/UserX.js";
import db from "../database/database.js";

// Create a function to recreate the "users" table
async function recreateDatabase() {
	try {
		// Synchronize the User model with the database, creating the "users" table if it doesn't exist
		await db.sync();

		// Check if the "users" table already exists and clear it if it does
		const tableExists = await db.getQueryInterface().showAllTables();
		if (tableExists.includes("users")) {
			await UserX.destroy({ where: {} });
		}

		// Insert data into the "users" table
		const userData = [
			{
				first_name: "aaa",
				last_name: "aaa",
				email: "aaa@aaa.com",
				password: "aaa",
			},
			{
				first_name: "Jane",
				last_name: "Smith",
				email: "jane.smith@example.com",
				password: "111",
			},
			{
				first_name: "Michael",
				last_name: "Johnson",
				email: "michael.johnson@example.com",
				password: "111",
			},
			{
				first_name: "Emily",
				last_name: "Brown",
				email: "emily.brown@example.com",
				password: "111",
			},
			{
				first_name: "William",
				last_name: "Taylor",
				email: "william.taylor@example.com",
				password: "111",
			},
			{
				first_name: "Olivia",
				last_name: "Anderson",
				email: "olivia.anderson@example.com",
				password: "111",
			},
			{
				first_name: "James",
				last_name: "Thomas",
				email: "james.thomas@example.com",
				password: "111",
			},
			{
				first_name: "Sophia",
				last_name: "Harris",
				email: "sophia.harris@example.com",
				password: "111",
			},
			{
				first_name: "Benjamin",
				last_name: "Clark",
				email: "benjamin.clark@example.com",
				password: "111",
			},
			{
				first_name: "Mia",
				last_name: "Lewis",
				email: "mia.lewis@example.com",
				password: "111",
			},
			{
				first_name: "Sarah",
				last_name: "Wilson",
				email: "sarah.wilson@example.com",
				password: "111",
			},
			{
				first_name: "Daniel",
				last_name: "Lee",
				email: "daniel.lee@example.com",
				password: "111",
			},
			{
				first_name: "Ava",
				last_name: "White",
				email: "ava.white@example.com",
				password: "111",
			},
			{
				first_name: "Matthew",
				last_name: "Thompson",
				email: "matthew.thompson@example.com",
				password: "111",
			},
			{
				first_name: "Oliver",
				last_name: "Hall",
				email: "oliver.hall@example.com",
				password: "111",
			},
			{
				first_name: "Emma",
				last_name: "Wright",
				email: "emma.wright@example.com",
				password: "111",
			},
			{
				first_name: "Liam",
				last_name: "Harrison",
				email: "liam.harrison@example.com",
				password: "111",
			},
			{
				first_name: "Charlotte",
				last_name: "Moore",
				email: "charlotte.moore@example.com",
				password: "111",
			},
			{
				first_name: "Lucas",
				last_name: "Davis",
				email: "lucas.davis@example.com",
				password: "111",
			},
			{
				first_name: "Sophie",
				last_name: "Evans",
				email: "sophie.evans@example.com",
				password: "111",
			},
			{
				first_name: "Logan",
				last_name: "Parker",
				email: "logan.parker@example.com",
				password: "111",
			},
			{
				first_name: "Isabella",
				last_name: "Turner",
				email: "isabella.turner@example.com",
				password: "111",
			},
			{
				first_name: "Jackson",
				last_name: "Lewis",
				email: "jackson.lewis@example.com",
				password: "111",
			},
			{
				first_name: "Grace",
				last_name: "Scott",
				email: "grace.scott@example.com",
				password: "111",
			},
			{
				first_name: "Oliver",
				last_name: "King",
				email: "oliver.king@example.com",
				password: "111",
			},
			{
				first_name: "Chloe",
				last_name: "Ward",
				email: "chloe.ward@example.com",
				password: "111",
			},
			{
				first_name: "Ethan",
				last_name: "Green",
				email: "ethan.green@example.com",
				password: "111",
			},
			{
				first_name: "Zoe",
				last_name: "Roberts",
				email: "zoe.roberts@example.com",
				password: "111",
			},
			{
				first_name: "Noah",
				last_name: "Morris",
				email: "noah.morris@example.com",
				password: "111",
			},
			{
				first_name: "Amelia",
				last_name: "Smith",
				email: "amelia.smith@example.com",
				password: "111",
			},
		];

		// Insert the data into the "users" table
		await UserX.bulkCreate(userData);
	} catch (error) {
		console.error("Error recreating the database:", error);
	}
}

// Call the recreateDatabase function to create or clear the "users" table
recreateDatabase();
