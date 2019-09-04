const http = require('http');

const server = http.createServer((req, res) => {
    if(req.url =='/'){
      res.end('<h1>Home page</home>');
    }
    if(req.url =='/about'){
      res.end('<h1>About us page</home>');
    }
  
  
  });

const PORT = process.env.PORT || 3500;

server.listen(PORT, () => console.log('Server running on port  ${PORT}'));
