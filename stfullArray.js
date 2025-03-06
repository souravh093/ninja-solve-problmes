function shuffle(nums, n) {
    let ans = [];

    for (let i = 0; i < n; i++) {
        ans.push(nums[i]);
        ans.push(nums[i + n]);
    }

    return ans;
}


console.log(shuffle([2,5,1,3,4,7], 3));
console.log(shuffle([1,2,3,4,4,3,2,1], 4));
console.log(shuffle([1,1,2,2], 2)); 
