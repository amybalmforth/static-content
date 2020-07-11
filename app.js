const express = require('express');
const path = require('path');
const fs = require('fs');
const app = express();
const port = 3000;
const markdown = require('markdown-it')();

const result = markdown.render('# mark down it rules');

app.get('/about-page', (req, res) => {
  let directory = req.url
  let url = `content${directory}/index.md`
  fs.readFile(url, 'utf8', (err, data) => {
    console.log(data)
  })
  res.send(result)
})

app.get('/jobs', (req, res) => {
  res.sendFile('template.html', { root: '.' })
})

app.get('/valves', (req, res) => {
  res.sendFile('template.html', { root: '.' })
})

app.use((req, res) => {
  res.status(404).send({
    status: 404,
    error: 'Something went wrong'
  })
})

app.listen(port, () => console.log('App listening on port 3000'))
