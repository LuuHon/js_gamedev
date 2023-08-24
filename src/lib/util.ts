export const getDist = (x1: number, y1: number, x2: number, y2: number) => {
  let xDist = x2 - x1;
  let yDist = y2 - y1;

  return Math.sqrt(Math.pow(xDist, 2) + Math.pow(yDist, 2)).toFixed(2);
};
