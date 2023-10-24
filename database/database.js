import { Sequelize } from 'sequelize';
import dotenv from 'dotenv';

// Load environment variables from .env file
dotenv.config();

const db = new Sequelize(process.env.DB_DBNAME || 'gym', process.env.DB_USERNAME || 'root', process.env.DB_PASSWORD || sssqqqlll, {
  host: process.env.DB_HOST || 'localhost',
  dialect: 'mysql',
});

db.authenticate()
  .then(() => {
    console.log('Database connected');
  })
  .catch((err) => {
    console.error('Error connecting to the database:', err);
  });

export default db;