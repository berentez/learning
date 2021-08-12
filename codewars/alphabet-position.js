function alphabetPosition(text) {
  const textArray = text.split('');
  const result = [];
  textArray.forEach(letter => {
    const char = letter.toLowerCase().charCodeAt() - 96;

    if (char > 0 && char < 26) {
      result.push(char.toString());
    }
  });
  return result.join(' ');
}

console.log(alphabetPosition("The sunset sets at twelve o' clock."));
console.log(alphabetPosition('The sunset sets at !%/=()Ł$ß'));
