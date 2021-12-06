import { getInput } from '../../getInput';
import { BingoLine, BingoNumber, BingoSheet } from './Bingo';

const calculateScore = (sheet: BingoLine[]): number => {
  let res: number = 0;
  for (let i: number = 0; i < sheet.length; i++) {
    for (let n: number = 0; n < sheet[i].numbers.length; n++) {
      if (!sheet[i].numbers[n].marked) {
        res += sheet[i].numbers[n].value;
      }
    }
  }
  return res;
};

const getBingoSheets = (array: string[]): BingoSheet[] => {
  let bingoSheets: BingoSheet[] = [];
  let bingoNums: BingoNumber[] = [];
  let bingoLines: BingoLine[] = [];

  for (let i: number = 0; i < array.length; i++) {
    if (array[i] !== '') {
      bingoNums.push(new BingoNumber(parseInt(array[i])));
    }
    if (bingoNums.length === 5) {
      bingoLines.push(new BingoLine(bingoNums));
      bingoNums = [];

      if (bingoLines.length === 5) {
        bingoSheets.push(new BingoSheet(bingoLines));
        bingoLines = [];
      }
    }
  }
  return bingoSheets;
};

const markNumber = (
  draw: number[],
  sheets: BingoSheet[]
): (number | BingoLine[])[] => {
  for (let i: number = 0; i < draw.length; i++) {
    for (let n: number = 0; n < sheets.length; n++) {
      let bingo: (number | BingoLine[])[] = sheets[n].markNum(draw[i]);
      if (bingo.length > 0) {
        return bingo;
      }
    }
  }
  return [];
};

const loserBingo = (
  draw: number[],
  sheets: BingoSheet[]
): (number | BingoLine[])[] => {
  for (let i: number = 0; i < draw.length; i++) {
    for (let n: number = 0; n < sheets.length; n++) {
      let bingo: (number | BingoLine[])[] = sheets[n].markNum(draw[i]);
      if (bingo.length > 0) {
        if (sheets.length === 1) {
          return bingo;
        } else {
          sheets = sheets.filter(value => value.win === false);
          console.log(`sheets`, sheets);
        }
      }
    }
  }
  return [];
};

const bingoScore = (aim?: string) => {
  //getting data
  const data: string[] = getInput('testInput.txt', /\r?\n/);
  const [drawRaw, ...bingoBoardsRaw] = data;
  //splitting up data to draw numbers and bingo sheets
  const draw: string[] = drawRaw.split(',');
  const drawNums: number[] = draw.map(value => {
    return parseInt(value);
  });

  //creating the sheets with classes
  const bingoBoards: any = bingoBoardsRaw.join(' ').split(' ');
  const sheets: BingoSheet[] = getBingoSheets(bingoBoards);
  let bingo: (number | BingoLine[])[] = [];
  if (aim === 'lose') {
    bingo = loserBingo(drawNums, sheets);
  } else {
    bingo = markNumber(drawNums, sheets);
  }
  const justCalled: number | BingoLine[] = bingo[0];
  const board: number | BingoLine[] = bingo[1];
  console.log(justCalled);

  return (justCalled as number) * calculateScore(board as BingoLine[]);
};

console.log(bingoScore('lose'));
