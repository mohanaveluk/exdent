const http = require('http');
const path = require('path');
const fs = require('fs');

const server = http.createServer((req, res) => {
    if(req.url =='/'){
      res.end('<h1>Home page</home>');
    }
    if(req.url =='/about'){
      fs.readFile(
          path.join(__dirname, 'public', 'about.html'), (err, content) => {
              if(err) throw err;
              res.writeHead(200, {'content-type': 'text/html'});
              res.end(content);
          }
      );
    }
  
  
  });

const PORT = process.env.PORT || 3500;

server.listen(PORT, () => console.log('Server running on port  ${PORT}'));
