const volumeOfRectangularPrism = function volumeOfRectangularPrism(length, width, height) {
	//This method will calculate the volume of a rectangular prism. 
	//You must check that each argument is provided, is a number, and is within proper bounds.
	if (length === undefined || typeof length !== "number" || length <= 0 || length > Number.MAX_SAFE_INTEGER) {
		throw "Invalid length";
	}

	if (width === undefined || typeof width !== "number" || width <= 0 || width > Number.MAX_SAFE_INTEGER) {
		throw "Invalid width";
	}

	if (height === undefined || typeof height !== "number" || height <= 0 || height > Number.MAX_SAFE_INTEGER) {
		throw "Invalid height";
	}

	return length * width * height;

}


const surfaceAreaOfRectangularPrism = function surfaceAreaOfRectangularPrism(length, width, height) {
	//This method will calculate the surface area of a rectangular prism. 
	//You must check that each argument is provided, is a number, and is within proper bounds.
	if (length === undefined || typeof length !== "number" || length <= 0 || length > Number.MAX_SAFE_INTEGER) {
		throw "Invalid length";
	}

	if (width === undefined || typeof width !== "number" || width <= 0  || length > Number.MAX_SAFE_INTEGER) {
		throw "Invalid width";
	}

	if (height === undefined || typeof height !== "number" || height <= 0 || length > Number.MAX_SAFE_INTEGER) {
		throw "Invalid height";
	}

	return 2 * (length * width + width * height + length * height);
}


const volumeOfSphere = function volumeOfSphere(radius) {
	//This method will calculate the volume of a sphere. You must check that each argument is provided, is a number, and is within proper bounds. 
	//You must use Math.PI as the pi value.
	if (radius === undefined || typeof radius !== "number" || radius <= 0 || radius > Number.MAX_SAFE_INTEGER) {
		throw "Invalid radius";
	}

	return (4/3) * Math.PI * Math.pow(radius, 3);
}


const surfaceAreaOfSphere = function surfaceAreaOfSphere(radius) {
	//This method will calculate the surface area of a sphere. You must check that each argument is provided, is a number, and is within proper bounds. 
	//You must use Math.PI as the pi value.
	if (radius === undefined || typeof radius !== "number" || radius <= 0 || radius > Number.MAX_SAFE_INTEGER) {
		throw "Invalid radius";
	}

	return 4 * Math.PI * Math.pow(radius, 2);
}

module.exports = {
    firstName: "Qiuan", 
    lastName: "Wu", 
    studentId: "10409585",
    volumeOfRectangularPrism,
    surfaceAreaOfRectangularPrism,
    volumeOfSphere,
    surfaceAreaOfSphere
};
