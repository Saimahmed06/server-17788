
const express = require('express')
const app = express()
const PORT = process.env.PORT || 5000

app.get('/', (req, res) => {
  res.send('Hello World!')
})
app.get('/profile', (req, res) => {
    res.send('Hello HERE IS YOUR PROFILE!')
  })
  app.put('/profile', (req, res) => {
    res.send('Hello HERE IS YOUR PROFILE!')
  })
  app.post('/profile', (req, res) => {
    res.send('Hello HERE IS YOUR PROFILE!')
  })
  app.delete('/profile', (req, res) => {
    res.send('Hello! PROFILE IS DELETED')
  })
 
app.listen(PORT, () => {
  console.log(`Example app listening at http://localhost:${ PORT}`)
})