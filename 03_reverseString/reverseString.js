const reverseString = function(origString) {
    let newString =''
    console.log(`orignstring is `, origString)
    for (let i=origString.length-1; i>=0; i--) {
        console.log(`original letter is:`, origString[i])
        newString = newString+origString[i]
    }
    console.log(`FINAL string is:`, newString)
    return newString
};

// Do not edit below this line
module.exports = reverseString;
