const express = require('express');
const fs = require('fs');
const mustache = require('mustache-express');
const path = require('path');
const app = express();
const port = 3000;
const markdown = require('markdown-it')();


app.engine('html', mustache());
app.set('view engine', 'html');
app.set('views', __dirname + '/views');

const consumeFile = (req) => {
  let directory = req.url;
  let url = `content${directory}/index.md`;
  const content = fs.readFileSync(url, 'utf8');
  return content;
}

app.get('/about-page', (req, res) => {
  let output = consumeFile(req);
  res.render('template.html', {"content": output});
});

app.get('/jobs', (req, res) => {
  let output = consumeFile(req);
  res.render('template.html', {"content": output});
});

app.get('/valves', (req, res) => {
  let output = consumeFile(req);
  res.render('template.html', {"content": output});
});

app.use((req, res) => {
  res.status(404).send({
    status: 404,
    error: 'Something went wrong'
  });
});

app.listen(port, () => console.log('App listening on port 3000'));
