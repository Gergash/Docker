const express = require('express')
const app = express()
const port = 1000

const MongoClient = require('mongodb').MongoClient

// Connection URL
const mongoUrl = process.env.MONGO_URL || 'mongodb://localhost:27017/test';

app.get('/', (req, res) => {
  MongoClient.connect(mongoUrl, { useNewUrlParser: true }, (err, db) => {
    if (err) {
      res.status(500).send('OHHHH NOOOO BOIIISS YOU ARE NOT CONNECTED: ' + err);
    } else {
      res.send('Estas conectado a la DB de mongo con Docker B)'); 
      db.close();
    }
  });
});

app.listen(port, () => console.log(`Server listening on port ${port}!`))
