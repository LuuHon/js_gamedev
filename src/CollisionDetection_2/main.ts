import { Circle } from "../lib";

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

let circles: Circle[];
const main = () => {
  circles = [];
  for (let i = 0; i < 5; i++) {
    const x = Math.random() * cv.width;
    const y = Math.random() * cv.height;
    const radius = 50;
    const color = "hsl(240, 41%, 35%)";
    circles.push(new Circle(ctx, x, y, radius, color));
  }

  console.log();
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
