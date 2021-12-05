export class BingoSheet {
  numbers: BingoLine[];
  win: boolean;

  constructor(num: BingoLine[]) {
    this.numbers = num;
    this.win = false;
  }
}

export class BingoLine {
  numbers: BingoNumber[];

  constructor(num: BingoNumber[]) {
    this.numbers = num;
  }
}

export class BingoNumber {
  value: number;
  marked: boolean;

  constructor(num: number) {
    this.value = num;
    this.marked = false;
  }
}
