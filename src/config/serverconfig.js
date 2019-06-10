const express = require('express');
const fileUpload = require('express-fileupload');
const bodyParser = require('body-parser');
const cors = require('cors');
const app = express();

app.use(cors());
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: false }));
app.use(fileUpload());
app.use('/public', express.static(`../../public`));

const PORT = 4000;
app.listen(PORT);
console.log(`Servidor rodando na porta ${PORT}`);

module.exports = app;
