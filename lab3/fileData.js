const bluebird = require("bluebird");
const Promise = bluebird.Promise;
const fs = bluebird.promisifyAll(require("fs"));


const getFileAsString = async function getFileAsString(path) {

	if (!path) 
		throw "You must provide a path";

	const data = await fs.readFileAsync(path, "utf-8");
	const temp = JSON.stringify(data);
	return temp;

}

const getFileAsJSON = async function getFileAsJSON(path) {

	if (!path) 
		throw "You must provide a path";

	try {
		const res = await getFileAsString(path);
		const obj =  JSON.parse(res);
		return obj;
	}
	catch(error) {
		console.error(error);
	}   	

}

const saveStringToFile = async function saveStringToFile(path, text) {

	if (!path) 
		throw "You must provide a path";

	const res = await fs.writeFile(path, text, (err) => {
		if (err) {
			console.log(err);
		}
	})

	return true;
}

const saveJSONToFile = async function saveJSONToFile(path, obj) {

	if (!path) 
		throw "You must provide a path";
	
	const res = await fs.writeFile(path, JSON.stringify(obj), (err) => {
		if (err) {
			console.log(err);
		}
	})

	return true;
}




module.exports = {
    firstName: "Qiuan", 
    lastName: "Wu", 
    studentId: "10409585",
    getFileAsString,
	getFileAsJSON,
	saveStringToFile,
	saveJSONToFile
};

