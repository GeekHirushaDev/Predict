import React from 'react';
import { motion } from 'framer-motion';
import { Sparkles } from 'lucide-react';

interface ResultScreenProps {
  number: number;
  onPlayAgain: () => void;
}

export const ResultScreen: React.FC<ResultScreenProps> = ({ number, onPlayAgain }) => {
  return (
    <motion.div
      initial={{ opacity: 0, scale: 0.9 }}
      animate={{ opacity: 1, scale: 1 }}
      className="text-center"
    >
      <motion.div
        className="flex justify-center mb-8"
        animate={{ rotate: [0, 360] }}
        transition={{ duration: 2, repeat: Infinity, ease: "linear" }}
      >
        <Sparkles size={48} className="text-yellow-500" />
      </motion.div>

      <h2 className="text-3xl font-bold text-gray-800 mb-4">
        Your number is...
      </h2>

      <motion.div
        initial={{ scale: 0 }}
        animate={{ scale: 1 }}
        transition={{ delay: 0.5, type: "spring", stiffness: 200, damping: 20 }}
        className="w-32 h-32 mx-auto mb-8 bg-gradient-to-r from-purple-600 to-pink-600 rounded-2xl flex items-center justify-center"
      >
        <span className="text-5xl font-bold text-white">{number}</span>
      </motion.div>

      <motion.button
        whileHover={{ scale: 1.05 }}
        whileTap={{ scale: 0.95 }}
        className="px-8 py-3 bg-gradient-to-r from-purple-600 to-pink-600 text-white rounded-lg font-semibold shadow-lg hover:shadow-xl transition-shadow"
        onClick={onPlayAgain}
      >
        Play Again
      </motion.button>
    </motion.div>
  );
};