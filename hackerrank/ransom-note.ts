/*
 * Complete the 'checkMagazine' function below.
 *
 * The function accepts following parameters:
 *  1. STRING_ARRAY magazine
 *  2. STRING_ARRAY note
 */

function checkMagazine(magazine: string[], note: string[]): void {
  let res: string = 'Yes';

  for (let word of note) {
    if (magazine.includes(word)) {
      magazine.splice(magazine.indexOf(word), 1);
    } else {
      res = 'No';
      break;
    }
  }
  console.log(res);
}

//TEST
checkMagazine(
  ['give', 'me', 'one', 'grand', 'today', 'night'],
  ['give', 'one', 'grand', 'today']
);

checkMagazine(
  ['two', 'times', 'three', 'is', 'not', 'four'],
  ['give', 'one', 'grand', 'today']
);

checkMagazine(
  [
    'apgo',
    'clm',
    'w',
    'lxkvg',
    'mwz',
    'elo',
    'bg',
    'elo',
    'lxkvg',
    'elo',
    'apgo',
    'apgo',
    'w',
    'elo',
    'bg',
  ],
  ['elo', 'lxkvg', 'bg', 'mwz', 'clm', 'w']
);
