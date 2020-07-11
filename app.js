const express = require('express');
const fs = require('fs');
const mustache = require('mustache-express');
const path = require('path');
const app = express();
const port = 3000;
const markdown = require('markdown-it')({
  html: true,
  linkify: true,
  typographer: true
});

app.engine('html', mustache());
app.set('view engine', 'html');
app.set('views', __dirname + '/views');

const formatFile = (req) => {
  const directory = req.url;
  const url = `content${directory}/index.md`;
  const content = fs.readFileSync(url, 'utf8');
  const html = markdown.render(content);
  return html;
};

app.get('/about-page', (req, res) => {
  res.render('template.html', {"content": formatFile(req)});
});

app.get('/jobs', (req, res) => {
  res.render('template.html', {"content": formatFile(req)});
});

app.get('/valves', (req, res) => {
  res.render('template.html', {"content": formatFile(req)});
});

app.use((req, res) => {
  res.status(404).send({
    status: 404,
    error: 'Something went wrong'
  });
});

app.listen(port, () => console.log('App listening on port 3000'));
