
import express from "express";
import cors from "cors";
import dotenv from "dotenv";
import connectDB from "./db.js";
import Employee from "./Layers/Employee.js";

dotenv.config();

const app = express();

app.use(cors());
app.use(express.json());

// Test route
app.get("/", (req, res) => {
    res.send("HRMS Server Running Successfully!");
});

// Add Employee
app.post("/employees", async (req, res) => {
    try {
        const employee = await Employee.create(req.body);

        res.status(201).json({
            message: "Employee added successfully!",
            data: employee
        });
    } catch (error) {
        res.status(500).json({
            message: error.message
        });
    }
});

// Get All Employees
app.get("/employees", async (req, res) => {
    try {
        const employees = await Employee.find();

        res.status(200).json(employees);
    } catch (error) {
        res.status(500).json({
            message: error.message
        });
    }
});

const PORT = process.env.PORT || 3000;

const startServer = async () => {
    await connectDB();

    app.listen(PORT, () => {
        console.log(`HRMS Server running on port ${PORT}`);
    });
};

startServer();
