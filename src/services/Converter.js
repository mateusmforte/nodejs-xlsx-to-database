const Xlxs = require('node-xlsx');

const convertToJSON = file => {
	let xlxsFile = Xlxs.parse(file);
	let convertedFile = JSON.stringify(xlxsFile);
	return convertedFile;
};

module.exports = { convertToJSON };
