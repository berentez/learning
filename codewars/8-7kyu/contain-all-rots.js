function containAllRots(strng, arr) {
  let rotations = [];

  for (let i = 0; i < arr.length; i++) {
    if (isRotation(strng, arr[i])) {
      rotations.push(arr[i]);
    }
  }
  let set = new Set(rotations);

  console.log(rotations);
  return set.size === strng.length;
}

function isRotation(str, v) {
  if (str.length === v.length) {
    const arr = v.split(str[0]);
    [arr[0], arr[1]] = [arr[1], arr[0]];
    arr.unshift(str[0]);
    return arr.join('') === str;
  }
  return false;
}

// console.log(containAllRots('', []));
// console.log(containAllRots('', ['bsjq', 'qbsj']));
// console.log(
//   containAllRots('bsjq', ['bsjq', 'qbsj', 'sjqb', 'twZNsslC', 'jqbs'])
// );
// console.log(
//   containAllRots('XjYABhR', [
//     'TzYxlgfnhf',
//     'yqVAuoLjMLy',
//     'BhRXjYA',
//     'YABhRXj',
//     'hRXjYAB',
//     'jYABhRX',
//     'XjYABhR',
//     'ABhRXjY',
//   ])
// );

console.log(
  containAllRots('Etsshp', [
    'nVOETcaxdvuk',
    'shpEts',
    'hpEtss',
    'Etsshp',
    'OuIiQ',
    'sXrDdPXIaW',
    'tsshpE',
    'pEtssh',
  ])
);
