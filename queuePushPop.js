function runProgram(input) {
  // Write code here
  input=input.trim().split("\n");
  let Q=+input[0];
  let queue=[];
  let S=0;
  
  for (let i=1;i<=Q;i++){
    let parts=input[i].trim().split(" ").map(Number);
    
    if (parts[0]==1){
      queue.push(parts[1]);
    }
    else if (parts[0]===2){
      if (queue.length>0){
        let removed=queue.shift();
        S+=removed
      }
      else{
        S-=1;
      }
    }
  }
  console.log(S);
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