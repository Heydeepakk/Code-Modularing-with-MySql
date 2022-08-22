import express from "express";
import cors from "cors";
import db from "./config/database.js";
import Router from "./routes/routes.js";
import dotenv from "dotenv";


const app = express();
app.use(express.json());
app.use(cors());
dotenv.config();

try {
    await db.authenticate();
    console.log('Connection has been established successfully.');
} catch (error) {
    console.error('Unable to connect to the database:', error);
}

app.use(Router);

app.listen(3100, () => console.log('Server running at http://localhost:3100'));