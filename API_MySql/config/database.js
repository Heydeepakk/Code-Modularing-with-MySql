import { Sequelize } from "sequelize";
import dotenv from "dotenv"
dotenv.config();
const db = new Sequelize('sequelize_db', 'root', '', {
    host: process.env.MY_SQL_HOST,
    user: process.env.MY_SQL_USER,
    password: process.env.MY_SQL_PASSWORD,
    dialect: 'mysql'
});
export default db;