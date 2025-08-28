function runProgram(input) {
  input=input.trim();
let stack=[];
  for (let ch of input) {
    if (ch=="("||ch=="[" || ch == "{") {
      stack.push(ch);
    } 
    else if (
      (ch==")"&&stack[stack.length-1]=="(") ||
      (ch=="]"&&stack[stack.length-1]=="[") ||
      (ch=="}"&&stack[stack.length-1] == "{")
    ) {
      stack.pop();
    } 
    else if(ch==")"||ch=="]"||ch=="}"){
      console.log("unbalanced");
      return;
    }
  }
if (stack.length==0) {
    console.log("balanced");
  } else {
    console.log("unbalanced");
  }
}