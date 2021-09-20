const express = require('express');
const router = express.Router();
const { parse } = require('json2csv');
const fs = require('fs');

router.get('/sample', function (req, res) {

  const dir = `${__dirname}/../generatedFiles`

  if (!fs.existsSync(dir)) {
    fs.mkdirSync(dir);
  }

  const fields = ['field1', 'field2', 'field3'];
  const opts = { fields };
  const data = [
    {
      car: "Audi",
      price: 40000,
      color: "blue",
    }, {
      car: "BMW",
      price: 35000,
      color: "black",
    }, {
      car: "Porsche",
      price: 60000,
      color: "green",
    },
  ];

  const csv = parse(data);

  fs.writeFileSync(`${dir}/sampleReport.csv`, csv);

  res.download('/tmp/test.csv');
})

router.post('/', function (req, res) {

  const dir = `${__dirname}/../generatedFiles`

  if (!fs.existsSync(dir)) {
    fs.mkdirSync(dir);
  }

  const csv = parse(req.body.data);

  fs.writeFileSync(`${dir}/report.csv`, csv);

  res.download(`${dir}/report.csv`);
});

module.exports = router;