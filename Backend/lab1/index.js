import EventEmitter from "node:events";
const myEmitter = new EventEmitter();
myEmitter.on("greet", (doctor) => {
    console.log(`session started by ${doctor}`);
});
myEmitter.on ("exit",(doctor) => {
    console.log(`session ended by ${doctor}`);
});
myEmitter.emit("greet", "Dr.Paul");
myEmitter.emit("exit", "Dr.Paul");

