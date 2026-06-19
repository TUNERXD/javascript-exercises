const sumAll = function(start, end) {
    if (!Number.isInteger(start) || !Number.isInteger(end) || start < 0 || end < 0){
        return "ERROR";
    }
    if (start == end) {
        return start;
    }
    if (end < start) {
        [start, end] = [end, start]
    }
    let result = 0;
    for (let i = start; i <= end; i++) {
        result += i;
    }
    return result;
};

// Do not edit below this line
module.exports = sumAll;
