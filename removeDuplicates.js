function removeDuplicates(n1,arr1){
  const s=new Set();
  let j=0;
  let count=0;
  for (let i=0;i<arr1.length;i++){
    if (!s.has(arr1[i])){
      s.add(arr1[i]);
      arr1[j]=arr1[i];
      j++;
      count++;
    }
  }
  let result=arr1.slice(0,j);
  console.log(count);
  console.log(result.join(' '));
}
function runProgram(input) {
  input = input.trim().split("\n");
  let t = +input[0];
  let line = 1;

  for (let i = 0; i < t; i++) {
    let n = +input[line++];
    let arr = input[line++].trim().split(" ").map(Number);
    removeDuplicates(n, arr);
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