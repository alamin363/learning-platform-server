
const express = require('express');
const app = express();
const cors = require('cors');
app.use(cors());

const port = process.env.PORT || 4000;
 const courceData = require('./data/webCors.json')

 app.get('/', (req, res) =>{
  res.send(courceData)
 })
 app.get('/cours/:id', (req, res) => {
  const id =parseInt(req.params.id);
  const singleCours = courceData.find(cdt => cdt.id === id)
  res.send(singleCours)
 })

 app.listen(port, ()=>{
  console.log('api is running now', port)
 })