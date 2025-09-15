function runProgram(input) {
 let stack = [];
    let operators = new Set(['+', '-', '*', '/', '^']);
for (let ch of input.trim()) {
        if (!operators.has(ch)) {
            stack.push(ch);
        } else {
            let b=stack.pop();
            let a=stack.pop();
            stack.push("("+a+ch + b + ")");
        }
    }
    console.log(stack.length === 1 ? stack[0] : "Invalid expression");

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