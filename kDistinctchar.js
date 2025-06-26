function kDistinctChar(str,k){
 let count=0;
 let left=0;
 let charMap=new Map();
 for (let right=0;right<str.length;right++){
   let rightChar=str[right];
   charMap.set(rightChar,(charMap.get(rightChar)||0)+1);
    if (right-left+1>k) {
      let leftChar = str[left];
      charMap.set(leftChar, charMap.get(leftChar) - 1);
      if (charMap.get(leftChar) === 0) {
        charMap.delete(leftChar);
      }
      left++;
    }
    if (right-left+1===k&&charMap.size===k){
      count++;
    }
 }
 console.log(count);
}
function runProgram(input) {
  // Write code here
  input=input.split('\n');
  let t=input[0];
  let line=1;
  for (let i=0;i<t;i++){
    let str=input[line++];
    let k=Number(input[line++]);
    kDistinctChar(str,k)
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
