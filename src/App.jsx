import React, { useRef } from 'react';
import './App.css';
import HomePage from './HomePage';
import GamePage from './GamePage';

function App() {

  const gamePageRef = useRef(null);
  const scrollToGamePage = () => {
    gamePageRef.current.scrollIntoView({ behavior: 'smooth' });
  };

  return (
    <div>
      <HomePage scrollToGamePage={scrollToGamePage} />
      <div ref={gamePageRef}>
        <GamePage />
      </div>
    </div>
  );
}

export default App;
