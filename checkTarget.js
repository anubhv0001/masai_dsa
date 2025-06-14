function checkTarget(arr) {
  arr.sort((a, b) => a - b);
  for (let k = arr.length-1; k>=2; k--) {
    let target=arr[k];
    let left=0;
    let right=k - 1;

    while (left<right) {
      let sum = arr[left] +arr[right];

      if (sum===target) {
        console.log('1');
        return;
      } else if (sum<target) {
        left++;
      } else {
        right--;
      }
    }
  }
  console.log('0');
}

function runProgram(input) {
  input=input.trim().split("\n");
  let t=+input[0];
  let line = 1;

  for (let i = 0; i < t; i++) {
    let n = +input[line++];
    let arr = input[line++].trim().split(" ").map(Number);
    checkTarget(arr);
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