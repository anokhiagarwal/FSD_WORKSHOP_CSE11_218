console.log("This is the event loop lab");
process.nextTick(() => {
    console.log("This process.nextTick operation");
})
setTimeout(() => {
    console.log("This is first Timeout operation");
}, 2500);

setTimeout(() => {
    console.log("This is second Timeout operation");
}, 6000);

setImmediate(() => {
    console.log("This is setImmediate operation");
});

process.nextTick(() => {
});

new Promise((resolve,reject)=>{
    let success = true;
    if(success)resolve ("Data fetched successfully");
    else reject ("Data fetch failed");
});