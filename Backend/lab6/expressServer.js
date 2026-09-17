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
    },
    {
        id: 3,
        name: "Anokhi",
        age: 18
    }
]

app.get("/", (req, res) => {
    res.status(200).send(`listening on port ${port}`)
})


app.get("/user", (req, res) => {
    try {
        res.status(200).json({
            message: "data recieved",
            userData: array
        })
    } catch (err) {
        console.error(err.message)
        res.status(500).json({
            message: "Internal server error"
        })
    }
})

app.get("/user/:id", (req, res) => {
    try {
        const { id } = req.params;
        const user = array.find((user) => user.id === parseInt(id));
        if (!user) {
            return res.status(404).json({
                message: "User not found"
            });
        }
        res.status(200).json({
            message: "User found",
            userData: user
        });
    } catch (err) {
        console.error("Error", err.message);
        res.status(500).json({
            message: "Internal server error"
        });
    }
});

app.post("/create" , (req,res)=>{
    try{
        const {name , age} = req.body ;
        const newUser = {
            id: array.length+1,
            name,
            age,
        };
        array.push(newUser);
        console.log("User added successfully")
        console.log(array)
        res.status(201).json({
            message: "User created successfully",
            userData: newUser
        })
    }
    catch(err){
        console.error(err.message)
        res.status(500).json({
            message: "Internal server error"
        })
    }
})
app.put("/edit/:id", (req, res)=>{
    try{
        const id= req.params.id;
        const{name,age} =req.body;
        const index = array.findIndex((u)=> u.id ==id);
        if(index ==-1){
            return res.status(400).json({message:"user not found"}

            )
        }
        array[index]={
            id,
            name,
            age,
        };
        return res.status(200).json({message:"user updated successfully"})
    }
    catch (err){
        console.error("Error", err.message);
        res.status(500).json({message:"Internal server error"})
    }
})

app.listen(port, () => {
    console.log(`Server is running at http://localhost:${port}`)
})


app.get("/delete/:id", (req, res) => {
    try {
        const { id } = req.params;
        const index = array.findIndex((user) => user.id === parseInt(id));
        if (index === -1) {
            return res.status(404).json({
                message: "User not found"
            });
        }
        array.splice(index, 1);
        res.status(200).json({
            message: "User deleted successfully"
        });
    } catch (err) {
        console.error("Error", err.message);
        res.status(500).json({
            message: "Internal server error"
        });
    }
});

app.get("/userById/:id", (req, res) => {
    try {
        const { id } = req.params;
        const user = array.find((user) => user.id === parseInt(id));
        if (!user) {
            return res.status(404).json({
                message: "User not found"
            });
        }
        res.status(200).json({
            message: "User found",
            userData: user
        });
    } catch (err) {
        console.error("Error", err.message);
        res.status(500).json({
            message: "Internal server error"
        });
    }
});
