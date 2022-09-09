const {readFile,writeFile} = require('fs');
var first,second;

readFile("./content/first.txt","utf8",(err,result) => {
    if(err){
        console.log(err);
        return;
    }
     first= result;
     readFile("./content/second.txt","utf8",(err,result) => {
        if(err){
            console.log(err);
            return
        }
        second = result;
     })
     writeFile("./content/basics.txt",
        `hello iam ${first} and ${second}`,(err,result) => {
            if(err){
                return;
            }
            console.log(result);
        })
})