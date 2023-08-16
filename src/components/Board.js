import { useState } from "react";
import Layout from "./Layout";
import "./Styling.css";

function Board({ setScores }) {
  const [nodes, setNodes] = useState({});
  const [board, setBoard] = useState(Array(9).fill(""));
  const [winLine, setWinLine] = useState([]);


  //function to reset the game after the condition Tic Tac toe board has been filled is met
  const gameReset = () => {
    setWinLine([]);
    setBoard(Array(9).fill(""));
  };

  const getAvailableMoves = (board) => {
    const moves = [];
    board.forEach((cell, index) => {
      if (!cell) moves.push(index);
    });
    return moves;
  };

  /* handle click that populates the grid with string values, alters the defined state of the array (board),
     increments whether the AI or human players score changes or if there is a draw.
  */

  const handleClick = (id) => {
    if (
      isTerminal(board).winner === "X" ||
      isTerminal(board).winner === "O" ||
      isFull(board)
    ) {
      gameReset();
      return;
    }

    if (board[id] !== "") return;

    let editedBoard = [...board];
    editedBoard[id] = "X";

    setBoard(editedBoard);

    if (isTerminal(editedBoard).winner === "X") {
      console.log(isTerminal(editedBoard));
      setWinLine(isTerminal(editedBoard).winLine);
      setScores((prevState) => ({ ...prevState, x: prevState.x + 1 }));
      return;
    }

    let randomNumber = getBestMove(editedBoard, 0, false);
    if (editedBoard[randomNumber] === "") {
      editedBoard[randomNumber] = "O";
    }

    setBoard(editedBoard);

    if (isTerminal(editedBoard).winner === "O") {
      setWinLine(isTerminal(editedBoard).winLine);
      setScores((prevState) => ({ ...prevState, o: prevState.o + 1 }));
      return;
    }

    if (isTerminal(editedBoard).winner === "draw") {
      setScores((prevState) => ({ ...prevState, tie: prevState.tie + 1 }));
    }
  };

  const isEmpty = (board) => {
    return board.every((cell) => !cell);
  };

  const isFull = (board) => {
    return board.every((cell) => cell);
  };

  /*Defines which 3 consective squares on the grid constitutes a win since the array order is not going to match 3 consecutive numbers.
    whether or not the score gets marked and a win is generated depends on selected state array order selected below
  */
  const isTerminal = (board) => {
    if (isEmpty(board)) return false;

    if (board[0] === board[1] && board[0] === board[2] && board[0]) {
      return { winner: board[0], winLine: [0, 1, 2] };
    }
    if (board[3] === board[4] && board[3] === board[5] && board[3]) {
      return { winner: board[3], winLine: [3, 4, 5] };
    }
    if (board[6] === board[7] && board[6] === board[8] && board[6]) {
      return { winner: board[6], winLine: [6, 7, 8] };
    }

    if (board[0] === board[3] && board[0] === board[6] && board[0]) {
      return { winner: board[0], winLine: [0, 3, 6] };
    }
    if (board[1] === board[4] && board[1] === board[7] && board[1]) {
      return { winner: board[1], winLine: [1, 4, 7] };
    }
    if (board[2] === board[5] && board[2] === board[8] && board[2]) {
      return { winner: board[2], winLine: [2, 5, 8] };
    }

    if (board[0] === board[4] && board[0] === board[8] && board[0]) {
      return { winner: board[0], winLine: [0, 4, 8] };
    }
    if (board[2] === board[4] && board[2] === board[6] && board[2]) {
      return { winner: board[2], winLine: [2, 4, 6] };
    }

    if (isFull(board)) {
      return { winner: "draw" };
    }

    return false;
  };

  /*is the minMax algorithm that determins what the best move is for the AI to make. The most common way of doing this is to 
   assign a variable (commonly called depth) and equal it to 100. 100 represent how close to winning X is and -100 represents 
   how to close to winning O is. 
  */
  const getBestMove = (newBoard, depth, isMax, callback = () => {}) => {
    //clear nodesMap when the function is called for a move
    if (depth === 0) setNodes({});

    //if the board state is terminal, then return the heuristic value
    if (isTerminal(newBoard) || depth === -1) {
      if (isTerminal(newBoard).winner === "X") {
        return 100 - depth;
      } else if (isTerminal(newBoard).winner === "O") {
        return -100 + depth;
      }
      return 0;
    }
    
    if (isMax) {
      //initialize best to the lowest possible value
      let best = -100;
      
      getAvailableMoves(newBoard).forEach((index) => {
        //initialize a new board with a copy of the current state of the game
        let child = [...newBoard];
        //create a child node by inseating the X into the index of the currently empty cell
        child[index] = "X";
        //call getBestMove with the new board with updated state
        let score = getBestMove(child, depth + 1, false, callback);
        //update with the best available value
        best = Math.max(best, score);
      });
      return best;
    }

    if (!isMax) {
      //initialize best to the highest possible value
      let best = 100;

      getAvailableMoves(newBoard).forEach((index) => {
      //initialize a new copy with a copy of the current state
        let child = [...newBoard];
        child[index] = "O";

        let score = getBestMove(child, depth + 1, true, callback);
        best = Math.min(best, score);

        //if it is the main call, then return the index of the best available move or a random move if index depth value is equal
        if (depth === 0) {
          console.log(nodes);
          const moves = nodes[score] ? `${nodes[score]},${index}` : index;
          nodes[score] = moves;
        }
      });
      //if it is the main call, return the index of the best move  
      if (depth === 0) {
        let returnValue;
        if (typeof nodes[best] === "string") {
          const arr = nodes[best].split(",");
          const rand = Math.floor(Math.random() * arr.length);
          returnValue = arr[rand];
        } else {
          returnValue = nodes[best];
        }
        //run a callback after the calculation is gotten, and then return the index value
        callback(returnValue);
        return returnValue;
      }
      //if not the main call, then return the heuristic value for the next calculation
      return best;
    }
  };

  //in the JSX, each Square has an index passed as a prop that will correspond to one of the grid's array indexs
  return (
    <div className="board">
      {board.map((val, i) => {
        return (
          <Layout
            key={i}
            id={i}
            value={val}
            handleClick={handleClick}
            board={winLine}
          />
        );
      })}
    </div>
  );
}

export default Board;