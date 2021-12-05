import { getInput } from '../../getInput';
import { BingoLine, BingoNumber, BingoSheet } from './Bingo';

const calculateScore = () => {};

const markNumber = () => {};

const getBingoSheets = (array: string[]): BingoSheet[] => {
  let bingoSheets: BingoSheet[] = [];
  let bingoNums: BingoNumber[] = [];
  let bingoLines: BingoLine[] = [];

  for (let i: number = 0; i < array.length; i++) {
    if (bingoNums.length < 5) {
      if (array[i] !== '') {
        bingoNums.push(new BingoNumber(parseInt(array[i])));
      }
    } else {
      if (bingoLines.length < 5) {
        bingoLines.push(new BingoLine(bingoNums));
        bingoNums = [];
      } else {
        bingoSheets.push(new BingoSheet(bingoLines));
        bingoLines = [];
      }
    }
  }
  return bingoSheets;
};

const bingoScore = () => {
  //getting data
  const data: string[] = getInput('input.txt', /\r?\n/);
  const [drawRaw, ...bingoBoardsRaw] = data;
  //splitting up data to draw numbers and bingo sheets
  const draw: string[] = drawRaw.split(',');

  //creating the sheets with classes
  const bingoBoards: any = bingoBoardsRaw.join(' ').split(' ');
  const sheets: BingoSheet[] = getBingoSheets(bingoBoards);
  return 0;
};

bingoScore();
