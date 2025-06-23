function nextGreaterElement(arr,n){
  let res=Array(n).fill(-1);
  let st=[];
  for (let i=0;i<2*n;i++){
    let curr=arr[i%n];
    
    while(st.length&&arr[st[st.length-1]]<curr){
      const index=st.pop();
      res[index]=curr;
      
    }
    if(i<n){
      st.push(i);
    }
  }
  console.log(res.join(' '));
}

function runProgram(input) {
  // Write code here
  input=input.split("\n");
  let t=+input[0];
  let line=1;
  for(let i=0;i<t;i++){
    let n=+input[line++];
    let arr=input[line++].split(' ').map(Number);
    nextGreaterElement(arr,n);
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
