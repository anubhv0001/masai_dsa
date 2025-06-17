function findFirstNegative(arr, k, n) {
  let result =[];

  for (let i =0;i<=n-k;i++) {
    let found=false;
    for (let j=i;j<i+k;j++) {
      if (arr[j]<0){
        result.push(arr[j]);
        found=true;
        break;
      }
    }
    if (!found) {
      result.push(0);
    }
  }

  return result;
}

function runProgram(input) {
  input = input.trim().split('\n');
  let t = parseInt(input[0]);
  let line = 1;

  for (let i = 0; i < t; i++) {
    let [n, k] = input[line++].trim().split(' ').map(Number);
    let arr = input[line++].trim().split(' ').map(Number);
    let res = findFirstNegative(arr, k, n);
    console.log(res.join(" "));
  }
}

if (process.env.USER) {
  runProgram(`2
5 2
-8 2 3 -6 10
8 3
12 -1 -7 8 -15 30 16 28`);
} else {
  
  process.stdin.resume();
  process.stdin.setEncoding("ascii");
  let read = "";
  process.stdin.on("data", function (input) {
    read += input;
  });
  process.stdin.on("end", function () {
    runProgram(read);
  });
  process.on("SIGINT", function () {
    runProgram(read);
    process.exit(0);
  });
}

