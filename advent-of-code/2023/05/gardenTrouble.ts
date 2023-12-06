// seeds
// seeds => soil => fertilizer => water => light => temperature => humidity => location

import { KeyInterface } from '../../KeyInterface';
import { getInput } from '../../getInput';

//         SOIL                       SEED
// destination range start | source range start | range length
//          50                      98                  2
//          50, 51                  98, 99
// seed 98 - soil 50
// seed 99 - soil 51

//          52-99                   50-97               48                  // You actually add 47, because 1 is the value itself
// seed 50 - soil 52
// ...
// seed 53 - soil 55

// what is not mapped corresponds to same number
// seed 10 - soil 10
// in this case mapping starts at 50 - 53
// so after 97seed - 99soil
// seed 49 - soil 49
// ... mapping starts
// seed 50 - soil 53
// ...
// seed 97 - soil 99
// ... mapping ends
// seed 98 - soil 50
// seed 99 - soil 51

type SeedMapping = {
  seed: number;
  soil: number;
  fertilizer: number;
  water: number;
  light: number;
  temperature: number;
  humidity: number;
  location: number;
};

const almanac = getInput('./test.txt', /\r?\n/).filter((lines: string) => lines.length);
let source = almanac[0]
  .split(':')[1]
  .split(' ')
  .filter((s: string) => s);

const maps = almanac.filter((line: string) => line);

function createSeddMappingObj(seed: string): SeedMapping {
  const newMapping = {} as SeedMapping;
  return { ...newMapping, seed: parseInt(seed) };
}

const getLowestLocation = () => {
  let rangeObj = {} as KeyInterface;
  for (let i: number = 2; i < maps.length; i++) {
    if (parseInt(maps[i]) >= 0) {
      calculateRange(maps[i].split(' '), rangeObj);
    } else {
      getNewSource(rangeObj);
      rangeObj = {};
    }
  }
  getNewSource(rangeObj);
  findSmallest(source);
};

function calculateRange(array: string[], rangeObj: KeyInterface) {
  const numMaps = array.map((str: string) => parseInt(str));
  for (let i: number = 0; i < numMaps[2]; i++) {
    rangeObj[numMaps[1] + i] = numMaps[0] + i;
  }
}

function getNewSource(rangeObj: KeyInterface) {
  let newSource: string[] = [];
  source.forEach((src: string) => {
    const s: string = src.toString();
    if (rangeObj[s]) {
      newSource.push(rangeObj[s].toString());
    } else {
      newSource.push(s);
    }
  });
  source = [...newSource];
}

function findSmallest(locations: string[]) {
  let nums = locations.map((l: string) => parseInt(l));
  nums = nums.sort((a, b) => a - b);
  console.log(nums[0]);
}

console.log(getLowestLocation());
