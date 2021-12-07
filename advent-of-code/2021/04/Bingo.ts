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
  lines: BingoLine[];
  win: boolean;

  constructor(num: BingoLine[]) {
    this.lines = num;
    this.win = false;
  }

  winGame() {
    this.win = true;
    console.log('BINGO!!');
  }

  markNum(mark: number): (number | BingoLine[])[] {
    for (let i: number = 0; i < this.lines.length; i++) {
      for (let n: number = 0; n < this.lines[i].numbers.length; n++) {
        if (mark === this.lines[i].numbers[n].value) {
          this.lines[i].numbers[n].markNumber();

          this.checkColumn(n);
          this.checkLine(this.lines[i]);
        }
      }
    }
    if (this.win) {
      return [mark, this.lines];
    }
    return [];
  }

  checkLine(lines: BingoLine) {
    for (let i: number = 0; i < lines.numbers.length; i++) {
      if (lines.numbers[i].marked) {
        if (i === 4) {
          this.winGame();
          break;
        }
      } else {
        break;
      }
    }
  }

  checkColumn(column: number) {
    for (let i: number = 0; i < this.lines.length; i++) {
      if (this.lines[i].numbers[column].marked) {
        if (i === 4) {
          this.winGame();
          break;
        }
      } else {
        break;
      }
    }
  }
}
