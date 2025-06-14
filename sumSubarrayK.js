// Function to check if there is a subarray with sum K
function findSubarrayWithSumK(arr, n, k) {
// write code here
let start=0;
let sum=0;

for (let end=0;end<arr.length;end++){
  sum+=arr[end];
  while (sum>k&&start<=end){
    sum-=arr[start];
    start++;
  }
  if (sum==k){
    console.log('Yes')
    return;
  }
 
}
console.log('No');
}