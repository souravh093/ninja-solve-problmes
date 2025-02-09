const nextPermutation = (nums) => {
  let i = nums.length - 2;
  while (i >= 0 && nums[i] >= nums[i + 1]) i--;

  if (i >= 0) {
    let j = nums.length - 1;
    while (nums[j] <= nums[i]) j--;
    [nums[i], nums[j]] = [nums[j], nums[i]];
  }

  let left = i + 1,
    right = nums.length - 1;
  while (left < right) {
    [nums[left], nums[right]] = [nums[right], nums[left]];
    left++;
    right--;
  }
};

const numbers1 = [1, 2, 3];
nextPermutation(numbers1);
console.log(numbers1); 

const numbers2 = [3, 2, 1];
nextPermutation(numbers2);
console.log(numbers2); 

const numbers3 = [1, 1, 5];
nextPermutation(numbers3);
console.log(numbers3); 
