import React, { useState, useCallback } from 'react';
import { AnimatePresence } from 'framer-motion';
import { WelcomeScreen } from './components/WelcomeScreen';
import { GameScreen } from './components/GameScreen';
import { ResultScreen } from './components/ResultScreen';
import { generateNumberCards, calculateNumber } from './utils/numberCards';
import type { GameState } from './types/game';

function App() {
  const [gameState, setGameState] = useState<GameState>('welcome');
  const [cards] = useState(() => generateNumberCards());
  const [currentCardIndex, setCurrentCardIndex] = useState(0);
  const [answers, setAnswers] = useState<boolean[]>([]);

  const handleStart = useCallback(() => {
    setGameState('playing');
    setCurrentCardIndex(0);
    setAnswers([]);
  }, []);

  const handleAnswer = useCallback((answer: boolean) => {
    setAnswers(prev => [...prev, answer]);
    
    if (currentCardIndex < cards.length - 1) {
      setCurrentCardIndex(prev => prev + 1);
    } else {
      setGameState('result');
    }
  }, [currentCardIndex, cards.length]);

  return (
    <div className="min-h-screen bg-gradient-to-br from-gray-50 to-gray-100 flex items-center justify-center p-4">
      <AnimatePresence mode="wait">
        {gameState === 'welcome' && (
          <WelcomeScreen key="welcome" onStart={handleStart} />
        )}
        
        {gameState === 'playing' && (
          <GameScreen
            key="game"
            currentCard={cards[currentCardIndex]}
            cardIndex={currentCardIndex}
            totalCards={cards.length}
            onAnswer={handleAnswer}
          />
        )}
        
        {gameState === 'result' && (
          <ResultScreen
            key="result"
            number={calculateNumber(answers)}
            onPlayAgain={handleStart}
          />
        )}
      </AnimatePresence>
    </div>
  );
}

export default App;