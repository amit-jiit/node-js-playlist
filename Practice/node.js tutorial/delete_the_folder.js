// import file module
const fs = require('fs');
// make a folder
fs.mkdir('tutorial_file_system_copy',(err)=>{
    if(err)
        console.log(err);
    else{
        // remove folder
        fs.rmdir('tutorial_file_system_copy',(err)=>{
            if(err)
                console.log(err);
            else
                console.log("deleted the folder");
        });
    }
})
