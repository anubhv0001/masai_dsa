function solve(str1, str2) {
    // write your code
    let s={};
    for (let i=0;i<str1.length;i++){
      if(s[str1[i]]==undefined){
          s[str1[i]]=1;
      }
      else s[str1[i]]++
    }
    for (let j=0;j<str2.length;j++){
      if(s[str2[j]]==undefined){
          s[str2[j]]=1;
      }
      else s[str2[j]]--;
    }
    for (let i in s){
      if (s[i]!=0){
        console.log("False");
        return;
      }
      
    }
    console.log("True");
    }