import React from "react";
import { motion } from "framer-motion";
import { Wand2 } from "lucide-react";

interface WelcomeScreenProps {
  onStart: () => void;
}

export const WelcomeScreen: React.FC<WelcomeScreenProps> = ({ onStart }) => {
  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      className="text-center"
    >
      <motion.div
        className="flex justify-center mb-8"
        animate={{ rotate: 360 }}
        transition={{ duration: 2, repeat: Infinity, ease: "linear" }}
      >
        <Wand2 size={48} className="text-purple-600" />
      </motion.div>

      <h1 className="text-4xl font-bold text-gray-800 mb-6 bg-clip-text text-transparent bg-gradient-to-r from-purple-600 to-pink-600">
        Magic Number Guessing Game
      </h1>

      <p className="text-lg text-gray-600 mb-8 max-w-md mx-auto">
        Think of a number between 1-99, and I'll guess it through the power of
        magic! 🎩✨
      </p>

      <motion.button
        whileHover={{ scale: 1.05 }}
        whileTap={{ scale: 0.95 }}
        className="px-8 py-3 bg-gradient-to-r from-purple-600 to-pink-600 text-white rounded-lg font-semibold shadow-lg hover:shadow-xl transition-shadow"
        onClick={onStart}
      >
        Start Game
      </motion.button>
      <motion.p className="text-center mt-8 text-gray-600">
        Idea from Siluna Wimalasinghe
      </motion.p>
    </motion.div>
  );
};
