const express = require('express');
const path = require('path')
const app = express();
const port = 3000;


app.get('/about-page', (req, res, next) => {
  res.sendFile('template.html', { root: '.' })
})

app.get('/jobs', (req, res, next) => {
  res.sendFile('template.html', { root: '.' })
})

app.get('/valves', (req, res, next) => {
  res.sendFile('template.html', { root: '.' })
})

app.use((req, res, next) => {
  res.status(404).send({
    status: 404,
    error: 'Something went wrong'
  })
})

app.listen(port, () => console.log('App listening on port 3000'))
