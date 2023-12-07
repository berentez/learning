// seeds
// seeds => soil => fertilizer => water => light => temperature => humidity => location

import { getInput } from '../../getInput';

const almanac = getInput('./almanac.txt', /\r?\n/).filter((lines: string) => lines.length);
let sources = almanac[0]
  .split(':')[1]
  .split(' ')
  .filter((s: string) => s)
  .map((x: string) => parseInt(x));

const maps = almanac.filter((line: string) => line);

const getLowestLocation = () => {
  // const src = createSources(); for part 2
  const src = [...sources];
  const phaseMatrix: any[][] = createMatrixFromInput();
  for (let i: number = 0; i < phaseMatrix.length; i++) {
    for (let srcIndex = 0; srcIndex < src.length; srcIndex++) {
      let newSrc: number = 0;
      for (let n: number = 0; n < phaseMatrix[i].length; n++) {
        const numArr: number[] = phaseMatrix[i][n].split(' ').map((d: string) => parseInt(d));
        if (newSrc === 0) {
          if (src[srcIndex] > numArr[1] && src[srcIndex] < numArr[1] + numArr[2]) {
            const difference = numArr[0] - numArr[1];
            newSrc = src[srcIndex] + difference;
          } else if (src[srcIndex] === numArr[1] && numArr[2] > 0) {
            newSrc = numArr[0];
          }
        }
      }

      if (newSrc !== 0) {
        src[srcIndex] = newSrc;
      }
    }
  }
  findSmallest(src);
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

function findSmallest(locations: number[]) {
  locations = locations.sort((a, b) => a - b);
  console.log(locations[0]);
}

function createSources() {
  let newSources: number[] = [];
  for (let i: number = 0; i < 2; i += 2) {
    for (let n: number = 0; n < sources[i + 1]; n++) {
      newSources.push(sources[i] + n);
    }
  }
  return newSources;
}

console.log(getLowestLocation());
