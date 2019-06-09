const app = require('./src/config/serverconfig');

const converter = require('./src/services/Converter');
const fs = require('fs');

const file = fs.readFileSync(`${__dirname}/src/LADT.xlsx`, err => {
	if (err) console.log(err);
	console.log('File readed');
}); //Arquivo recebido estaticamente(Alterar para dinâmicamente)

app.get('/fileUpload', (req, res) => {
	const fileConverted = converter.convertToJSON(file, true);
	res.send(fileConverted);
}); //Alterar para receber arquivo enviado pelo usuário
