import { getInput } from '../../getInput';

type Network = {
  [key: string]: { [key: string]: string };
};

const input = getInput('./myInput.txt', /\r?\n/);

const countStepsUntilLastNode = () => {
  const steps: string[] = input[0].split('');
  const nodes: string[] = input.slice(2);
  const network: Network = createNodeNetwork(nodes);

  let isLastNodeFound = false;
  let currentNode = 'AAA';
  let counter: number = 0;

  while (!isLastNodeFound) {
    for (let i: number = 0; i < steps.length; i++) {
      currentNode = network[currentNode][steps[i]];
      counter++;

      if (currentNode === 'ZZZ') {
        isLastNodeFound = true;
        break;
      }
    }
  }
  console.log(counter);
};

function createNodeNetwork(nodes: string[]): Network {
  let res: Network = {} as Network;
  nodes.forEach((node) => {
    node = node.replace('(', '');
    node = node.replace(')', '');
    const splittedNode: string[] = node.split(' = ');

    const mainNode: string = splittedNode[0];
    const navigations: string[] = splittedNode[1].split(', ');
    res[mainNode] = { L: navigations[0], R: navigations[1] };
  });
  return res;
}

console.log(countStepsUntilLastNode());
