// import file sysytem nodule
const fs = require('fs');
fs.readdir('tutorial2',(err,files)=>{
    if(err)
        console.log(err);
    else{
        console.log(files);
        for(let file of files){
            fs.unlink('./tutorial2/'+file,(err)=>{
                if(err)
                    console.log(err);
                else
                    console.log('deleted the file');
            })
        }
    }
        
        
});
