function runProgram(input) {
  input = input.trim().split("\n");
  let t = +input[0];
  let line = 1;

  while (t--) {
    let n = +input[line++];
    let arr = input[line++].trim().split(" ").map(Number);

    let nextGreater = new Array(n).fill(-1);
    let nextSmaller = new Array(n).fill(-1);

    // Next Greater Element (to the right)
    let stack = [];
    for (let i = n - 1; i >= 0; i--) {
      while (stack.length && arr[stack[stack.length - 1]] <= arr[i]) {
        stack.pop();
      }
      if (stack.length) {
        nextGreater[i] = stack[stack.length - 1];
      }
      stack.push(i);
    }

    // Next Smaller Element (to the right)
    stack = [];
    for (let i = n - 1; i >= 0; i--) {
      while (stack.length && arr[stack[stack.length - 1]] >= arr[i]) {
        stack.pop();
      }
      if (stack.length) {
        nextSmaller[i] = arr[stack[stack.length - 1]];
      }
      stack.push(i);
    }

    // Final result
    let result = [];
    for (let i = 0; i < n; i++) {
      if (nextGreater[i] === -1) {
        result.push(-1);
      } else {
        result.push(nextSmaller[nextGreater[i]]);
      }
    }

    console.log(result.join(" "));
  }
}
