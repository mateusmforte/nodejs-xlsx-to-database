const Xlxs = require('node-xlsx');

const convertXLSXToJSON = (files, removeFirstLine = false) => {
	let data = [];
	files.forEach(file => {
		xlsxFile = Xlxs.parse(file);
		data.push(xlsxFile);
	});
	data.forEach(item => {
		if (removeFirstLine) {
			item.map(content => {
				content.data.shift();
			});
		}
	});
	let convertedFile = JSON.stringify(data);
	return convertedFile;
};

module.exports = { convertXLSXToJSON: convertXLSXToJSON };
