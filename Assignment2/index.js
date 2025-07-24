const express = require('express');
const fs = require('fs');
const path = require('path');

const app = express();
const PORT = 3000;

//get the JSON data from the data.json file test test
app.get('/getData', (req, res)=> {
  const jsonData = fs.readFileSync(path.join(__dirname, 'data.json'));
  res.json(JSON.parse(jsonData));
})

app.listen(PORT, ()=> {
    console.log(`Server is running on http://localhost:${PORT}`);
})