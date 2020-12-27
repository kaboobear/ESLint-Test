const express = require('express');
const bodyParser = require('body-parser');
const cors = require('cors');

const app = express();
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: false }));
app.use(cors());

const PORT = process.env.PORT || '5000';

app.use('/', (req, res) => {
        res.send('ok');
});

app.listen(PORT, () => {
    console.log(`Server is working on port ${PORT}`);
});
