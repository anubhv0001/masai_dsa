function runProgram(input) {
  // Write code here
  input=input.trim().split("\n");
  let n=+input[0];
  let names=[];
  let marks=[];
  
  for (let i=1;i<=n;i++){
    let [name,mark]=input[i].trim().split(" ");//particular line ko split krrhe
    names.push(name);
    marks.push(+mark)
  }
  bubbleSort(names,marks,n)
   generateRanks(names, marks, n);

function bubbleSort(names,mark,n){
  for (let i=0;i<n-1;i++){
    for (let j=0;j<n-i-1;j++){
      if (mark[j]<mark[j+1]){
        let tempMark=mark[j];
        mark[j]=mark[j+1];
        mark[j+1]=tempMark;
        
        let tempName=names[j];
        names[j]=names[j+1];
          names[j+1]=tempName;
      }
      else if(mark[j]==mark[j+1]&&names[j].localeCompare(names[j+1])>0){
          let tempName = names[j];
                names[j] = names[j + 1];
                names[j + 1] = tempName;
      }
     
    }
  
}
}
function generateRanks(names,marks,n){
  let currentRank=1;
   let sameRankCount = 0;
   
     console.log(currentRank + " " + names[0]);
     
     for(let i=1;i<n;i++){
       if (marks[i]==marks[i-1]){
         console.log(currentRank+" "+names[i]);
         sameRankCount++;
         
       }
       else{
         currentRank+=sameRankCount+1;
         console.log(currentRank+" "+names[i]);
          sameRankCount = 0;
       }
     }
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