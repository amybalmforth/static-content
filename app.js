const express = require('express');
const fs = require('fs');
const mustache = require('mustache-express');
const path = require('path');
const app = express();
const port = 3000;
const markdown = require('markdown-it')({
  html: true,
  linkify: true
});

app.engine('html', mustache());
app.set('view engine', 'html');
app.set('views', __dirname + '/views');

const formatFile = (req) => {
  const content = fs.readFileSync(`content${req.url}/index.md`, 'utf8');
  return markdown.render(content);
};

app.get(['/about-page', '/jobs', '/valves'], (req, res) => {
  res.render('template.html', {"content": formatFile(req)});
});

app.use((req, res) => {
  res.status(404).send({
    status: 404,
    error: 'Error: Something went wrong'
  });
});

app.listen(port, () => console.log('App running on port 3000'));
