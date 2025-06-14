function maximumSumSubarray(arr,n,k){
  let windowSum=0;
  let maxSum=0;
  
  for (let i=0;i<k;i++){
    windowSum+=arr[i];
  }
  maxSum=windowSum;
  
  for (let i=k;i<arr.length;i++){
    windowSum=windowSum-arr[i-k]+arr[i];
    maxSum=Math.max(maxSum,windowSum);
  }
  console.log(maxSum);
}

function runProgram(input) {
  // Write code here
  input=input.split('\n')
  let [n,k]=input[0].trim().split(' ').map(Number);
  let arr=input[1].trim().split(' ').map(Number);
  maximumSumSubarray(arr,n,k);
}