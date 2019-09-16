const fs = require('fs');
const util = require('util');

const readFile = util.promisify(fs.readFile);
const readDir = util.promisify(fs.readdir);
readFile('./index.js','utf8').then(data =>{
    //console.log('data-',data);
})
fs.readFile('./index.js','utf8',(err,data)=>{
    //console.log(data);
});
const readdir = fs.readDir('./static/',(err,File)=>{
    console.log('file',File);
})