import { Circle, getDist, isCircleCollided } from "../lib";

const cv = document.querySelector("canvas");
if (cv === null) throw new Error("canvas is null");
const ctx = cv.getContext("2d");
if (ctx === null) throw new Error("context is null");

cv.width = 1280;
cv.height = 720;

const mouse = {
  x: Math.round(cv.width / 2),
  y: Math.round(cv.height / 2),
};

document.onmousemove = (evt) => {
  const rect = cv.getBoundingClientRect();
  mouse.x = Math.round(evt.clientX - rect.left);
  mouse.y = Math.round(evt.clientY - rect.top);
};

const getValidRandomX = (canvasWidth: number, radius: number) => {
  const leftCanvasBoundary = Math.max(radius, Math.random() * canvasWidth);
  const rightCanvasBoundary = canvasWidth - radius;

  return Math.min(leftCanvasBoundary, rightCanvasBoundary);
};

const getValidRandomY = (canvasHeight: number, radius: number) => {
  const topCanvasBoundary = Math.max(radius, Math.random() * canvasHeight);
  const bottomCanvasBoundary = canvasHeight - radius;

  return Math.min(bottomCanvasBoundary, topCanvasBoundary);
};

const isOverlapping = (
  c: Circle[],
  c2X: number,
  c2Y: number,
  c2Radius: number,
) => {
  if (c.length === 0) return false;

  const overlapping = c.filter((c) => {
    const dist = getDist(c.x, c.y, c2X, c2Y);
    return isCircleCollided(dist, c.radius, c2Radius);
  });

  if (overlapping.length > 0) return true;

  return false;
};

let circles: Circle[];
const main = () => {
  circles = [];
  const numCircles = 100;
  const radius = 25;
  const color = "hsl(240, 41%, 35%)";

  for (let i = 0; i < numCircles; i++) {
    let x,
      y: number = 0;
    let c: Circle;
    let willOverlap = true;

    //Fix this logic
    while (willOverlap) {
      x = getValidRandomX(cv.width, radius);
      y = getValidRandomY(cv.height, radius);
      if (isOverlapping(circles, x, y, radius)) continue;
      willOverlap = false;
      c = new Circle(ctx, x, y, radius, color);
      circles.push(c);
    }
  }
};

const animate = () => {
  requestAnimationFrame(animate);

  ctx.clearRect(0, 0, cv.width, cv.height);
  ctx.fillStyle = "blue";
  ctx.font = "16px arial";
  ctx.fillText(`x:${mouse.x} y:${mouse.y}`, mouse.x, mouse.y);

  circles.forEach((c) => c.updateStroke());
};

main();
animate();
