const deepEquality = function deepEquality(obj1, obj2) {
	//This method check each field (at every level deep) in obj1 and obj2 for equality. 
	//It will return true if each field is equal, and false if not.
	var o1 = Object.getOwnPropertyNames(obj1);
	var o2 = Object.getOwnPropertyNames(obj2);

	if (obj1 === undefined || typeof obj1 !== 'object') {
		throw "First argument is undefined";
	}

	if (obj2 === undefined || typeof obj2 != 'object') {
		throw "Second argument is undefined";
	}

	if(o1.length != o2.length) {
		return false;
	}

	for (var i = 0; i < o1.length; i++) {
		
		if (o1[i] !== o2[i] || obj1[o1[i]] !== obj2[o2[i]]) {
			return false;
		}
	}

	return true;

}


const uniqueElements = function uniqueElements(arr) {
	//This method will iterate throughout the array provided in arr and return how many unique elements are in the array.
	//You must check that arr is provided and that it is an array. 
	var hash = [];
	var count = 0;

	if (arr === undefined) {
		throw "Arr is not defined";
	}

	if (!Array.isArray(arr)) {
		throw "Arr is not an array";
	}

	for (var i = 0; i < arr.length; i++) {

		if (hash.indexOf(arr[i]) <= -1) {
			hash.push(arr[i]);
			count ++;
		}
	}

	return count;

}



const countOfEachCharacterInString = function countOfEachCharacterInString(str) {
	//This method will traverse the string provided, str, and return an object. 
	//Each unique character in the array will be a key in the object, and the value will be how many times it appears in the string provided.
	var charMap = {};

	if (str === undefined) {
		throw "Str is not defined";
	}

	if (typeof str !== 'string') {
		throw "Str is not a string";
	}

	for (var i = 0; i < str.length; i++) {
		if (!charMap.hasOwnProperty(str[i])) {
			charMap[str[i]] = 1;
		}

		else {
			charMap[str[i]] += 1;
		}
	}

	return charMap;
}




module.exports = {
    firstName: "Qiuan", 
    lastName: "Wu", 
    studentId: "10409585",
	deepEquality,
	uniqueElements,
	countOfEachCharacterInString

}