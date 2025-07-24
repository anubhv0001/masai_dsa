function Solve(n,A){
    //write code here
    let result=[];
    let maxRight=-Infinity;
    
    for (let i=n-1;i>=0;i--){
      if(A[i]>=maxRight){
        result.push(A[i]);
        maxRight=A[i];
      }
    }
    console.log(result.reverse().join(" "));
}