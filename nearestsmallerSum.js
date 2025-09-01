function runProgram(input) {
  input = input.trim().split("\n");
  let t = +input[0];
  let line = 1;

  for (let tc = 0; tc < t; tc++) {
    let n = +input[line++];
    let arr = input[line++].trim().split(" ").map(Number);

    let stack = [];
    let sum = 0;

    for (let i = n - 1; i >= 0; i--) {
      while (stack.length > 0 && stack[stack.length - 1] >= arr[i]) {
        stack.pop();
      }
      if (stack.length === 0) {
        sum += 0;
      } else {
        sum += stack[stack.length - 1];
      }
      stack.push(arr[i]);
    }
    console.log(sum);
  }
}