function runProgram(input) {
  // Write code here
   input=input.trim().split("\n");
  let [k,n]=input[0].split(" ").map(Number);
  let arr=input[1].split(" ").map(Number);
  console.log(packers(k,n,arr));
}
  function packers(k,n,arr){
  function countWays(remainingWeight){
    if (remainingWeight<0)return 0;
    if (remainingWeight==0)return 1;
    let ways =0;
    
    for (let i=0;i<n;i++){
      if (arr[i]<=remainingWeight){
        ways+=countWays(remainingWeight-arr[i]);
      }
    }
    return ways 
  }
  return countWays(k);
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