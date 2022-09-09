Set up and track state of the game by defining required variables
Use a variable named ‘board’ to represent the state of the squares on the board 
6 x 7 (6 rows, 7 columns) = 42 squares total
Use a variable named ‘turn’ to track whose turn it is (Player 1 / Player 2)
Use a variable named ‘winner’ to represent…
If player 1 or player 2 won
Null if the game is still in progress
A draw if player 1 nor player 2 won at the end of the game
Store cached element references
Use a constant called ‘squareEls’ to store the 42 elements representing the squares inside the board
Use a constant called ‘messageEl’ to store the element that displays the game’s status on the page (examples below)
“Player 1’s turn”
“Player 2’s turn”
“It’s a draw!’
“Player 1 has won!”
“Player 2 has won!”
Use a constant called ‘resetBtnEl’ to store the element for the reset button that starts the game over
When game loads, the game state should be initialized with a function and also the game state should be rendered through a function
Create function called ‘init’ (init())
Call upon ‘init’ function when game loads
Set the ‘board’ variable to an array containing 42 ‘null’’s to represent the empty squares
Set the ‘turn’ to ‘1’, which will represent Player 1
Set the ‘winner’ to ‘null’ 
Create an empty function called ‘render’ (render())
Call upon ‘render’ at the end of the ‘init’ function
Stub out the render function
Loop over the ‘board’ and for each element:
Use index of the iteration to access the corresponding square in the ‘squareEls’ array
Square style will change dependent on value contained in the current cell being iterated over (‘-1’, ‘1’, ‘null’
Render a message based on the current state of the game
If winner has a value of ‘null’, the game is still in progress, and render whose turn it is
If ‘winner’ is equal to ‘D’ (draw), render a draw message
Otherwise, render a congratulatory message to the player that has won
Define the constants
Use the constant ‘winningCombos’ to define all of the possible winning combinations as an array or arrays (*need to figure out how to account for all of the winning combinations*)
Use a ‘handleClick’ function to respond to a player clicking on a square
Create a function called ‘handleClick’ that was an ‘evt’ as a parameter
Attach an event listener to the game board by adding a new cached element reference that will allow me to use event bubbling
On the ‘click’ event, it should call the ‘handleClick’ function
*find a way to connect the clicking of a square to a the token dropping down from the top of the column to the square that was clicked
Obtain the index of the square that was clicked by “extracting” the index from an ‘id’ assigned to the element in HTML. Assign this ‘id’ to a constant called ‘sqIdx’
If the ‘board’ has a value at the ‘sqIdx’, immediately ‘return’ because that square is already taken. 
If the ‘winner’ is not ‘null’ immediately ‘return’ because the game is over
Update the ‘bard’ array at the ‘sqIdx’ with a current value of ‘turn’
Change the turn by multiplying ‘turn’ by ‘-1’ (flips turn from ‘1’ to ‘-1’ and vice versa)
Set the ‘winner’ variable if the there is a winner by calling a new function called ‘getWinner’ (getWinner())
All the state has been updated so we need to render our updated state to the user by calling the ‘render’ function we wrote earlier (render()). 
Stub up the ‘getWinner’ function
Loop through each winning combination array defined in ‘winningCombos’ array. Total up 4 board positions using the four indexes in the current combo. Convert the total to an absolute value. If the total equals 4, we have a winner. Set the ‘winner’ variable to the board’s value at the index specified by the first index of that winning combination’s array by returning that value
If there is no winner, check to see if there is a draw. Set the ‘winner’ variable to ‘D’ if there are no more nulls in the board array by returning the string ‘D’.
If there is no winner and there isn’t a draw, return ‘null’
Set up reset button so that it functions
Add a reset button to HTML document
Store the reset button element in a constant named ‘resetBtnEl’
Attach event listener to the ‘resetBtnEl’. On the ‘click’ event it should call the ‘init’ function.

