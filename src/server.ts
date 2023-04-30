import http from 'http';
import fs from 'fs';


const server = http.createServer((req, res) => {
  res.setHeader('Content-Type', 'text/html');
  //let path = './src/pages/';

  res.statusCode = 200;

  fs.readFile('./src/pages/index.html', (err, data) => {
    if (err) {
      console.log(err);
      res.end();
    }
    res.write(data);
    res.end();
  })
});

server.listen(3000, () => console.log('Server started'));
