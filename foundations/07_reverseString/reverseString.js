const reverseString = function(str) {
    let len = str.length;
    let result = ""
    for (let i = 0; i < len; i++) {
        result += str[len - (i + 1)];
    }
    return result;
};

// Do not edit below this line
module.exports = reverseString;
