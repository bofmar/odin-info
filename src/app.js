import express from 'express';
import path from 'path';
import url from 'url';

const PORT = 3000;
const __dirname = path.dirname(url.fileURLToPath(import.meta.url));
const PAGESPATH = path.join(__dirname, 'pages');

const app = express();

app.get('/', (req, res) => {
  res.sendFile(path.join(PAGESPATH, 'index.html'));
});

app.get('/about', (req, res) => {
  res.sendFile(path.join(PAGESPATH, 'about.html'));
});

app.get('/contact-me', (req, res) => {
  res.sendFile(path.join(PAGESPATH, 'contact-me.html'));
});

app.use((req, res) => {
  res.sendFile(path.join(PAGESPATH, '404.html'));
});

app.listen(PORT, () => console.log(`Server started at port ${PORT}`));
