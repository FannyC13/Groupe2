const express = require('express');
const fetch = require('node-fetch');
const app = express();


server = app.get('/', (req, res) => {
  res.send('Hello World!!');
});

app.listen(3000, () => {
  console.log('Le serveur est en cours d\'exécution sur le port 3000');
});
