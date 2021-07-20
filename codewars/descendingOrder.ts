export function descendingOrder(n: number): number {
  const prep: string[] = n.toString().split('');
  const resNum: number = parseInt(prep.sort((a, b) => parseInt(b) - parseInt(a)).join(''));
  return resNum;
}
