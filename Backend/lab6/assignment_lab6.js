import express from 'express'
import dotenv from 'dotenv'
import cors from 'cors'

const port = 3000;

const app = express();
app.use(express.json());
const array = [
    {
        id: 1,
        name: "Ananya",
        age: 20
    },
    {
        id: 2,
        name: "Akshat",
        age: 21
    }
    {
        id: 3,
        name: "Anokhi",
        age: 18
    }
]
