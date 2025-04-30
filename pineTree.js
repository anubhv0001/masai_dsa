function pineTree(n){


    for (let i=0;i<n;i++){
      
      let temp="";
      
      for (let j=0;j<n-i;j++){
        temp+=" ";
      }
      for (let k=0;k<2*i+1;k++){
        temp+="*";
      }
      
      console.log(temp);
      
    }
    }
    
    let n=10;
    pineTree(n);