function maxheight(arr,n,k){
  let result=[];
  for (let i=0;i<=n-k;i++){
    let max=arr[i];
    for (let j=i;j<i+k;j++){
      if (arr[j]>max){
        max=arr[j];
      }
    }
    result.push(max);
  }
  console.log(result.join(" "));
}
function runProgram(input) {
  // Write code here
 input = input.trim().split('\n');
    let t = +input[0];
    let line = 1;
     for (let i = 0; i < t; i++) {
        let [n, k]=input[line++].trim().split(" ").map(Number);
        let arr=input[line++].trim().split(" ").map(Number);
        maxheight(arr,n,k);
    }
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