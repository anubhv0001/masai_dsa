function runProgram(input) {
  input=input.trim().split("\n");
  let o=+input[0];
  let stack=[];
  let minStack=[];
  let output=[];

  for (let i=1;i<=o;i++) {
    let command = input[i].trim().split(" ");

    if (command[0]==="push") {
      let x=+command[1];
      stack.push(x);
      if (minStack.length===0) {
        minStack.push(x);
      } else {
        minStack.push(Math.min(x, minStack[minStack.length - 1]));
      }
    } 
    
    else if (command[0]==="pop") {
      stack.pop();
      minStack.pop();
    } 
    
    else if (command[0]==="getMin") {
      output.push(minStack[minStack.length - 1]);
    }
  }

  console.log(output.join("\n"));
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