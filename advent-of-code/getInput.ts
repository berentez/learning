const fs = require('fs');

const getInput = (file: string = 'input.txt', split: RegExp | string) => {
  try {
    const buffer = fs.readFileSync(file, 'utf8');
    return split ? buffer.split(split) : buffer;
  } catch (err) {
    console.error(err);
  }
};

export { getInput };
