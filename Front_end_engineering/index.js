const http = require('http');
const fs =require('fs');
const path = require('path');

http.createServer((req,res)=>{
    const reqUrl = req.url;
    //^
    if(/^\/static\//.test(reqUrl)){
        staticServer(req,res);
        return false;
    }
    fs.readFile('./index1.html','binary',(err,file)=>{
        console.log(req.url)
        // if(req.url === '/static/demo.jpg'){
        //     fs.readFile('./static/demo.jpg','binary',(err,file)=>{
        //         res.write(file,'binary');
        //         res.end();
        //     });
        //     return false;
        // }

        res.write(file,'binary'),
        res.end();
    })
}).listen(9090,()=>{
    console.log('server is runing 9090');
})
function staticServer(req,res){
    const reqUrl = req.url;
    const filepath = path.join(__dirname,reqUrl);
    fs.exists(filepath,exists =>{
        if(!exists){
            res.writeHead(404);
            res.end();
            return false;
        }else{
            fs.readFile(filepath,'binary',(err,file)=>{
                res.write(file,'binary');
                res.end;
            })
        }
    })
}