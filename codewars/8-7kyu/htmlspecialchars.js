function htmlspecialchars(formData) {
  const arr = formData.split('');

  for (let i = 0; i < arr.length; i++) {
    if (arr[i] === '<') {
      arr[i] = '&lt;';
    } else if (arr[i] === '>') {
      arr[i] = '&gt;';
    } else if (arr[i] === '"') {
      arr[i] = '&quot;';
    } else if (arr[i] === '&') {
      arr[i] = '&amp;';
    }
  }

  return arr.join('');
}

console.log(htmlspecialchars('abc'));
console.log(htmlspecialchars('should test for something'));
console.log(htmlspecialchars('<h2>Hello World</h2>')); //"&lt;h2&gt;Hello World&lt;/h2&gt;"
console.log(htmlspecialchars('Hello, how would you & I fare?'));
