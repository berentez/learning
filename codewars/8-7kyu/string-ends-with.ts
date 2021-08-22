export function solution(str: string, ending: string): boolean {
  const strEnd: string = str.slice(str.length - ending.length);
  return ending === strEnd;
}


