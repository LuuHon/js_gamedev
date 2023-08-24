import { Circle } from "../lib/circle";
import { getDist, isCircleCollided } from "../lib/util";

const cv = document.querySelector("canvas");
if (cv === null) throw new Error("canvas is null");

const ctx = cv.getContext("2d");
ctx.font = cv.style.font;

cv.width = 800;
cv.height = 600;

const mouse = {
  x: innerWidth / 2,
  y: innerHeight / 2,
};

document.onmousemove = (evt) => {
  const rect = cv.getBoundingClientRect();
  mouse.x = evt.clientX - rect.left;
  mouse.y = evt.clientY - rect.top;
};

let moving: Circle;
let stationary: Circle;

const movingInitialColor = "green";
const stationaryInitialColor = "blue";
const collidedColor = "red";
const main = () => {
  moving = new Circle(ctx, undefined, undefined, 100, movingInitialColor);
  stationary = new Circle(ctx, 300, 400, 100, stationaryInitialColor);
};

const animate = () => {
  requestAnimationFrame(animate);

  ctx.clearRect(0, 0, cv.width, cv.height);
  ctx.fillStyle = "blue";
  ctx.font = "24px Arial";

  stationary.updateFill();
  moving.x = mouse.x;
  moving.y = mouse.y;
  moving.updateFill();

  const distance = getDist(moving.x, moving.y, stationary.x, stationary.y);
  const fillTextLeftMargin = 16 * 7;

  ctx.fillText(
    `D:${distance} x:${mouse.x} y:${mouse.y}`,
    mouse.x + fillTextLeftMargin,
    mouse.y,
  );

  if (isCircleCollided(distance, moving.radius, stationary.radius)) {
    moving.color = collidedColor;
    stationary.color = collidedColor;
    return;
  }

  moving.color = movingInitialColor;
  stationary.color = stationaryInitialColor;
};

main();
animate();
