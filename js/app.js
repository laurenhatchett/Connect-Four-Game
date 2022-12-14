
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
let board, turn, winner

const squareEls = document.querySelectorAll('.square')
const messageEl = document.querySelector('#message')
const resetBtnEl = document.querySelector('#reset-button')
const floatingCircle =document.querySelector('.floating-circle')

squareEls.forEach((square) => {
  square.addEventListener('click', handleClick)
})

resetBtnEl.addEventListener('click', init)

document.addEventListener("mousemove", 
  function(event) {
    mouseX = event.pageX
    mouseY = event.pageY
  })


init()

function init() {
  board = [null, null, null, null, null, null, null, null, null, null, null, null, null, null, null, null, null, null, null, null, null, null, null, null, null, null, null, null, null, null, null, null, null, null, null, null, null, null, null, null, null, null,]
  turn = 1
  winner = null
  render ()
}

function render (){
  board.forEach((squares, idx) =>{  
    if (squares === 1) {
      squareEls[idx].style.background = '#9a031e' 
    } else if (squares === -1) {
      squareEls[idx].style.background = '#e36414' 
    } else {
      squareEls[idx].style.background = "#5f0f40" 
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
  let sqIdxString = evt.target.id 
  let sqIdx = parseInt(sqIdxString.slice(2)) 
    if (board[sqIdx] !== null) {
      return 
  } else if (winner !== null) {
      return 
  } else {
    
    let finalPosition
    for (let i=sqIdx; i<=41 && i>=0; i+=7) {
      if (board[i] !== null) {  
        finalPosition = i-7
        break 
      } else {  
        finalPosition = i 
      } 
    }
    board[finalPosition] = turn 
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

let mouseX = 0
let mouseY = 0

let floatingCircleX = 0
let floatingCircleY = 0

let speed= 0.5

function animate() {
  let distX = mouseX - floatingCircleX
  floatingCircleX = floatingCircleX + (distX * speed)
  floatingCircle.style.left = floatingCircleX + 'px'
  requestAnimationFrame(animate)
}
animate()


