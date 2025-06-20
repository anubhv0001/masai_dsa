function duplicateRemoval(len,str){
  let st=[];
  for (let i=0;i<str.length;i++){
    if (st.length==0){
      st.push(str[i])
    }
    else{
      if (st[st.length-1]==str[i]){
        st.pop();
      }
      else{
        st.push(str[i]);
      }
    }
  }
  console.log(st.join(''));
}
function runProgram(input) {
  // Write code here
   input = input.trim().split("\n");
  let t=parseInt(input[0]);
  let line=1;
  for (let i=0;i<t;i++){
    let len=parseInt(input[line]);
    let str=input[line+1];
    duplicateRemoval(len,str);
    line+=2
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