const path = require('path');
const express = require('express');


const publicPath = path.join(__dirname, '../public');
const host = '0.0.0.0';
const port = process.env.PORT || 3000;

var app = express();

app.use(express.static(publicPath));

app.listen(port, host, () => {
    console.log(`Server started on port ${port}`);
});
