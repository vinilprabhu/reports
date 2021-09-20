const express = require('express');
const app = express();
const port = 3000;
const json2csv = require('./routes/json2csv');

app.use(express.json());
app.use(express.urlencoded({ extended: true }));

app.use('/json2csv', json2csv)

app.listen(port, () => {
  console.log(`Reports api app listening at http://localhost:${port}`)
})
