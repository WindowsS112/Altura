const express = require('express');
const path = require('path');
const app = express();
const port = 3000;

// Gebruik de 'dist' map om het script beschikbaar te maken
app.use(express.static(path.join(__dirname, 'dist')));

// Voor Tampermonkey om de server te bereiken
app.get('/', (req, res) => {
  res.send('Tampermonkey script server is running');
});

app.listen(port, () => {
  console.log(`Server is listening on http://localhost:${port}`);
});
