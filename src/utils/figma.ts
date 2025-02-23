export function groupColors(colors: string[]) {
  let grupos = [];

  for (let i = 0; i < colors.length; i += 5) {
    grupos.push(colors.slice(i, i + 5));
  }

  return grupos;
}
export const positionX = {
  0: 0,
  1: 50,
  2: 100,
  3: 150,
  4: 200,
};
