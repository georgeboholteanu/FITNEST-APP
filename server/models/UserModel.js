import { DataTypes } from 'sequelize';
import connect from '../database/database.js';

const UserModelFn = async () => {
  const db = await connect();

  const UserModel = db.define('users', {
    user_id: {
      type: DataTypes.INTEGER,
      primaryKey: true,
      autoIncrement: true,
    },
    first_name: {
      type: DataTypes.STRING,
    },
    last_name: {
      type: DataTypes.STRING,
    },
    email: {
      type: DataTypes.STRING,
      allowNull: false,
    },
    password: {
      type: DataTypes.STRING,
      allowNull: false,
    },
  }, {
    timestamps: false,
  });


  // Synchronize the model with the database (create the table)
  await db.sync();

  return UserModel;
};

export default UserModelFn;
