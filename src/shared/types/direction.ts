export type Direction =
  | 'top left'
  | 'top right'
  | 'bottom left'
  | 'bottom right';

// TODO move to another folder
export const directionClass: Record<Direction, string> = {
  'bottom left': 'bottomLeft',
  'bottom right': 'bottomRight',
  'top right': 'topRight',
  'top left': 'topLeft',
};
