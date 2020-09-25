//console.log("Hello world from Nodejs") ;
// using tutorial file
const tutorial = require('./tutorial');
console.log(tutorial);// tutorial function contain only sum function
//sum(1,1);
//console.log(tutorial(1,1));
console.log(tutorial.sum(1,1))// tutorial now hold 2 functions
console.log(tutorial.PI)
console.log(new tutorial.SomeMathObject())

