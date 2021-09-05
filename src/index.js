const express = require('express');
const dotenv = require('dotenv');

dotenv.config();
const app = express();
const port = process.env.PORT||3000;

app.use('/', (req, res) =>{
    res.send('I Love You');
});

app.listen(port, () => console.log(`App listen in http://localhost:${port}`));
