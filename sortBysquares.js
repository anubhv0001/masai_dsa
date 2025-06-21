function sortBySquares(arr,n){
  let withIndex=arr.map((val,indx)=>({val,indx}));//humne index ko map kiya arr value ke sath
  
  withIndex.sort((a,b)=>{
    let sqA=a.val*a.val;
    let sqB=b.val*b.val;   //val assign ki sort krne liye
    
    if (sqA!==sqB)return sqA-sqB;//sort kiya agr diff val hai
    return a.indx-b.indx //else sort kiya by indx se
  })
  return withIndex.map(obj=>obj.val).join(' ')//withIndex ko return kiya
}

function runProgram(input) {
  // Write code here
  input=input.split("\n");
  let t=+input[0];
  let line=1;
  for (let i=0;i<t;i++){
    let n=+input[line++]
    let arr=input[line++].split(' ').map(Number)
    console.log(sortBySquares(arr,n))
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