function getConcatenation(nums) {
    return [...nums, ...nums];
}


console.log(getConcatenation([1,2,1]));
console.log(getConcatenation([1,3,2,1]));