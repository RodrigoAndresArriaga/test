const express = require('express');
const app = express();
const PORT = process.env.PORT || 3000; // Default to 3000 if environment port not available

app.get('/', (req, res) => {
  res.send('Hello World!');
});

app.listen(PORT, () => {
  console.log(`Server running on port ${PORT}`);
});
