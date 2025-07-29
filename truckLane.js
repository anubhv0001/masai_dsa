function solve(n, arr) {
  let expected=1;
  let stack=[];

  for (let i=0;i<arr.length;i++) {
    stack.push(arr[i]);

    while(stack.length>0&&stack[stack.length-1]===expected) {
      stack.pop();
      expected++;
    }
  }

  if(expected===n + 1) {
    console.log("yes");
  }else{
    console.log("no");
  }
}