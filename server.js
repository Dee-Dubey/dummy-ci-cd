const express = require('express');
const app = express()
const PORT = process.env.PORT || 3000;

app.get('/', (req, res) =>{
  res.send('Hello from CI CD dummy project')
})


app.listen(PORT, ()=>{
  console.log(`Server is running in the prot ${PORT}`)
})