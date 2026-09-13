import http from "http";
import fs from "node:fs/promises";

let port = 3001;
const filePath = "file.txt";

let userData = [];

async function readFile() {
    try {
        const data = await fs.readFile(filePath, "utf-8");
        return data;
    } catch (err) {
        console.log("Error found", err);
        return "";
    }
}

const content = await readFile();

console.log(content, "12");

const server = http.createServer((req, resp) => {

    const url = req.url;
    const typ = req.method;

    // GET /msg
    if (url === "/msg" && typ === "GET") {

        resp.statusCode = 200;
        resp.setHeader("Content-Type", "application/json");

        resp.end(JSON.stringify(content));
    }

    // GET /sis
    else if (url === "/sis" && typ === "GET") {

        resp.statusCode = 200;
        resp.setHeader("Content-Type", "application/json");

        const user = {
            name: "aarav",
            id: 1223
        };

        resp.end(JSON.stringify(user));
    }

    // POST /create
    else if (url === "/create" && typ === "POST") {
        let body = "";
        req.on("data", (chunk) => {
            body += chunk;
        });
        req.on("end", () => {
                const data = JSON.parse(body);
                const newUser = {
                    id: data.id,
                    name: data.name,
                    age: data.age
                };
                userData.push(newUser);
                resp.end(JSON.stringify({message: "User created successfully"}));
            } 
        )
        }
    else if(url=="/user" && typ=="GET"){
        resp.end(JSON.stringify(userData));
    }
    // Unknown route
    else {

        resp.statusCode = 404;
        resp.end("Route not found");
    }
});

server.listen(port, () => {
    console.log(`Server is running on port ${port}`);
});