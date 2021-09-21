function htmlspecialchars(formData) {
  const harmful = { '<': '&lt;', '>': '&gt;', '"': '&quot;', '&': '&amp;' };
  const inputArr = formData.split('');

  inputArr.forEach((value, i) => {
    if (Object.keys(harmful).includes(value)) {
      inputArr[i] = harmful[value];
    }
  });

  return inputArr.join('');
}

console.log(htmlspecialchars('abc'));
console.log(htmlspecialchars('should test for something'));
console.log(htmlspecialchars('<h2>Hello World</h2>')); //"&lt;h2&gt;Hello World&lt;/h2&gt;"
console.log(htmlspecialchars('Hello, how would you & I fare?'));
