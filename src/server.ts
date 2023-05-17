import http from 'http';
import fs from 'fs';

// script start
const server = http.createServer((req, res) => {
  res.setHeader('Content-Type', 'text/html');
  let path = './src/pages/';
  let statusCode = 200;

  switch (req.url) {
    case '/':
      path += 'index.html';
      break;
    case '/about':
      path += 'about.html';
      break;
    case '/contact-me':
      path += 'contact-me.html';
      break;
    default:
      statusCode = 404;
      path += '404.html';
      break;
  }

  res.statusCode = statusCode;

  fs.readFile(path, (err, data) => {
    if (err) {
      console.log(err);
      res.end();
    }
    res.write(data);
    res.end();
  })
});

server.listen(3000, () => console.log('Server started at port 3000'));
