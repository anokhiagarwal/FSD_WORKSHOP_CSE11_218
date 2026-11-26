import mongoose from "mongoose";

const employeeSchema = new mongoose.Schema(
    {
        Empid: Number,
        Name: String,
        Designation: String,
        MOB: String,
        DOJ: Date,
        Department: String,
        Salary: Number
    }
);

const Employee = mongoose.model("Employee", employeeSchema);

export default Employee;