import express from "express";
import mongoose from "mongoose";
import dotenv from "dotenv";
import cors from "cors";
import Employee from "./models/Employee.js";
dotenv.config();

const app = express();

app.use(cors());
app.use(express.json());
app.use(express.static("public"));

mongoose.connect(process.env.MONGO_URI)
    .then(() => console.log("MongoDB Connected"))
    .catch((error) => console.log(error));


app.post("/employee", async (req, res) => {
    try {
        const employee = await Employee.create(req.body);
        res.status(201).json(employee);
    } catch (error) {
        res.status(400).json({ error: error.message });
    }
});


app.get("/employee", async (req, res) => {
    try {
        const employee = await Employee.find();
        res.status(200).json(employee);
    } catch (error) {
        res.status(500).json({ error: error.message });
    }
});


app.get("/employee/:id", async (req, res) => {
    try {
        const employee = await Employee.findOne({
            Empid: req.params.id
        });
        res.status(200).json(employee);
    } catch (error) {
        res.status(500).json({ error: error.message });
    }
});


app.put("/employee/:id", async (req, res) => {
    try {
        const employee = await Employee.findOneAndUpdate(
            { Empid: req.params.id },
            req.body,
            { new: true }
        );
        res.status(200).json(employee);
    } catch (error) {
        res.status(500).json({ error: error.message });
    }
});


app.delete("/employee/:id", async (req, res) => {
    try {
        const employee = await Employee.findOneAndDelete({
            Empid: req.params.id
        });

        if (!employee) {
            return res.status(404).json({
                msg: "Employee not found"
            });
        }

        res.status(200).json({
            msg: "Employee deleted successfully"
        });
    } catch (error) {
        res.status(500).json({ error: error.message });
    }
});
const port = process.env.PORT || 3000;

app.listen(port, () => {
    console.log(`Server running on http://localhost:${port}`);
});