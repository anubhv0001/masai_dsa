function previousSmallest(arr,n){
  let st=[];
  let result=[];
  
  for (let i=0;i<n;i++){
    while (st.length>0&&st[st.length-1]>=arr[i]){
      st.pop()
    }
    if (st.length==0){
      result.push(-1)
    }
    else{
      result.push(st[st.length-1])
    }
    st.push(arr[i]);
  }
  console.log(result.join(' '));
}
function runProgram(input) {
  // Write code here
  input=input.split('\n')
  let n=input[0].split('').map(Number)
  let arr=input[1].split(" ").map(Number)
  previousSmallest(arr,n)
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