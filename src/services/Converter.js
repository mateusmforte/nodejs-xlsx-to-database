const Xlxs = require('node-xlsx');

const convertToJSON = (file, removeFirstLine = false) => {
	let xlxsFile = Xlxs.parse(file);
	if (removeFirstLine) {
		xlxsFile.map(item => {
			item.data.shift();
		});
	}
	let convertedFile = JSON.stringify(xlxsFile);
	return convertedFile;
};

module.exports = { convertToJSON };
