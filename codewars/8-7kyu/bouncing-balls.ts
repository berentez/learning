export function bouncingBall(h: number, bounce: number, window: number): number {
  let counter: number = 0;
  let bounceToggle: boolean = false;

  if (h <= 0 || bounce >= 1 || bounce <= 0 || window >= h) {
    return -1;
  }

  while (h > window) {
    if (bounceToggle === false) {
      bounceToggle = true;
      counter++;
      h = h * bounce;
    } else {
      counter++;
      bounceToggle = false;
    }
  }
  return counter;
}

console.log(bouncingBall(3.0, 0.66, 1.5), 3);
console.log(bouncingBall(30.0, 0.66, 1.5), 15);
console.log(bouncingBall(30, 0.75, 1.5), 21);
console.log(bouncingBall(30, 0.4, 10), 3);
