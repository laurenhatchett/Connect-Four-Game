/*----------------------- Constants --------------------------*/



/*------------------------ Variables (state) --------------------------*/

let board, turn, winner

/*------------------ Cached Element References --------------*/

const squareEls = document.querySelectorAll('.square')

const messageEl = document.querySelector('#message')

const resetBtnEl = document.querySelector('#reset-button')

/*--------------------- Event Listeners -----------------------*/



/*------------------------ Functions -------------------------*/

init()

function init () {
  board = [null, null, null, null, null, null, null, null, null, null, null, null, null, null, null, null, null, null, null, null, null, null, null, null, null, null, null, null, null, null, null, null, null, null, null, null, null, null, null, null, null, null,]
  turn = 1
  winner = null
  render ()
}
