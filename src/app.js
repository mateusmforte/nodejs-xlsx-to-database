const app = require('./config/serverconfig');

const converter = require('./services/Converter');
const fs = require('fs');

const file = fs.readFileSync(`${__dirname}/LADT.xlsx`, err => {
	if (err) console.log(err);
	console.log('File readed');
});//Arquivo recebido estaticamente(Alterar para dinâmicamente)

app.get('/fileUpload', (req, res) => {
	const fileConverted = converter.convertToJSON(file);
	res.send(fileConverted);
}); //Alterar para receber arquivo enviado pelo usuário
