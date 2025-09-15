
/*You are given a postfix expression (also known as Reverse Polish Notation). Your task is to convert it into a fully parenthesized infix expression.

In a postfix expression, each operator follows its operands.
For example, the infix expression a + b is written as ab+ in postfix.

A fully parenthesized infix expression explicitly shows the order of operations using parentheses.
For example, a + b * c becomes (a+(b*c)) when fully parenthesized.

🔧 Input Format

A single line containing a valid postfix expression.

The expression contains:

Lowercase English letters (a to z) representing operands.

Operators: +, -, *, /, ^ */

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