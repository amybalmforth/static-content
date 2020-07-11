const express = require('express');
const path = require('path');
const fs = require('fs');
const app = express();
const port = 3000;
const markdown = require('markdown-it')();

const result = markdown.render('# mark down it rules');

const consumeFile = (req) => {
  let directory = req.url
  let url = `content${directory}/index.md`
  const content = fs.readFileSync(url, 'utf8');
  return content;
}

app.get('/about-page', (req, res) => {
  let output = consumeFile(req)
  res.send(output)
})

app.get('/jobs', (req, res) => {
  let output = consumeFile(req)
  res.send(output)
})

app.get('/valves', (req, res) => {
  let output = consumeFile(req)
  res.send(output)
})

app.use((req, res) => {
  res.status(404).send({
    status: 404,
    error: 'Something went wrong'
  })
})

app.listen(port, () => console.log('App listening on port 3000'))
