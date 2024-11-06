import React from 'react';
import { motion } from 'framer-motion';
import { ThumbsUp, ThumbsDown } from 'lucide-react';

interface GameScreenProps {
  currentCard: number[];
  cardIndex: number;
  totalCards: number;
  onAnswer: (answer: boolean) => void;
}

export const GameScreen: React.FC<GameScreenProps> = ({
  currentCard,
  cardIndex,
  totalCards,
  onAnswer,
}) => {
  return (
    <motion.div
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      exit={{ opacity: 0 }}
      className="w-full max-w-2xl"
    >
      <div className="mb-6 text-center">
        <h2 className="text-2xl font-bold text-gray-800 mb-2">
          Card {cardIndex + 1} of {totalCards}
        </h2>
        <p className="text-lg text-gray-600">
          Is your number in this card?
        </p>
      </div>

      <motion.div
        initial={{ scale: 0.95 }}
        animate={{ scale: 1 }}
        className="bg-white rounded-xl shadow-xl p-6 mb-8"
      >
        <div className="grid grid-cols-5 gap-2">
          {currentCard.map((number) => (
            <motion.div
              key={number}
              whileHover={{ scale: 1.05 }}
              className="aspect-square flex items-center justify-center bg-purple-50 rounded-lg text-purple-700 font-semibold"
            >
              {number}
            </motion.div>
          ))}
        </div>
      </motion.div>

      <div className="flex justify-center gap-4">
        <motion.button
          whileHover={{ scale: 1.05 }}
          whileTap={{ scale: 0.95 }}
          className="flex items-center gap-2 px-6 py-3 bg-green-500 text-white rounded-lg font-semibold shadow-lg hover:bg-green-600 transition-colors"
          onClick={() => onAnswer(true)}
        >
          <ThumbsUp size={20} />
          Yes
        </motion.button>
        
        <motion.button
          whileHover={{ scale: 1.05 }}
          whileTap={{ scale: 0.95 }}
          className="flex items-center gap-2 px-6 py-3 bg-red-500 text-white rounded-lg font-semibold shadow-lg hover:bg-red-600 transition-colors"
          onClick={() => onAnswer(false)}
        >
          <ThumbsDown size={20} />
          No
        </motion.button>
      </div>
    </motion.div>
  );
};