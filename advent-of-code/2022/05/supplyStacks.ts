import { create } from 'domain';
import { getInput } from '../../getInput';

const data: string[] = getInput('test.txt', /\r?\n/);

const buildCrateArrays = () => {
  const crates = data.slice(0, 8);
  console.log(crates);
  const crateArray = crates.map((arr) => {
    console.log(
      arr.split(']').map((element) => {
        return element;
      })
    );
  });
  // console.log(crateArray);
};

const moveSteps = [];

console.log(buildCrateArrays());

// data.forEach((element) => {

// });
