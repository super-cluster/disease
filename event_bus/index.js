const express = require('express');
const bodyParser = require('body-parser');
const axios = require('axios');

const app = express();

app.post('/event', (req, res) => {
  const data = req.body;
  if (data.type === 'ML_PRED_RQ') {
  } else if (data.type === 'ML_PRED_RS') {
  }
});

app.listen(process.env.PORT, () => {
  console.log('I am awake now ....');
});
