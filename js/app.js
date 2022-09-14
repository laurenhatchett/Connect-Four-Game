/*----------------------- Constants --------------------------*/

const winningCombos = [[0, 1, 2, 3], [41, 40, 39, 38],[7, 8, 9, 10], 
[34, 33, 32, 31], [14, 15, 16, 17], [27, 26, 25, 24], 
[21, 22, 23, 24], [20, 19, 18, 17], [28, 29, 30, 31], 
[13, 12, 11, 10], [35, 36, 37, 38], [6, 5, 4, 3], 
[0, 7, 14, 21], [41, 34, 27, 20], [1, 8, 15, 22], 
[40, 33, 26, 19], [2, 9, 16, 23], [39, 32, 25, 18], 
[3, 10, 17, 24], [38, 31, 24, 17], [4, 11, 18, 25], 
[37, 30, 23, 16], [5, 12, 19, 26], [36, 29, 22, 15], 
[6, 13, 20, 27], [35, 28, 21, 14], [0, 8, 16, 24], 
[41, 33, 25, 17], [7, 15, 23, 31], [34, 26, 18, 10], 
[14, 22, 30, 38], [27, 19, 11, 3], [35, 29, 23, 17], 
[6, 12, 18, 24], [28, 22, 16, 10], [13, 19, 25, 31], 
[21, 15, 9, 3], [20, 26, 32, 38], [36, 30, 24, 18], 
[5, 11, 17, 23], [37, 31, 25, 19], [4, 10, 16, 22], 
[2, 10, 18, 26], [39, 31, 23, 15], [1, 9, 17, 25], 
[40, 32, 24, 16], [9, 7, 25, 33], [8, 16, 24, 32], 
[11, 7, 23, 29], [12, 18, 24, 30], [1, 2, 3, 4], 
[5, 4, 3, 2], [8, 9, 10, 11], [12, 11, 10, 9],
[15, 16, 17, 18], [19, 18, 17, 16], [22, 23, 24, 25], 
[26, 25, 24, 23], [29, 30, 31, 32], [33, 32, 31, 30], 
[36, 37, 38, 39], [40, 39, 38, 37], [7, 14, 21, 28], 
[8, 15, 22, 29], [9, 16, 23, 30], [10, 17, 24, 31], 
[11, 18, 25, 32], [12, 19, 26, 33], [13, 20, 27, 34] 
]

/*------------------------ Variables (state) --------------------------*/

let board, turn, winner

/*------------------ Cached Element References --------------*/


const squareEls = document.querySelectorAll('.square')
const messageEl = document.querySelector('#message')
const resetBtnEl = document.querySelector('#reset-button')


console.log(squareEls)
console.log(messageEl)


/*--------------------- Event Listeners -----------------------*/

squareEls.forEach((square) => {
  square.addEventListener('click', handleClick)
})

resetBtnEl.addEventListener('click', init)



/*--------------------- Row & ColumnArrays -----------------------*/

// const row1 = [squareEls[0], squareEls[1], squareEls[2], squareEls[3], squareEls[4], squareEls[5], squareEls[6]]
// const row2 = [squareEls[7], squareEls[8], squareEls[9], squareEls[10], squareEls[11], squareEls[12], squareEls[13]]
// const row3 = [squareEls[14], squareEls[15], squareEls[16], squareEls[17], squareEls[18], squareEls[19], squareEls[20]]
// const row4 = [squareEls[21], squareEls[22], squareEls[23], squareEls[24], squareEls[25], squareEls[26], squareEls[27]]
// const row5 = [squareEls[28], squareEls[29], squareEls[30], squareEls[31], squareEls[32], squareEls[33], squareEls[34]]
// const row6 = [squareEls[35], squareEls[36], squareEls[37], squareEls[38], squareEls[39], squareEls[40], squareEls[41]]


// const rows = [row1, row2, row3, row4, row5, row6]

// const column1 = [squareEls[0], squareEls[7], squareEls[14], squareEls[21], squareEls[28], squareEls[35]]
// const column2= [squareEls[1], squareEls[8], squareEls[15], squareEls[22], squareEls[29], squareEls[36]]
// const column3= [squareEls[2], squareEls[9], squareEls[16], squareEls[23], squareEls[30], squareEls[37]]
// const column4= [squareEls[3], squareEls[10], squareEls[17], squareEls[24], squareEls[31], squareEls[38]] 
// const column5= [squareEls[4], squareEls[11], squareEls[18], squareEls[25], squareEls[32], squareEls[39]]
// const column6= [squareEls[5], squareEls[12], squareEls[19], squareEls[26], squareEls[33], squareEls[40]]
// const column7= [squareEls[6], squareEls[13], squareEls[20], squareEls[27], squareEls[34], squareEls[41]]

// const columns= [column1, column2, column3, column4, column5, column6, column7]

// for (const row of rows){
//   for (const squareEls of rows)




/*------------------------ Functions -------------------------*/

init()

function init () {
  board = [null, null, null, null, null, null, null, null, null, null, null, null, null, null, null, null, null, null, null, null, null, null, null, null, null, null, null, null, null, null, null, null, null, null, null, null, null, null, null, null, null, null,]
  turn = 1
  winner = null
  render ()
}



function render (){
  board.forEach((squares, idx) =>{  
    if (squares === 1) {
      squareEls[idx].style.background = '#9a031e' //game pieces
    } else if (squares === -1) {
      squareEls[idx].style.background = '#e36414' //game pieces
    } else {
      squareEls[idx].textContent = ' ' //when something hasn't happened yet 
    }
    if (winner === null) {
      return (turn === 1 ? messageEl.textContent = "Player 1's turn!!": messageEl.textContent = "Player 2's turn!!")
    } else if (winner === 'D'){
      return messageEl.textContent = 'Draw!'
    } else {
      return (winner === 1 ? messageEl.textContent = "Player 1 has won!" : messageEl.textContent = "Player 2 has won!")
    }
  })
}


function handleClick(evt) {
  let sqIdxString = evt.target.id //targeting id of string index
  let sqIdx = parseInt(sqIdxString.slice(2))// slice is deleting the first 2 characters
  //console.log(sqIdx)
    if (board[sqIdx] !== null) {//means square has a value, 1, or, -1. Use board[sqIdx] to change value in the board array
      return //because a player has clicked there
  } else if (winner !== null) {
      return //can't click on board because we have a winner. both return functions stop us from running the rest of the function
  } else {
    //look at starting idx value, where has been clicked
    //I need to look at boxes below clicked spot
    //loop through by adding 7 which is the box below
    //if box is empty I continue to loop
    //if box has a value I stop
    //if 7 can't be added to the idx at the bottom, I stop and place token in sq
    //idx is less than 41 
    
    let finalPosition
    for (let i=sqIdx; i<=41 && i>=0; i+=7) {
      if (board[i] !== null) {  
        finalPosition = i-7
        break 
      } else {  
        finalPosition = i 
      } //if statement to assign value of "player 1" token or "player 2" token in clicked squares by using textContent
    }
    board[finalPosition] = turn 
    console.log(board)
    turn *= -1
  }
  getWinner()
  render()
}

function getWinner(){
  winningCombos.forEach(winningCombo => {
    let points = 0
    winningCombo.forEach(idx => {
      points += board[idx]
    })
    if (points === 4) {
      return winner = 1
    } else if (points === -4) {
      return winner = -1
    } else {
      if(board.some(square =>
        square === null)===false){
          return winner = 'D'
        }
    }
  })
  render()
}

