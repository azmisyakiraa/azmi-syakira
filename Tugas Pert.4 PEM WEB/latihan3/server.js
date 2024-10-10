const http = require('http');
const fs = require('fs');

const server = http.createServer((req, res) => {
    fs.readFile('index.html', function(err, data){
        res.statusCode = 200; //halaman web itu aktif
        res.setHeader =('Content-Type', 'text-html');
        res.write(data);
        return res.end();
        
    })

});

server.listen(3000, () =>{
    console.log("Server Berhasil di Port 3000");

});