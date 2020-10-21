const express = require('express')
const bodyParser = require('body-parser')
const app = express()

app.set('port', (process.env.PORT || 5000))
app.use(bodyParser.json())

app.listen(app.get('port'), () => {
  console.log('Nuestro servidor esta funcionando en el puerto', app.get('port'))
})

app.get('/', (req, res) => {
  res.send("Hola Mundo")
})

app.post('/webhook', (req, res) => {
  console.log(req.body)
  res.sendStatus(200)
})
