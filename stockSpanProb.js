 input=input.trim().split("\n");
  let t=+input[0];
  let line=1;
for (let tc=0;tc<t;tc++) {
    let n=+input[line++];
    let prices=input[line++].trim().split(" ").map(Number);
    
    let span=new Array(n).fill(1);
    let stack=[];
    
    for (let i=0;i<n;i++){
      while (stack.length>0&&prices[stack[stack.length-1]]<=prices[i]){
        stack.pop();
      }
      span[i]=stack.length==0?i+1:i-stack[stack.length-1];
      stack.push(i);
    }
      console.log(span.join(" "));
}