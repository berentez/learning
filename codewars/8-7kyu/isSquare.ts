export default function isSquare(n: number): boolean {
  const squareRoot: number = Math.sqrt(n);

  if (squareRoot || squareRoot === 0) {
    const res: string[] = squareRoot.toString().split('.');
    if (res.length < 2) {
      return true;
    }
  }
  return false;
}
