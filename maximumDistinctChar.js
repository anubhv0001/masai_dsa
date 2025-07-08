function findUniquewindow(arr,n){
  let left=0;
  let seen=new Set();
  let maxlen=0;
  for (let right=0;right<arr.length;right++){
    while (seen.has(arr[right])){
      seen.delete(arr[left]);
      left++;
    }
    seen.add(arr[right]);
    maxlen=Math.max(maxlen,right-left+1)
  }
  console.log(maxlen);
}
function runProgram(input) {
  // Write code here
   input=input.split('\n');
  let t=input[0];
  let line=1;
  for (let i=0;i<t;i++){
    let n=input[line++];
    let arr=input[line++].trim().split(" ").map(Number);
    findUniquewindow(arr,n);
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
