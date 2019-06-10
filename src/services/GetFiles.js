const fs = require('fs');

const getFilesFromPath = (path, extension) => {
	let data = [];
	let dir = fs.readdirSync(path);
	let files = dir.filter(file =>
		file.match(new RegExp(`.*\.(${extension})`, 'ig'))
	);
	if (!files) {
		console.log('Nenhum arquivo encontrado!');
		return null;
	}
	files.forEach(file => {
		data.push(fs.readFileSync(`${path}/${file}`));
	});
	return data;
};

module.exports = { getFilesFromPath };
