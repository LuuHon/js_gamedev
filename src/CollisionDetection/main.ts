import { Circle } from "../lib/circle";
import { getDist } from "../lib/util";

const cv = document.querySelector("canvas");
if (cv === null) throw new Error("canvas is null");
const ctx = cv.getContext("2d");

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

const main = () => {
  moving = new Circle(ctx, undefined, undefined, 50, "green");
  stationary = new Circle(ctx, 300, 400, 50, "blue");
};

const animate = () => {
  requestAnimationFrame(animate);

  ctx.clearRect(0, 0, cv.width, cv.height);
  ctx.fillStyle = "blue";

  // circles.forEach((c) => c.update());
  stationary.update({ stroke: false });
  moving.xCord = mouse.x;
  moving.yCord = mouse.y;
  moving.update({ stroke: false });

  const distance = getDist(moving.x, moving.y, stationary.x, stationary.y);
  const fillTextLeftMargin = 16 * 4;
  ctx.fillText(
    `D:${distance} x:${mouse.x} y:${mouse.y}`,
    mouse.x + fillTextLeftMargin,
    mouse.y,
  );
};

main();
animate();
