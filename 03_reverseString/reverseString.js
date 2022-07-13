const reverseString = function(string) {
    let stringArray=string.split("");
    let reversedArray= stringArray.reverse();
    let revString= reversedArray.join('');
    return revString;
};

// Do not edit below this line
module.exports = reverseString;
