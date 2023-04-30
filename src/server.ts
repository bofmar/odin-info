import http from 'http';

const server = http.createServer((req, res) => {
  res.end('Hi!');
});

server.listen(3000, () => console.log('Server started'));
