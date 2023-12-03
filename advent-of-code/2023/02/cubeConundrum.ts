import { getInput } from '../../getInput';

const games: string[] = getInput('./games.txt', /\r?\n/);

type Cube = {
  red: number;
  green: number;
  blue: number;
};

const determinePossibleGame = () => {
  const cubesInGames = filterToCubes(games);

  splitStringToCubes(cubesInGames);
};

function filterToCubes(games: string[]) {
  const res = games.map((g: string) => g.split(':')[1]);
  return res;
}

function splitStringToCubes(games: string[]) {
  let sum: number = 0;
  const cubes: string[][] = games.map((cubes: string) => cubes.split(/,|;/));
  cubes.forEach((cube: string[], i: number) => {
    let impossible: boolean = checkCubeAmountPossibility(cube);
    if (!impossible) {
      sum += i + 1;
    }
  });
  console.log(sum);
}

function checkCubeAmountPossibility(cube: string[]) {
  let impossible: boolean = false;
  cube.forEach((c: string) => {
    const cubeAmount = parseInt(c.split(' ')[1]);
    const cubeType = c.split(' ')[2];
    if (cubeAmount > 12 && cubeType === 'red') {
      impossible = true;
    } else if (cubeAmount > 13 && cubeType === 'green') {
      impossible = true;
    } else if (cubeAmount > 14 && cubeType === 'blue') {
      impossible = true;
    }
  });
  return impossible;
}

// PART2

const deterMinePowerOfCubeSets = () => {
  const cubesInGames = filterToCubes(games);

  splitStringToCubesForPartTwo(cubesInGames);
};

function splitStringToCubesForPartTwo(games: string[]) {
  const cubes: string[][] = games.map((cubes: string) => cubes.split(/,|;/));
  let power = 0;
  cubes.forEach((cube: string[], i: number) => {
    let powerOfCubes = getMinimumPossibleCubes(cube);
    power += powerOfCubes;
  });
  console.log(power);
}

function getMinimumPossibleCubes(games: string[]) {
  let powerOfCubes: number = 0;
  let cubes: Cube = {
    green: 0,
    red: 0,
    blue: 0,
  };
  games.forEach((c: string) => {
    const cubeAmount = parseInt(c.split(' ')[1]);
    const cubeType = c.split(' ')[2];

    if (cubes[cubeType as keyof Cube] < cubeAmount) {
      cubes[cubeType as keyof Cube] = cubeAmount;
    }
  });
  powerOfCubes = cubes.blue * cubes.green * cubes.red;
  return powerOfCubes;
}

console.log(deterMinePowerOfCubeSets());
