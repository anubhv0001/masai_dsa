function alanChristopher(S){
    //write code here
    let res=[];
    for (let i=0;i<S.length;i++){
      if (S[i]!="#"){
        res.push(S[i]);
      }
      else {
        if (res.length>0){
          res.pop();
        }
      }
    }
    console.log(res.join(""))
}