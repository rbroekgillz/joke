const express = require('express');
const app = express();

const PORT = process.env.PORT || 3000;

const page = `
<html>
  <head>
  <title>Ron Broek</title>
  </head>
  <body>
    <h1>Why do comedians love !false?</h1>
    <p>It's funny because it's true.</p>
  </body>
</html>`;

app.get('/', (req, res) => {
  res.send(page);
});

app.listen(PORT, () => {
  console.log(`Server listening on :${PORT}`);
});