
import express from "express";
import cors from "cors";
import dotenv from "dotenv";
import connectDB from "./db.js";
import Studentt from "./models/student.js";

dotenv.config();

const app = express();

app.use(cors());
app.use(express.json());

// POST: Insert student data
app.post("/test-db", async (req, res) => {
    try {
        const studentt = await Studentt.create({
            name: "Test Student",
            email: "test@example.com",
            course: "MongoDB"
        });

        res.status(201).json({
            message: "Data inserted successfully!",
            data: studentt,
        });
    } catch (error) {
        res.status(500).json({
            message: error.message,
        });
    }
});

// GET: Fetch student data
app.get("/test-db", async (req, res) => {
    try {
        const studentt = await Studentt.find();

        res.status(200).json(studentt);
    } catch (error) {
        res.status(500).json({
            message: error.message
        });
    }
});

// Test server
app.get("/", (req, res) => {
    res.send("Server running successfully!");
});

const PORT = process.env.PORT || 3000;

const startServer = async () => {
    await connectDB();

    app.listen(PORT, () => {
        console.log(`Server running on port ${PORT}`);
    });
};

startServer();
