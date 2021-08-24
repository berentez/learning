export function nkotbVsHomie(requirements: string[][]): string[] {
  const res: string[] = [];
  for (let i: number = 0; i < requirements.length; i++) {
    for (let n: number = 0; n < requirements[i].length; n++) {
      const str: string = requirements[i][n];
      const word: string = str.split(' ')[2].toLowerCase();
      const formattedWord: string =
        word.charAt(0).toUpperCase() + word.slice(1);
      res.push(`${formattedWord}! Homie dont play that!`);
    }
  }
  const counter: string = `${requirements[0].length} monitoring objections, ${requirements[1].length} automation, ${requirements[2].length} deployment pipeline, ${requirements[3].length} cloud, and ${requirements[4].length} microservices.`;
  res.push(counter);
  return res;
}

////////////////////

const monitoring = ['We need CLOUDWATCH now!'];
const automation = [
  'We need SALTSTACK now!',
  'We need ansible now!',
  'We need ANSIBLE now!',
];
const deployment = [
  'We need TERRAFORM now!',
  'We need jenkins now!',
  'We need TEAMCITY now!',
  'We need teamcity now!',
  'We need TEAMCITY now!',
];
const cloud = [
  'We need OPENSTACK now!',
  'We need aws now!',
  'We need AWS now!',
];
const microservices = [
  'We need LXC now!',
  'We need lxc now!',
  'We need LXC now!',
  'We need lxc now!',
  'We need DOCKER now!',
];
const requirements = [monitoring, automation, deployment, cloud, microservices];

console.log(nkotbVsHomie(requirements));
