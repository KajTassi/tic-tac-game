# Scoreboard: Kaj's Tic Tac Toe Game

Deployed here: https://gameboardai.vercel.app/

This is a one player, human vs AI tic-tac-toe game that was built using React.JS. If you would like to play the game live, you can use the link above. 

If you would like to play the game locally on your own machine, you can download the zip file of this game, run "npm install", and then "npm start" to play the game locally. 

## Code review

This project was built to be assesed for feedback. The goal were to provide ample psuedo-code and proper indentation to make the project as readable as possible. This is not only effective in a career setting for letting others read your work, but for understanding your own thought process if you go back to work on your project later. 

## Tech stack

I built this application using the frameworks that I am most comfortable with. 

- Langauges: JavaScript, CSS, HTML
- Frameworks: React.JS
- Deployment: Vercel

## AI goal used for this project

<p width="800" align="justify">The goal of this game was to create a fun playable Tic Tac Toe game that can be played on Mobile, Tablet, or computer screens. I wanted the AI to be challenging but not impossible; so the game is winable. The Algorithm used for the game is based off how probable it is for the AI or the human player to get 3 squares in a row. The probability for getting three squares in a row is initialized as a variable called depth which can be found in the code. The variable depth, is what determines how likely it is for either the AI or the human player to win, and is the foundation for how the code works.The algorithm will make it so that the AI is always trying to get select three consequtive spaces; or to block the human player from getting three consecutive spaces if it is in a losing position.</p>

<p>What is unique about this tic-tac-toe game; is that the algorithm will behave differently if certain conditions are met. I did not want to spoil the game by writing out how it works in this section of the project. However, there is a detailed explanation of how to beat the AI in the Board.js component and how it works, in the src folder of the project.</p>

<p>Can you beat the AI?</p>

<img src="/tic-tac-game/gameboard.JPG" width="800" height="auto" alt="Tic-tac-toe game screenshots">