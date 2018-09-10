const fileData = require("./fileData");
const textMetrics = require("./textMetrics");
const bluebird = require("bluebird");
const Promise = bluebird.Promise;
const fs = bluebird.promisifyAll(require("fs"));


async function FileReader(i) {

    const checkExist = fs.existsSync(`./chapter${i}.result.json`);
    if (checkExist) {
        try {
            const JSONfile = await fileData.getFileAsJSON(`./chapter${i}.result.json`);
            console.log(JSONfile);
        }
        catch (err) {
            console.log(err);
        }
    }
    
    try {
        const res = await fileData.getFileAsString(`./chapter${i}.txt`);
        const simplified = textMetrics.simplify(res);
        await fileData.saveStringToFile(`./chapter${i}.debug.txt`, simplified);
        const obj = textMetrics.createMetrics(simplified);
        await fileData.saveJSONToFile(`./chapter${i}.result.json`, obj);
        return true;
    }
    catch (err) {
        console.log(err);
    }

}


FileReader(1);
FileReader(2);
FileReader(3);

