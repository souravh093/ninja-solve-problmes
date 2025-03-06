function numIdenticalPairs(nums) {
    let count = 0;
    let freq = {};

    for (let num of nums) {
        if (freq[num]) {
            count += freq[num];
            freq[num]++;
        } else {
            freq[num] = 1;
        }
    }

    return count;
}


console.log(numIdenticalPairs([1,2,3,1,1,3])); 
console.log(numIdenticalPairs([1,1,1,1])); 
console.log(numIdenticalPairs([1,2,3])); 
