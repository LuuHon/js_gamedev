import { Circle } from "./circle";

const canvas = document.querySelector("canvas");
if (canvas === null) throw new Error("canvas is null");
const c = canvas.getContext("2d");

canvas.width = 800;
canvas.height = 600;

const mouse = {
  x: innerWidth / 2,
  y: innerHeight / 2,
};

document.onmousemove = (evt) => {
  const rect = canvas.getBoundingClientRect();
  mouse.x = evt.clientX - rect.left;
  mouse.y = evt.clientY - rect.top;
};

const animate = () => {
  requestAnimationFrame(animate);

  c.clearRect(0, 0, canvas.width, canvas.height);
  c.fillStyle = "blue";
  c.fillText(`Cursor\r\nx:${mouse.x}\r\ny:${mouse.y}`, mouse.x, mouse.y);

  main();
};

const main = () => {
  const circle = new Circle(c, 100, 200, 100, "green");
  circle.draw();
  circle.update();

  const c2 = new Circle(c, 200, 400, 100, "red");
  c2.draw();
  c2.update();
};

main();
animate();
