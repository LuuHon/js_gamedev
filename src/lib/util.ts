export const getDist = (x1: number, y1: number, x2: number, y2: number) => {
  let xDist = x2 - x1;
  let yDist = y2 - y1;

  return Number(Math.sqrt(Math.pow(xDist, 2) + Math.pow(yDist, 2)).toFixed(2));
};

export const isCircleCollided = (
  distanceBetween: number,
  r1: number,
  r2: number,
) => {
  const radiiSum = r1 + r2;

  return distanceBetween <= radiiSum;
};
