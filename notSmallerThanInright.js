function runProgram(input) {
  // Write code here
  input=input.split("\n");
  let n=input[0];
  let arr=input[1].split(" ").map(Number)
  let result=[];
  let maxSoFar=-Infinity;
  
  for (let i=n-1;i>0;i--){
    if(arr[i]>=maxSoFar){
      result.push(arr[i]);
      maxSoFar=arr[i];
    }
  }
  console.log(result.reverse().join(" "))
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