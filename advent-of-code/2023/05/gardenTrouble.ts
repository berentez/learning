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

const almanac = getInput('./almanac.txt', /\r?\n/).filter((lines: string) => lines.length);
let sources = almanac[0]
  .split(':')[1]
  .split(' ')
  .filter((s: string) => s)
  .map((x: string) => parseInt(x));

const maps = almanac.filter((line: string) => line);

function createSeddMappingObj(seed: string): SeedMapping {
  const newMapping = {} as SeedMapping;
  return { ...newMapping, seed: parseInt(seed) };
}

const getLowestLocation = () => {
  // iterate through the source array, checking every line if its even relevan or not
  const phaseMatrix: any[][] = createMatrixFromInput();
  for (let i: number = 0; i < phaseMatrix.length; i++) {
    for (let srcIndex = 0; srcIndex < sources.length; srcIndex++) {
      let newSrc: number = 0;
      for (let n: number = 0; n < phaseMatrix[i].length; n++) {
        const numArr: number[] = phaseMatrix[i][n].split(' ').map((d: string) => parseInt(d));
        if (newSrc === 0) {
          if (sources[srcIndex] > numArr[1] && sources[srcIndex] < numArr[1] + numArr[2]) {
            const difference = numArr[0] - numArr[1];
            newSrc = sources[srcIndex] + difference;
          } else if (sources[srcIndex] === numArr[1] && numArr[2] > 0) {
            newSrc = numArr[0];
          }
        }
      }

      if (newSrc !== 0) {
        sources[srcIndex] = newSrc;
      }
    }
  }

  findSmallest(sources);
};

function createMatrixFromInput() {
  maps.shift();
  let phaseMatrix: any[][] = [];
  let phaseArrays: string[] = [];
  for (let i: number = 0; i < maps.length; i++) {
    if (parseInt(maps[i][0]) >= 0) {
      phaseArrays.push(maps[i]);
    } else {
      if (phaseArrays.length) {
        phaseMatrix.push(phaseArrays);
      }
      phaseArrays = [];
    }
  }
  phaseMatrix.push(phaseArrays);
  return phaseMatrix;
}

function findSmallest(locations: string[]) {
  let nums = locations.map((l: string) => parseInt(l));
  nums = nums.sort((a, b) => a - b);
  console.log(nums[0]);
}

console.log(getLowestLocation());
