import {EventEmitter} from "node:events";

function createDomElements(){
const emitter = new EventEmitter();
return {
    addEventListener(eventType, listener){
        emitter.on(eventType, listener);
    },
    removeEventListener(eventType, listener){
        emitter.off(eventType, listener);
    },
    dispatchEvent(event){
        event.target=this;
        event.currentTarget=this;
        emitter.emit(event.eventType, event);
    }
}
}
const button=createDomElements();
button.addEventListener('save',()=>{
    console.log("saving.....");
})
button.addEventListener('click',()=>{
    console.log("clicked");
})
function handleClick(event){
    console.log("clicked");

}
button.addEventListener('click',handleClick);
button.dispatchEvent({
        eventType: "save",
    });

button.dispatchEvent({
        eventType: "click",
    });


button.addEventListener('submit',()=>{
    console.log("submitting.....");
})
button.addEventListener('submit',()=>{
    console.log("submitted");
})
function handleSubmit(event){
    console.log("submitted");

}
button.addEventListener('submit',handleSubmit);
button.dispatchEvent({
        eventType: "submit",
    });

button.dispatchEvent({
        eventType: "submit",
    });
    