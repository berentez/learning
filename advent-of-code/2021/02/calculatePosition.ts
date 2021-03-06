export {};

const fs = require('fs');

interface KeyInterface {
  [key: string]: number;
}

//PART 1

function calculatePosition(): number {
  let directions: KeyInterface = {
    forward: 0,
    down: 0,
    up: 0,
  };

  let text: string = fs.readFileSync('input.txt', 'utf-8');
  let splittedText: string[] = text.split(/\r?\n/);

  for (let i: number = 0; i < splittedText.length; i++) {
    let dir: string[] = splittedText[i].split(' ');
    directions[dir[0]] += parseInt(dir[1]);
  }

  const horizontal: number = directions.forward;
  const vertical: number = directions.down - directions.up;
  return horizontal * vertical;
}

console.log(calculatePosition());

//PART 2

function calculatePositionWithAim(): number {
  let directions: KeyInterface = {
    horizontal: 0,
    vertical: 0,
    aim: 0,
  };

  let text: string = fs.readFileSync('input.txt', 'utf-8');
  let splittedText: string[] = text.split(/\r?\n/);

  for (let i: number = 0; i < splittedText.length; i++) {
    let dir: string[] = splittedText[i].split(' ');
    if (dir[0] === 'down') {
      directions.aim += parseInt(dir[1]);
    } else if (dir[0] === 'up') {
      directions.aim -= parseInt(dir[1]);
    } else {
      directions.horizontal += parseInt(dir[1]);
      directions.vertical += parseInt(dir[1]) * directions.aim;
    }
  }

  return directions.horizontal * directions.vertical;
}

console.log(calculatePositionWithAim());
