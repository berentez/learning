String.prototype.toJadenCase = function () {
  const str = this.split(' ');
  const newPost = str.map(word => {
    return word.charAt(0).toUpperCase() + word.slice(1);
  });
  return newPost.join(' ');
};

let str = "How can mirrors be real if our eyes aren't real";
console.log(str.toJadenCase());
