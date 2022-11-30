const express = require('express');
require('dotenv').config();
const bodyParser = require('body-parser');
const axios = require('axios');
const qs = require('qs');
const cors = require('cors');

const app = express();
app.use(cors());
app.use(bodyParser.urlencoded({ extended: true }));

app.post('/event', async (req, res) => {
  const data = req.body;
  if (data.type === 'ML_PRED') {
    try {
      const result = await axios.post(
        'http://localhost:5000/api/disease_prediction',
        qs.stringify({ symptoms: data.payload })
      );
      res.send({ result: result.data });
    } catch (e) {
      res.send({ errors: e.message });
    }
  }
});

app.listen(process.env.PORT, () => {
  console.log('I am awake now ....' + process.env.PORT);
});
