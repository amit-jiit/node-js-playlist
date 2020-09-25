// import file module
const fs = require('fs');
// make a folder
fs.mkdir('tutorial_file_system',(err)=>{
    if(err)
        console.log(err);
    else{
        // remove folder
        console.log('folder created');
    }
})
