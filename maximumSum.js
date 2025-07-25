function maximumSum(arr,n,k){
  let windowSum=0;
  for (let i=0;i<k;i++){
    windowSum+=arr[i];
  }
  let maxSum=windowSum;
  for (let i=k;i<arr.length;i++){
    windowSum=windowSum-arr[i-k]+arr[i];
    maxSum=Math.max(windowSum,maxSum)
  }
  console.log(maxSum);
}
function runProgram(input) {
  // Write code here
 input=input.split('\n');
 let [n,k]=input[0].split(' ').map(Number);
 let arr=input[1].split(' ').map(Number)
 maximumSum(arr,n,k);
 
}
if (process.env.USER === "") {
  runProgram(``);
} else {
  process.stdin.resume();
  process.stdin.setEncoding("ascii");
  let read = "";
  process.stdin.on("data", function (input) {
    read += input;
  });
  process.stdin.on("end", function () {
    read = read.replace(/\n$/, "");
    read = read.replace(/\n$/, "");
    runProgram(read);
  });
  process.on("SIGINT", function () {
    read = read.replace(/\n$/, "");
    runProgram(read);
    process.exit(0);
  });
}