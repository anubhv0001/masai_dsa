function zTraversal(N,arr){
    //write code here
    let result="";
    let rows=arr.length;
    let cols=arr[0].length
    for (let j=0;j<cols;j++){
     result+=arr[0][j]+" ";
    }
 
 
let i=1,j=cols-2
while(i<rows&&j>=0){
  result+=arr[i][j]+" ";
  i++;
  j--;
}

for (let j=1;j<cols;j++){
  result+=arr[cols-1][j]+" ";
}
console.log(result);
 
}
