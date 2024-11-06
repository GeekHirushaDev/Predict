export type GameState = 'welcome' | 'playing' | 'result';

export interface NumberCard {
  id: number;
  numbers: number[];
}