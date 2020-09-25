// import file module
const fs = require('fs');
// make a folder
fs.mkdir('tutorial_file_system_copy',(err)=>{
    if(err)
        console.log(err);
    else{
        // remove folder
        fs.writeFile('./tutorial_file_system_copy/example.txt','file inside folder',(err)=>{
            if(err)
                console.log(err);
            else
                console.log("created file");
        });
    }
})
