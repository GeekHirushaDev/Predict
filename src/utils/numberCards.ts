export const generateNumberCards = (): number[][] => {
  const cards: number[][] = [];
  for (let i = 0; i < 7; i++) {
    const card: number[] = [];
    for (let num = 1; num <= 99; num++) {
      if ((num >> i) & 1) {
        card.push(num);
      }
    }
    cards.push(card);
  }
  return cards;
};

export const calculateNumber = (answers: boolean[]): number => {
  return answers.reduce((sum, answer, index) => {
    return sum + (answer ? Math.pow(2, index) : 0);
  }, 0);
};