const repeatString = function(str, numTimes) {
    // console.log(`string is`, str)
    // console.log(`numTimes is`,numTimes)
    if (numTimes < 0){
        return 'ERROR'
    }
    const result = str.repeat(numTimes)
    console.log(`result of repeat is`, result);
    return result;
};

// Do not edit below this line
module.exports = repeatString;
