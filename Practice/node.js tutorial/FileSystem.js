//import filesystem module
const fs  = require('fs');
//create a file
// fs.writeFile('example.txt',"this is an example",
// (err)=>{
//     if(err)
//     console.log(err);// err parameter
//     else{
//         console.log('file successfully created');
//         fs.readFile('example.txt','utf8',(err,file)=>{
//             if(err)
//                 console.log(err);
//             else
//                 console.log(file);
//         });//read the created file
//     }
// });/* name of file,write inside file */


/* rename file */
// fs.rename('example.txt','examplerename.txt',(err)=>{
//     if(err)
//     console.log(err);
//     else
//     console.log('file successfully renamed');
// });

// append the file
// fs.appendFile('examplerename.txt','some data being appended',
// (err)=>{
//     if(err)
//         console.log(err);
//     else
//         console.log('appended data to file');

// });

//delete the file
fs.unlink('examplerename.txt',(err)=>{
    if(err)
        console.log(err);
    else
        console.log('file deleted');
})