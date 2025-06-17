function removeRedundant(arr,n){
 let result=[];
 for (let i=0;i<arr.length;i++){
  if (result.length === 0 || arr[i] >=  result[result.length-1]) {
      result.push(arr[i]);
 }
 
}
console.log(result.join(' '));
}
function runProgram(input) {
  input=input.split('\n');
  const arr=input[1].split(' ').map(Number)
  const n=input[0].split(' ').map(Number)
  removeRedundant(arr,n);
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