const http = require('http');
const fs = require('fs');
const path = require('path');

const server = http.createServer((req, res) => {
    // Handle root request or any URL without ".html"
    let filePath = '.' + (req.url === '/' ? '/index.html' : req.url);

    // Add ".html" to URL paths that do not have an extension
    if (path.extname(filePath) === '') {
        filePath += '.html';
    }

    // Set content types for different file types
    const extname = String(path.extname(filePath)).toLowerCase();
    const mimeTypes = {
        '.html': 'text/html',
        '.js': 'text/javascript',
        '.css': 'text/css',
    };

    const contentType = mimeTypes[extname] || 'application/octet-stream';

    // Serve the requested file
    fs.readFile(filePath, (err, content) => {
        if (err) {
            if (err.code === 'ENOENT') {
                // File not found, show 404 page
                res.writeHead(404, { 'Content-Type': 'text/html' });
                res.end('<h1>404 Page Not Found</h1>', 'utf-8');
            } else {
                // Other server errors
                res.writeHead(500);
                res.end('Sorry, there was a server error: ' + err.code);
            }
        } else {
            // Serve the file
            res.writeHead(200, { 'Content-Type': contentType });
            res.end(content, 'utf-8');
        }
    });
});

// Start the server
server.listen(3000, () => {
    console.log("Server is running on http://localhost:3000");
});
