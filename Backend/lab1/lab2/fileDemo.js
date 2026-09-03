import fs from "node:fs/promises";

const filePath = "userData.txt";
const content = "This is a sample content for the file.";

async function createFile(content){
    try{
    await fs.writeFile(filePath,content,"utf8")
  console.log("File created successfully");
    }
catch(err){
    console.log("Error in creating file",err);
}
}
createFile("hello world");

async function readFile(){
    try{
   await fs.readFile(filePath,"utf8")
        console.log("File read successfully");
    }
catch(err){
    console.log("Error in reading file",err);
}
}
readFile();

async function appendFile(newContent){
    try{
   await fs.appendFile(filePath,newContent,"utf8")
        console.log("File appended successfully");
    }
    catch(err){
    console.log("Error in appending file",err);
}
}
appendFile("This is additional content.");

async function deleteFile(){
    try{
   await fs.unlink(filePath)
        console.log("File deleted successfully");
    }
    catch(err){
    console.log("Error in deleting file",err);
}
}
deleteFile();

async function run(){
    await createFile(content);
    await readFile();
    await appendFile("This is additional content.");
    await readFile();
    deleteFile();
}
run();