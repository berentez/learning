export function isValidWalk(walk: string[]) {
  const time: number = 10;

  const north: number = walk.filter(v => v === 'n').length;
  const south: number = walk.filter(v => v === 's').length;
  const east: number = walk.filter(v => v === 'e').length;
  const west: number = walk.filter(v => v === 'w').length;

  if (walk.length !== time) return false;
  if (north !== south) return false;
  if (east !== west) return false;

  return true;
}

//////////////////////////////////////////////////////////////

console.log('good input', isValidWalk(['n', 'n', 's', 's']));
console.log('odd number of directions', isValidWalk(['n', 'n', 's']));
console.log(
  'incorrect directions',
  isValidWalk(['n', 'n', 'n', 'e', 'e', 'w', 'w', 'w', 's', 's'])
);
console.log(
  'too much input',
  isValidWalk(['n', 'n', 'n', 'e', 'e', 'w', 'w', 'w', 's', 's', 's'])
);
