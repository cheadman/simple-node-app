const http = require('http');

const server = http.createServer((req, res) => {
    if (req.url === '/') {
        res.end('<h1>Hello, World, Courd is Great!</h1>');
    }
});

const PORT = process.env.PORT || 5001;

server.listen(PORT, () => console.log(`The development server running on port ${PORT}`));
