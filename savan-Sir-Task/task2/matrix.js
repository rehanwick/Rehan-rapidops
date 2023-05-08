mat = [[1,2,3], 
      [4,5,6],
      [7,8,9]]
mat1=[[],[],[]]
angle=prompt('Enter the angle for turn',90)
if(angle == 90){
    for(let i =0 ;i<3;i++){
     for(let j=0; j<3;j++){
         mat1[j].unshift(mat[i][j])
         }
     }
}else if (angle==180){
     for(let i=0;i<3;i++){
         mat1.unshift(mat[i].reverse())
         mat1.pop()
     }
}else if( angle ==270){
    for(let i=0;i<3;i++){
         for(let j=0;j<3;j++){
             mat1[j].push(mat[i][j])
         }  
          mat1.reverse()
     }
}else if (angle==360){
    for(let i=0;i<3;i++){
         mat1.push(mat[i])
         mat1.shift()
     }
}
     console.log(mat1)