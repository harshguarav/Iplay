import express from "express";
import dotenv from "dotenv";
import connectDB from "./db/index.js"; 
import { DB_NAME } from "./constants.js";

dotenv.config();

// const app = express();

// const startServer = async () => {
//     try {
//         await connectDB();

//         app.on("error", (err) => {
//             console.error("Server error:", err);
//         });

//         app.listen(process.env.PORT || 5000, () => {
//             console.log(`Server is running at http://localhost:${process.env.PORT || 5000}`);
//         });

//     } catch (error) {
//         console.error("Failed to start server:", error);
//     }
// };

// startServer();
connectDB()
