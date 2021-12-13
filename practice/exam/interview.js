const allPeople = [
  { name: 'Andrew', age: 18 },

  { name: 'Jonathan', age: 7 },

  { name: 'Christopher', age: 28 },

  { name: 'Kyle', age: 13 },

  { name: 'Arun', age: 52 },

  { name: 'Giles', age: 41 },
];

function getOldestPerson(people) {
  let oldest = 0;
  let res = {};

  for (let i = 0; i < people.length; i++) {
    if (people[i].age > oldest) {
      oldest = people[i].age;
      res = people[i];
    }
  }

  return res;
}

console.log(getOldestPerson(allPeople));

function getTheNamesOfAdults(people) {
  let resArr = [];

  for (let i = 0; i < people.length; i++) {
    if (people[i].age >= 18) {
      resArr.push(people[i].name);
    }
  }

  return resArr;
}

console.log(getTheNamesOfAdults(allPeople));

const coins = [5, 10, 20, 50, 100, 200];

const vendingMachine = (price, input, coins) => {
  let resArr = [];

  let change = input - price;

  coins.sort(value => value < change);

  for (let i = coins.length - 1; i >= 0; i--) {
    for (let n = 0; n < coins.length; n++) {
      if (coins[i] <= change) {
        change -= coins[i];
        resArr.push(coins[i]);
      } else {
        break;
      }
    }
    if (change === 0) {
      break;
    }
  }

  return resArr;
};

console.log(vendingMachine(160, 200, coins));
