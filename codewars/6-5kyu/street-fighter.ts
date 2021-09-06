export function streetFighterSelection(
  fighters: Array<string[]>,
  position: number[],
  moves: string[]
): string[] {
  let res: string[] = [];

  moves.forEach(dir => {
    if (dir === 'up') {
      if (position[0] !== 0) {
        position[0] -= 1;
      }
    } else if (dir === 'down') {
      if (position[0] !== 1) {
        position[0] += 1;
      }
    } else if (dir === 'left') {
      if (position[1] === 0) {
        position[1] = fighters[0].length - 1;
      } else {
        position[1] -= 1;
      }
    } else if (dir === 'right') {
      if (position[1] === fighters[0].length - 1) {
        position[1] = 0;
      } else {
        position[1] += 1;
      }
    }
    res.push(fighters[position[0]][position[1]]);
  });

  return res;
}

const fighters: string[][] = [
  ['Ryu', 'E.Honda', 'Blanka', 'Guile', 'Balrog', 'Vega'],
  ['Ken', 'Chun Li', 'Zangief', 'Dhalsim', 'Sagat', 'M.Bison'],
];

const initialPosition: number[] = [0, 0];

const moves: string[] = [
  'right',
  'down',
  'left',
  'left',
  'left',
  'left',
  'right',
];

console.log(streetFighterSelection(fighters, initialPosition, moves));
