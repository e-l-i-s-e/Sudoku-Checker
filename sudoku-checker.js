function getRow(sudokuGrid, rowIdx){
  return sudokuGrid[rowIdx];
}
// getRow(puzzle, 1)

function getColumn(sudokuGrid, columnIdx){
  return sudokuGrid.reduce((accum, elem) => {
    accum.push(elem[columnIdx]);
    return accum;
  }, [])
}
// getColumn(puzzle, 5)

function getGrid(sudokuGrid, y, x){
  let selectedGrid = []
  let yCoords = []; 
  let xCoords = [];
  for (let i = 0; i < 3; i++){
    yCoords.push(y * 3 + i);
    xCoords.push(x * 3 + i);
  }

  for(let j = xCoords[0]; j <= xCoords[xCoords.length - 1] ; j++){
    for (let k = yCoords[0]; k <= yCoords[yCoords.length - 1]; k++){
      selectedGrid.push(sudokuGrid[j][k]); 
    }
  }
  return selectedGrid;
}
// getGrid(puzzle, 2, 0)

function includes1to9(subsection){
  for(let i = 0; i < subsection.length; i++){
    for(let j = 0; j < subsection.length; j++){
      if (i !== j && subsection[i] === subsection[j]){
        return false
      }
    }
  } return true;
}
// includes1to9([1,2,3,4,5,6,7,8,9]) 
// includes1to9([1,1,2,3,4,5,6,7,8])

function sudokuChecker(sudokuGrid){
  for(let i = 0; i < 9; i++){
    if(!includes1to9(getRow(sudokuGrid, i))){
      return false;
    } 
    if(!includes1to9(getColumn(sudokuGrid, i))){
      return false;
    } 
  }
  
  for(let j = 0; j < 3; j++){
    for (let k = 0; k < 3; k++){
      if (!includes1to9(getGrid(sudokuGrid, j, k))){
        return false;
      }
    }
  }  
  return true; 
}
// sudokuChecker(puzzle);

function isSame(puzzle1, puzzle2){
  for(let i = 0; i < puzzle1.length; i++){
    for(let k = 0; k < puzzle1[0].length; k++){
      if (!(puzzle1[i][k] === puzzle2[i][k])){
        return false;
      }
    }
  } return true;
}

let puzzle = [[ 8,9,5,   7,4,2,   1,3,6 ],
              [ 2,7,1,   9,6,3,   4,8,5 ],
              [ 4,6,3,   5,8,1,   7,9,2 ],

              [ 9,3,4,   6,1,7,   2,5,8 ],
              [ 5,1,7,   2,3,8,   9,6,4 ],
              [ 6,8,2,   4,5,9,   3,7,1 ],

              [ 1,5,9,   8,7,4,   6,2,3 ],
              [ 7,4,6,   3,2,5,   8,1,9 ],
              [ 3,2,8,   1,9,6,   5,4,7 ]];

let puzzleCopy = [[ 8,9,5,7,4,2,1,3,6 ],
                  [ 2,7,1,9,6,3,4,8,5 ],
                  [ 4,6,3,5,8,1,7,9,2 ],
                  [ 9,3,4,6,1,7,2,5,8 ],
                  [ 5,1,7,2,3,8,9,6,4 ],
                  [ 6,8,2,4,5,9,3,7,1 ],
                  [ 1,5,9,8,7,4,6,2,3 ],
                  [ 7,4,6,3,2,5,8,1,9 ],
                  [ 3,2,8,1,9,6,5,4,7 ]];

let p8zzle = [[ 8,9,5,7,4,2,1,3,6 ],
              [ 8,7,1,9,6,3,4,8,5 ],
              [ 4,6,3,5,8,1,7,9,2 ],
              [ 9,3,4,6,1,7,2,5,8 ],
              [ 5,1,7,2,3,8,9,6,4 ],
              [ 6,8,2,4,5,9,3,7,1 ],
              [ 1,5,9,8,7,4,6,2,3 ],
              [ 7,4,6,3,2,5,8,1,9 ],
              [ 3,2,8,1,9,6,5,4,7 ]];


isSame(puzzle, puzzleCopy);
