const express = require('express');
const app = express();
const PORT = 3000;

app.post('*', express.urlencoded({ extended: false }));
app.use(express.static('public'));

app.get('/', (req, res) => {
  res.send('Hello World!');
});

app.listen(PORT, () => console.log('node on 3000'));