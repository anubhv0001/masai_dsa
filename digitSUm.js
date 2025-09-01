function runProgram(input) {
  // Write code here
  input=input.trim().split("\n");
  let t=+input[0];
  let line=1;
  for (let i=0;i<t;i++){
    let n= +input[line++];
    let arr=input[line++].trim().split(" ").map(Number);
    digitSum(arr,n);
  }
}
function digitSum(arr,n){
  const getDigitSum=(num)=>{
    return num
    .toString()
    .split("")
    .reduce((a,b)=>a+ +b,0)
  }
  arr.sort((a,b)=>{
    let sumA=getDigitSum(a);
    let sumB=getDigitSum(b);
    if (sumA==sumB){
      return a-b;
    }
    return sumA-sumB;
  })
  console.log(arr.join(" "))
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