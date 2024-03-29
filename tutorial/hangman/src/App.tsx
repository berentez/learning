import { useCallback, useEffect, useState } from 'react';
import { HangmanDrawing } from './HangmanDrawing';
import { HangmanWord } from './HangmanWord';
import { Keyboard } from './Keyboard';
import words from './wordList.json';

function App() {
  const [wordToGess, setWordToGuess] = useState(getWord());
  const [guessedLetters, setGuessedLetters] = useState<string[]>([]);

  const incorrectLetters = guessedLetters.filter((letter) => !wordToGess.includes(letter));

  const isLoser = incorrectLetters.length >= 6;
  const isWinnser = wordToGess.split('').every((letter) => guessedLetters.includes(letter));

  const addGuessedLetter = useCallback(
    (letter: string) => {
      if (guessedLetters.includes(letter) || isLoser || isWinnser) return;

      setGuessedLetters((currentLetters) => [...currentLetters, letter]);
    },
    [guessedLetters, isWinnser, isLoser]
  );

  function getWord() {
    return words[Math.floor(Math.random() * words.length)];
  }

  useEffect(() => {
    const handler = (e: KeyboardEvent) => {
      const key = e.key;

      if (!key.match(/^[a-z]$/)) return;

      e.preventDefault();
      addGuessedLetter(key);
    };

    document.addEventListener('keypress', handler);

    return () => {
      document.removeEventListener('keypress', handler);
    };
  }, [guessedLetters]);

  useEffect(() => {
    const handler = (e: KeyboardEvent) => {
      const key = e.key;

      if (key !== 'Enter') return;

      e.preventDefault();
      setGuessedLetters([]);
      setWordToGuess(getWord());
    };

    document.addEventListener('keypress', handler);

    return () => {
      document.removeEventListener('keypress', handler);
    };
  }, [guessedLetters]);

  return (
    <div
      style={{
        maxWidth: '800px',
        display: 'flex',
        flexDirection: 'column',
        gap: '2rem',
        margin: '0 auto',
        alignItems: 'center',
      }}
    >
      <div style={{ fontSize: '2em', textAlign: 'center' }}>
        {isWinnser && 'Winner! - Refresh to try again'}
        {isLoser && 'Nice Try - Refresh to try again'}
      </div>
      <HangmanDrawing numberOfGuesses={incorrectLetters.length} />
      <HangmanWord reveal={isLoser} guessedLetters={guessedLetters} wordToGuess={wordToGess} />
      <div style={{ alignSelf: 'stretch' }}>
        <Keyboard
          disabled={isLoser || isWinnser}
          activeLetters={guessedLetters.filter((letter) => wordToGess.includes(letter))}
          inactiveLetters={incorrectLetters}
          addGuessedLetter={addGuessedLetter}
        />
      </div>
    </div>
  );
}
export default App;
