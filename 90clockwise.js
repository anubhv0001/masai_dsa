function rotateBy90Clockwise(N, matrix){
    for (let i=0;i<N;i++){
      for (let j=i+1;j<N;j++){
          [matrix[i][j],matrix[j][i]]=[matrix[j][i],matrix[i][j]];
      }
    }
        for (let i=0;i<N;i++) {
        matrix[i].reverse()
    }
   for (let i=0;i<N;i++) {
        console.log(matrix[i].join(" "));
    }

}