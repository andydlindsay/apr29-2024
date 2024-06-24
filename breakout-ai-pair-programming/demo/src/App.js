import { useState } from 'react';

const App = () => {
  const generateRandomNumber = () => Math.floor(Math.random() * 100) + 1;

  const [randomNumber, setRandomNumber] = useState(generateRandomNumber);
  const [guess, setGuess] = useState('');
  const [message, setMessage] = useState('');
  const [attempts, setAttempts] = useState([]);
  const [gameOver, setGameOver] = useState(false);

  const handleGuessSubmit = (e) => {
    e.preventDefault();
    const numGuess = parseInt(guess, 10);
    if (isNaN(numGuess) || numGuess < 1 || numGuess > 100) {
      setMessage('Please enter a valid number between 1 and 100.');
      return;
    }

    const newAttempts = [...attempts, numGuess];
    setAttempts(newAttempts);

    if (numGuess === randomNumber) {
      setMessage('Congratulations! You guessed the number.');
      setGameOver(true);
    } else if (newAttempts.length >= 5) {
      setMessage(`Game Over! The number was ${randomNumber}.`);
      setGameOver(true);
    } else if (numGuess < randomNumber) {
      setMessage('Too low. Try again.');
    } else {
      setMessage('Too high. Try again.');
    }
    setGuess('');
  };

  const handleReset = () => {
    setRandomNumber(generateRandomNumber());
    setGuess('');
    setMessage('');
    setAttempts([]);
    setGameOver(false);
  };

  return (
    <div>
      <h1>Number Guessing Game</h1>
      <p>{message}</p>
      {!gameOver && (
        <form onSubmit={handleGuessSubmit}>
          <input
            type="number"
            value={guess}
            onChange={(e) => setGuess(e.target.value)}
            min="1"
            max="100"
          />
          <button type="submit">Submit Guess</button>
        </form>
      )}
      {gameOver && (
        <button onClick={handleReset}>Restart Game</button>
      )}
      <h2>Previous Guesses:</h2>
      <ul>
        {attempts.map((attempt, index) => (
          <li key={index}>{attempt}</li>
        ))}
      </ul>
    </div>
  );
};

export default App;
