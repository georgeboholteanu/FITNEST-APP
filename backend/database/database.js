import { Sequelize } from 'sequelize';

const db = new Sequelize('gym', 'root', 'sssqqqlll', {
  host: 'localhost',
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
