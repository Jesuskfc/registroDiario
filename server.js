const express = require('express');

const app = express();

app.use(express.static('./dist/registro-diario'));

app.get('/*', (req, res) =>
    res.sendFile('index.html', {root: 'dist/registro-diario/'}),
);

app.listen(process.env.PORT || 8080);