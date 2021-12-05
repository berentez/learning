export class BingoNumber {
  value: number;
  marked: boolean;

  constructor(num: number) {
    this.value = num;
    this.marked = false;
  }

  markNumber() {
    this.marked = true;
  }
}

export class BingoLine {
  numbers: BingoNumber[];

  constructor(num: BingoNumber[]) {
    this.numbers = num;
  }
}

export class BingoSheet {
  numbers: BingoLine[];
  win: boolean;

  constructor(num: BingoLine[]) {
    this.numbers = num;
    this.win = false;
  }

  winGame() {
    this.win = true;
    console.log('BINGO!!');
  }

  markNum(mark: number): BingoLine[] {
    for (let i: number = 0; i < this.numbers.length; i++) {
      for (let n: number = 0; n < this.numbers[i].numbers.length; n++) {
        if (mark === this.numbers[i].numbers[n].value) {
          this.numbers[i].numbers[n].markNumber();
          this.checkLine(this.numbers[i]);
          this.checkRow(n);

          if (this.win) {
            return this.numbers;
          }
        }
      }
    }
    return [];
  }

  checkLine(line: BingoLine) {
    for (let i: number = 0; i < line.numbers.length; i++) {
      if (line.numbers[i].marked) {
        if (i === 4) {
          this.winGame();
          console.log('win line');
        }
      } else {
        break;
      }
    }
  }

  checkRow(row: number) {
    for (let i: number = 0; i < this.numbers.length; i++) {
      if (this.numbers[i].numbers[row].marked) {
        if (i === 4) {
          this.winGame();
          console.log('win row');
        }
      } else {
        break;
      }
    }
  }
}
