const http = require("http");

const server = http.createServer(callback);

let a = [];

function callback(req,res) {
    // console.log(req.method);
    if(req.method == 'GET') {
        a.push(1);
    } else if(req.method == 'PUT') {
        a[1] = 2;
    } else if(req.method == 'DELETE') {
        a.pop();
    }
    res.write(JSON.stringify(a));
    res.end();
}
server.listen(3000,function(){
    console.log("Server Started");
});