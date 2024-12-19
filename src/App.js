import React, { useState } from 'react';
import './App.css';

function App() {
  // Initialize state variables for the game
  const [squares, setSquares] = useState(Array(9).fill(null));  // 9 squares
  const [isXNext, setIsXNext] = useState(true);  // Track whose turn it is (X or O)
  const [winner, setWinner] = useState(null);  // Store the winner (if any)

  // Winning combinations (index-based)
  const winningCombinations = [
    [0, 1, 2],
    [3, 4, 5],
    [6, 7, 8],
    [0, 3, 6],
    [1, 4, 7],
    [2, 5, 8],
    [0, 4, 8],
    [2, 4, 6],
  ];

  // Function to check if there is a winner
  const calculateWinner = (squares) => {
    for (let combination of winningCombinations) {
      const [a, b, c] = combination;
      if (squares[a] && squares[a] === squares[b] && squares[a] === squares[c]) {
        return squares[a];
      }
    }
    return null;
  };

  // Function to handle square click
  const handleClick = (index) => {
    if (squares[index] || winner) return;  // Ignore if already filled or game over

    const newSquares = squares.slice();
    newSquares[index] = isXNext ? 'X' : 'O';  // Mark X or O in the clicked square
    setSquares(newSquares);

    const gameWinner = calculateWinner(newSquares);  // Check if there's a winner
    if (gameWinner) {
      setWinner(gameWinner);
    } else {
      setIsXNext(!isXNext);  // Switch turns
    }
  };

  // Function to reset the game
  const resetGame = () => {
    setSquares(Array(9).fill(null));  // Reset squares
    setWinner(null);  // Reset winner
    setIsXNext(true);  // X goes first
  };

  return (
    <div className="game">
      <h1>Tic-Tac-Toe</h1>
      {winner ? (
        <div className="winner-message">
          <h2>Winner: {winner}</h2>
          <button onClick={resetGame}>Restart Game</button>
        </div>
      ) : (
        <h2>Next player: {isXNext ? 'X' : 'O'}</h2>
      )}
      <div className="board">
        {squares.map((square, index) => (
          <button
            key={index}
            className="square"
            onClick={() => handleClick(index)}
          >
            {square}
          </button>
        ))}
      </div>
    </div>
  );
}

export default App;