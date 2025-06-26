function runProgram(input) {
  input=input.trim().split('\n');
  let N=Number(input[0]);
  let S=input[1].trim();
let A=[0];

  for(let i=1;i<=N;i++) {
    let index=A.indexOf(i-1);
    if (S[i-1]==='L') {
      A.splice(index,0,i); 
    } else {
      A.splice(index+1,0,i); 
    }
  }

  console.log(A.join(' '));
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
/*
LRRLR=>1 2 4 5 3 0
 */