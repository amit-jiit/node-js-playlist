const EventEmitter = require('events') ;
//create event instance
const eventEmitter = new EventEmitter() ;//EventEmitter object
// from here now we can start event driven programme

//attach listener to event emitter object
eventEmitter.on('tutorial',()=>{
    console.log("tutorial event has occured");
});// two argument, listener(tutorial) and function in on()
eventEmitter.emit('tutorial')//emit method triggered tutorial event

// pass parameter in function
eventEmitter.on('tutorial2',(num1,num2)=>{
    console.log(num1+num2);
});
eventEmitter.emit('tutorial2',1,2);


//create person class
class person extends EventEmitter{
    constructor(name){
        super();
        this._name= name ;
    }
    get name(){
        return this._name ;
    }
}// super() allows to use this property of class

let amit = new person('amit');//person object
let mano = new person('mano');// 

// listener of object(amit)
amit.on('name',()=>{
    console.log("my name is ",+ amit.name)
});

// listener to mano
mano.on('name',()=>{
    console.log("my name is",+mano.name);
});
// emit the events
amit.emit('name');
mano.emit('name');