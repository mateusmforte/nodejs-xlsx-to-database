const app = require('./src/config/serverconfig');
const { getFilesFromPath } = require('./src/services/GetFiles');
const converter = require('./src/services/Converter');

app.post('/fileUpload', (req, res, next) => {
	let uploadedFile = req.files.file;
	const fileName = req.files.file.name;
	uploadedFile.mv(`${__dirname}/public/files/${fileName}`, err => {
		if (err) return res.status(500).send(err);
		res.json({ file: `public/${req.files.file.name}` });
	});
});

app.get('/getxlsxtojsonfile', (req, res) => {
	let file = getFilesFromPath(`${__dirname}/public/files`, 'xlsx');
	const fileConverted = converter.convertXLSXToJSON(file, true);
	res.send(fileConverted);
});
