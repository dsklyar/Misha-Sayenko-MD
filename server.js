const express = require('express');
const bodyParser = require('body-parser');
const path = require('path');

const app = express();

app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: false }));
app.use(express.static(path.join(__dirname, 'client/dist')));

const appRoutes = require('./server/routes/app');

app.use('/', appRoutes);
app.use((req, res) => {
    res.sendFile(path.join(__dirname, 'client/dist/index.html'));
});

const port = process.env.PORT || '3333';
app.listen(port, () => console.log(`Server running on port: ${port}`));