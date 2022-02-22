
// You should implement your task here.

module.exports = function towelSort (matrix) {
  let arr = [];
  if(matrix === undefined){
    return arr;
  }
  for(let i = 0; i < matrix.length; i++){
    if(i === 1 || i === 3){
      for(let j = matrix[i].length -1; j >= 0; j--){
        arr.push(matrix[i][j])
      }
    }else if(i === 0 || i === 2){
    for(let k = 0; k < matrix[i].length; k++){
      arr.push(matrix[i][k]);
    }}
  }
  return arr;
}
