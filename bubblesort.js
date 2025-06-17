function hassanSelectionSort(arr, k){
  let n=arr.length;
  for (let i=0;i<n-1;i++){
    for (let j=0;j<n-i-1;j++){
      let modA=arr[j]%k;
      let modB=arr[j+1]%k;
      if (modA>modB){
        [arr[j],arr[j+1]]=[arr[j+1],arr[j]]
      }
    }
  }
  console.log(arr.join(' '));
}

function runProgram(input) {
  // Write code here
  input = input.trim().split("\n");
  const [n, k] = input[0].split(" ").map(Number);
  const arr = input[1].split(" ").map(Number);
  const result = hassanSelectionSort(arr, k);
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