	const questionOne = function questionOne(arr) {
    // Implement question 1 here
    let result = 0;

    for (let i = 0; i < arr.length; i++) {
        result = result + arr[i] * arr[i];
    }

    return result;
}



const questionTwo = function questionTwo(num) { 
    // Implement question 2 here
    var result = 0;
    var first = 0;
    var second = 1;

    if (num == 0) 
        return 0;

    if (num == 1) 
        return 1;

    for (var i = 1; i < num; i++) {
        result = first + second;
        first = second;
        second = result;
    }

    return result;
}


const questionThree = function questionThree(text) {
    // Implement question 3 here
    var result = text.match(/[aeiou]/gi);
    return result == null ? 0 : result.length;
}

const questionFour = function questionFour(num) {
    // Implement question 4 here
    var result = 1;

    if (num < 0) 
        return NaN;

    if (num == 0)
        return 1;

    else{
        while (num >= 1) {
            result += result * (num - 1);
            num--;
        }
    }

    return result;

}

module.exports = {
    firstName: "Qiuan", 
    lastName: "Wu", 
    studentId: "10409585",
    questionOne,
    questionTwo,
    questionThree,
    questionFour
};