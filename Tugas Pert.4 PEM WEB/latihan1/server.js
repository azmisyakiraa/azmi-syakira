const http = require('http')

const server = http.createServer((req, res) => {
    res.statusCode = 200; //server berjalan dengan baik
    res.setHeader =('Content-Type', 'text/html');
    res.end('hello world');
});

server.listen(3000, () =>{
    console.log("server berhasil berjalan di port 3000");

});