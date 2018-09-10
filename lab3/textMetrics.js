const simplify = function simplify(text) {

	if (text === undefined || typeof text !== 'string') {
		throw "Input must be a string";
	}

	text = text.toLowerCase();
	text = text.trim();
	text = text.replace(/(\r\n|\n|\r)/gm," ");
	text = text.replace(/[.,\/#!$%\^&\*;:{}=\-_`~()]/g,"")
	text = text.replace(/[0-9]/g, "");
	text = text.replace(/\s\s+/g, " ");

	return text;

}


const createMetrics = function createMetrics(text) {

	if (text === undefined || typeof text !== 'string') {
		throw "Input must be a string";
	}

	text = simplify(text);
	var obj = {};

	// number of characters
	var withoutSpace = text.replace(/ /g,"");
	var numofChar = withoutSpace.length;

	// number of words
	var numofWord = 0;
	var wordList = [];
	var eachStr = "";

	for (var i = 0; i < text.length; i++) {

		if (text[i] === " ") {
			numofWord++;
			wordList.push(eachStr);
			eachStr = "";
		}
		else {
			eachStr += text[i];
		}
	}

	// number of unique words
	var hash = [];
	var numofUniqueWord = 0;

	for (var j = 0; j < wordList.length; j++) {

		if (hash.indexOf(wordList[j]) <= -1) {
			hash.push(wordList[j]);
			numofUniqueWord++;
		}
	}

	// long word && average word length
	numofLongWord = 0;
	avgWordLength = 0;

	for (var k = 0; k < wordList.length; k++) {

		if (wordList[k].length >= 6) 
			numofLongWord++;

		avgWordLength += wordList[k].length;
	}

	avgWordLength = avgWordLength / numofWord;

	// occurance of each word
	var charMap = {};

	for (var l = 0; l < wordList.length; l++) {

		if (!charMap.hasOwnProperty(wordList[l])) {
			charMap[wordList[l]] = 1;
		}

		else {
			charMap[wordList[l]] += 1;
		}
	}

	// combine all properties
	obj["totalLetters"] = numofChar;
	obj["totalWords"] = numofWord;
	obj["uniqueWords"] = numofUniqueWord;
	obj["longWords"] = numofLongWord;
	obj["averageWordLength"] = avgWordLength;
	obj["wordOccurrences"] = charMap;

	return obj;

}


module.exports = {
    firstName: "Qiuan", 
    lastName: "Wu", 
    studentId: "10409585",
    simplify,
    createMetrics
};

